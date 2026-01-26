import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

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
    const { userAgent, referrer, timestamp, location } = req.body;
    
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

    // Email notification to you
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '🔔 New Website Visitor',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">🌐 New Visitor on Your Website</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>⏰ Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
            <p><strong>📍 IP Address:</strong> ${locationData.ip}</p>
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 4px; margin: 10px 0;">
              <p style="margin: 5px 0;"><strong>🌍 Location:</strong> ${locationData.city}, ${locationData.region}, ${locationData.country}</p>
              <p style="margin: 5px 0;"><strong>⏱️ Timezone:</strong> ${locationData.timezone}</p>
              <p style="margin: 5px 0;"><strong>🌐 ISP:</strong> ${locationData.isp}</p>
            </div>
            <p><strong>🔗 Referrer:</strong> ${referrer || 'Direct visit'}</p>
            <p><strong>📄 Page:</strong> ${location || 'Homepage'}</p>
            <p><strong>💻 Device Info:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; font-size: 12px; word-break: break-all;">${userAgent}</p>
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
            This is an automated notification sent when someone visits devendigitallabs.com
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
