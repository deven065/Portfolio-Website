import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Bot detection function
function isBot(userAgent: string = ''): boolean {
  const botPatterns = [
    /bot/i, /crawl/i, /spider/i, /slurp/i,
    /google/i, /bing/i, /yahoo/i, /baidu/i, /yandex/i, /duckduck/i,
    /facebook/i, /twitter/i, /linkedin/i, /instagram/i,
    /pinterest/i, /whatsapp/i, /telegram/i, /slack/i,
    /lighthouse/i, /pagespeed/i, /gtmetrix/i, /pingdom/i,
    /uptime/i, /monitor/i, /check/i, /scan/i, /test/i,
    /curl/i, /wget/i, /python/i, /java/i, /ruby/i, /php/i,
    /axios/i, /node-fetch/i, /got/i, /fetch/i, /http/i,
    /headless/i, /phantom/i, /selenium/i, /puppeteer/i, /playwright/i,
    /prerender/i, /preview/i, /vercel-bot/i, /cloudflare/i,
    /semrush/i, /ahrefs/i, /moz/i, /majestic/i, /screaming/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
}

// Check if visitor seems legitimate
function isLegitimateVisitor(userAgent: string = '', screenResolution?: string): boolean {
  // Must have a user agent
  if (!userAgent || userAgent.length < 10) return false;
  
  // Filter out bots
  if (isBot(userAgent)) return false;
  
  // Should have screen resolution (real browsers provide this)
  if (screenResolution && !screenResolution.match(/^\d+x\d+$/)) return false;
  
  // Must contain common browser indicators
  const hasBrowserIndicator = /mozilla|chrome|safari|firefox|edge|opera/i.test(userAgent);
  if (!hasBrowserIndicator) return false;
  
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { userAgent, referrer, timestamp, location, screenResolution, timezone } = req.body;
    
    // IMPORTANT: Filter bots and illegitimate visitors
    if (!isLegitimateVisitor(userAgent, screenResolution)) {
      console.log('Bot or invalid visitor filtered:', { userAgent });
      return res.status(200).json({ 
        success: true, 
        message: 'Request filtered (bot or invalid)' 
      });
    }
    
    // Get IP address
    const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'Unknown';
    
    // Get location data from IP
    let locationData = {
      ip,
      city: 'Unknown',
      region: 'Unknown',
      country: 'Unknown',
      timezone: 'Unknown',
      isp: 'Unknown',
    };

    if (ip !== 'Unknown') {
      try {
        const ipAddress = Array.isArray(ip) ? ip[0] : ip.split(',')[0].trim();
        const geoResponse = await fetch(`http://ip-api.com/json/${ipAddress}?fields=status,country,countryCode,region,regionName,city,timezone,isp,query`);
        const geoData = await geoResponse.json();
        
        if (geoData.status === 'success') {
          locationData = {
            ip: geoData.query || ipAddress,
            city: geoData.city || 'Unknown',
            region: geoData.regionName || 'Unknown',
            country: geoData.country || 'Unknown',
            timezone: geoData.timezone || 'Unknown',
            isp: geoData.isp || 'Unknown',
          };
        }
      } catch (geoError) {
        console.error('Failed to fetch geolocation:', geoError);
      }
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Determine device type from user agent
    const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);
    const isTablet = /tablet|ipad/i.test(userAgent);
    const deviceType = isTablet ? '📱 Tablet' : isMobile ? '📱 Mobile' : '💻 Desktop';
    
    // Browser detection
    let browser = 'Unknown';
    if (/edg/i.test(userAgent)) browser = 'Edge';
    else if (/chrome/i.test(userAgent)) browser = 'Chrome';
    else if (/firefox/i.test(userAgent)) browser = 'Firefox';
    else if (/safari/i.test(userAgent)) browser = 'Safari';
    else if (/opera|opr/i.test(userAgent)) browser = 'Opera';
    
    // Email notification to you
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `✅ Real Visitor: ${locationData.city}, ${locationData.country}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">👤 Verified Human Visitor</h2>
          <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; border-radius: 8px;">
            <p><strong>⏰ Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
            <p><strong>📍 IP Address:</strong> ${locationData.ip}</p>
            <div style="background-color: #dcfce7; padding: 15px; border-radius: 4px; margin: 10px 0;">
              <p style="margin: 5px 0;"><strong>🌍 Location:</strong> ${locationData.city}, ${locationData.region}, ${locationData.country}</p>
              <p style="margin: 5px 0;"><strong>⏱️ Timezone:</strong> ${timezone || locationData.timezone}</p>
              <p style="margin: 5px 0;"><strong>🌐 ISP:</strong> ${locationData.isp}</p>
            </div>
            <p><strong>🔗 Referrer:</strong> ${referrer || 'Direct visit'}</p>
            <p><strong>📄 Page:</strong> ${location || 'Homepage'}</p>
            <p><strong>${deviceType} | 🌐 ${browser}</strong></p>
            ${screenResolution ? `<p><strong>📺 Screen:</strong> ${screenResolution}</p>` : ''}
            <details style="margin-top: 10px;">
              <summary style="cursor: pointer; color: #059669;">View Technical Details</summary>
              <p style="background-color: white; padding: 15px; border-radius: 4px; font-size: 12px; word-break: break-all; margin-top: 10px;">${userAgent}</p>
            </details>
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
            ✅ This notification is sent only for verified human visitors (bots & crawlers filtered)
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Visitor tracked successfully' 
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to track visitor',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
