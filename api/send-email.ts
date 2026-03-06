import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Notification email — sent to you when someone submits the form
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@devendigitallabs.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@devendigitallabs.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

  try {
    const { fullName, companyName, email, phone, budget, projectDescription } = req.body;

    // Only name, email, and project description are required
    if (!fullName || !email || !projectDescription) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const budgetLabel = budget === 'not-sure'
      ? 'Not sure yet / open to discussion'
      : budget || 'Not specified';

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // ── Email TO YOU (admin notification) ───────────────────────────────────────
    const { error: adminError } = await resend.emails.send({
      from: `Deven Digital Labs <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL],
      subject: `🔔 New Lead: ${fullName}${companyName ? ` — ${companyName}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #60a5fa; margin-top: 0;">New Contact Form Submission</h2>
          <p style="color: #94a3b8; font-size: 12px; margin-bottom: 24px;">Received at ${timestamp} IST</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 140px;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #1e293b; font-weight: bold;">${fullName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">${companyName || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #1e293b;"><a href="mailto:${email}" style="color: #60a5fa;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">${phone || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8;">Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #34d399; font-weight: bold;">${budgetLabel}</td></tr>
          </table>
          <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; border-left: 3px solid #60a5fa;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Project Description</p>
            <p style="margin: 0; white-space: pre-wrap;">${projectDescription}</p>
          </div>
          <div style="margin-top: 24px;">
            <a href="mailto:${email}" style="background: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Reply to ${fullName}</a>
          </div>
        </div>
      `,
    });

    if (adminError) {
      console.error('[send-email] Admin email error:', JSON.stringify(adminError));
      // Don't block — still try to send client confirmation
    }

    // ── Confirmation email TO CLIENT ────────────────────────────────────────────
    const { error: clientError } = await resend.emails.send({
      from: `Deven Digital Labs <${FROM_EMAIL}>`,
      to: [email],
      subject: `We received your inquiry, ${fullName.split(' ')[0]}! ✅`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #60a5fa; margin-top: 0;">Thanks for reaching out, ${fullName.split(' ')[0]}!</h2>
          <p>We've received your inquiry and will review it within <strong>24–48 hours</strong> during business days (Mon–Fri, 10am–7pm IST).</p>
          <div style="background: #1e293b; padding: 20px; border-radius: 8px; margin: 24px 0;">
            <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Your submission summary</p>
            ${companyName ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${companyName}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Budget:</strong> ${budgetLabel}</p>
            <p style="margin: 8px 0;"><strong>Project:</strong></p>
            <p style="margin: 0; white-space: pre-wrap; color: #cbd5e1;">${projectDescription}</p>
          </div>
          <p>In the meantime, feel free to book a call directly:</p>
          <a href="https://cal.com/deven-rikame-2jhxbu" style="background: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; margin: 8px 0;">Book a Free Discovery Call</a>
          <p style="margin-top: 32px; color: #64748b; font-size: 13px;">Best regards,<br/><strong>Deven Rikame</strong><br/>Deven Digital Labs<br/><a href="mailto:hello@devendigitallabs.com" style="color: #60a5fa;">hello@devendigitallabs.com</a></p>
        </div>
      `,
    });

    if (clientError) {
      console.error('[send-email] Client confirmation email error:', JSON.stringify(clientError));
    }

    // If admin email hard-failed, return error so the user sees it
    if (adminError && !clientError) {
      return res.status(500).json({ success: false, message: 'Failed to deliver notification email' });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('[send-email] Unexpected error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
