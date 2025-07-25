import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASSWORD exists:", !!process.env.EMAIL_PASSWORD);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Send email error:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Internal Server Error", error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "Internal Server Error", error: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}

export async function GET() {
  return NextResponse.json({
    emailUser: process.env.EMAIL_USER || "NOT LOADED",
    emailPasswordExists: !!process.env.EMAIL_PASSWORD,
  });
}
