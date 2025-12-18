import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleSendEmail: RequestHandler = async (req, res) => {
  try {
    const { fullName, companyName, email, phone, budget, projectDescription } = req.body;

    // Validate required fields
    if (!fullName || !email || !projectDescription) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields" 
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to you (admin)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Company Name:</strong> ${companyName || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
            <p><strong>Project Description:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${projectDescription}</p>
          </div>
        </div>
      `,
    };

    // Email to client (confirmation)
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Deven Digital Labs',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank You for Reaching Out!</h2>
          <p>Hi ${fullName},</p>
          <p>Thank you for contacting Deven Digital Labs. We've received your message and will get back to you shortly.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your submission details:</strong></p>
            <p><strong>Company:</strong> ${companyName || 'Not provided'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not provided'}</p>
            <p><strong>Project Description:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${projectDescription}</p>
          </div>
          <p>We typically respond within 24-48 hours during business days.</p>
          <p style="margin-top: 30px;">Best regards,<br>Deven Digital Labs Team</p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);

    res.json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send email" 
    });
  }
};
