import { RequestHandler } from "express";
import { Invoice, CreateInvoiceRequest } from "@shared/invoice";
import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

const INVOICES_FILE = path.join(process.cwd(), "data", "invoices.json");

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read invoices from file
async function readInvoices(): Promise<Invoice[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(INVOICES_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write invoices to file
async function writeInvoices(invoices: Invoice[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(INVOICES_FILE, JSON.stringify(invoices, null, 2));
}

// Generate invoice number
function generateInvoiceNumber(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `INV-${year}${month}-${random}`;
}

// Create new invoice
export const createInvoice: RequestHandler = async (req, res) => {
  try {
    const data: CreateInvoiceRequest = req.body;

    const invoice: Invoice = {
      id: `inv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      invoiceNumber: generateInvoiceNumber(),
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      clientPhone: data.clientPhone,
      clientAddress: data.clientAddress,
      amount: data.amount,
      totalAmount: data.amount,
      subtotal: data.amount,
      tax: 0,
      currency: data.currency || "INR",
      description: data.description,
      items: data.items,
      status: "pending",
      date: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      dueDate: data.dueDate,
      notes: data.notes,
    };

    const invoices = await readInvoices();
    invoices.push(invoice);
    await writeInvoices(invoices);

    // Send invoice email to client
    await sendInvoiceEmail(invoice);

    res.json({ success: true, invoice });
  } catch (error) {
    console.error("Error creating invoice:", error);
    res.status(500).json({ success: false, message: "Failed to create invoice" });
  }
};

// Get all invoices
export const getInvoices: RequestHandler = async (req, res) => {
  try {
    const invoices = await readInvoices();
    res.json({ success: true, invoices });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    res.status(500).json({ success: false, message: "Failed to fetch invoices" });
  }
};

// Get single invoice
export const getInvoice: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const invoices = await readInvoices();
    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
      return res.status(404).json({ success: false, message: "Invoice not found" });
    }

    res.json({ success: true, invoice });
  } catch (error) {
    console.error("Error fetching invoice:", error);
    res.status(500).json({ success: false, message: "Failed to fetch invoice" });
  }
};

// Update invoice status (after payment)
export const updateInvoiceStatus: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, paymentId } = req.body;

    const invoices = await readInvoices();
    const invoiceIndex = invoices.findIndex((inv) => inv.id === id);

    if (invoiceIndex === -1) {
      return res.status(404).json({ success: false, message: "Invoice not found" });
    }

    invoices[invoiceIndex].status = status;
    if (paymentId) {
      invoices[invoiceIndex].paymentId = paymentId;
    }
    if (status === "paid") {
      invoices[invoiceIndex].paidAt = new Date().toISOString();
      // Send payment confirmation email
      await sendPaymentConfirmationEmail(invoices[invoiceIndex]);
    }

    await writeInvoices(invoices);

    res.json({ success: true, invoice: invoices[invoiceIndex] });
  } catch (error) {
    console.error("Error updating invoice:", error);
    res.status(500).json({ success: false, message: "Failed to update invoice" });
  }
};

// Send invoice email to client
async function sendInvoiceEmail(invoice: Invoice) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.log("Email not configured, skipping invoice email");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const currencySymbol = invoice.currency === "INR" ? "₹" : "$";
  const paymentLink = `${process.env.WEBSITE_URL || "http://localhost:8080"}/payment?invoice=${invoice.id}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: invoice.clientEmail,
    subject: `Invoice ${invoice.invoiceNumber} from Deven Digital Labs`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Invoice from Deven Digital Labs</h2>
        <p>Dear ${invoice.clientName},</p>
        <p>Please find your invoice details below:</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Invoice Number:</strong> ${invoice.invoiceNumber}</p>
          <p><strong>Amount:</strong> ${currencySymbol}${invoice.amount.toLocaleString()}</p>
          <p><strong>Status:</strong> ${invoice.status.toUpperCase()}</p>
          ${invoice.dueDate ? `<p><strong>Due Date:</strong> ${new Date(invoice.dueDate).toLocaleDateString()}</p>` : ""}
          <p><strong>Description:</strong> ${invoice.description}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3>Invoice Items:</h3>
          ${invoice.items.map(item => `
            <div style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <p><strong>${item.description}</strong></p>
              <p>Quantity: ${item.quantity} × ${currencySymbol}${item.rate} = ${currencySymbol}${item.amount}</p>
            </div>
          `).join("")}
        </div>

        ${invoice.notes ? `<p style="margin: 20px 0;"><strong>Notes:</strong> ${invoice.notes}</p>` : ""}

        <div style="margin: 30px 0;">
          <a href="${paymentLink}" style="display: inline-block; background: linear-gradient(to right, #3b82f6, #06b6d4); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">Pay Now</a>
        </div>

        <p style="color: #6b7280; font-size: 14px;">If you have any questions, please contact us at ${process.env.EMAIL_USER}</p>
        
        <p style="margin-top: 30px;">Best regards,<br>Deven Digital Labs Team</p>
      </div>
    `,
  });
}

// Send payment confirmation email
async function sendPaymentConfirmationEmail(invoice: Invoice) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.log("Email not configured, skipping confirmation email");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const currencySymbol = invoice.currency === "INR" ? "₹" : "$";

  // Email to client
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: invoice.clientEmail,
    subject: `Payment Confirmation - Invoice ${invoice.invoiceNumber}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">✅ Payment Received!</h2>
        <p>Dear ${invoice.clientName},</p>
        <p>Thank you for your payment. We have successfully received your payment for invoice ${invoice.invoiceNumber}.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Invoice Number:</strong> ${invoice.invoiceNumber}</p>
          <p><strong>Amount Paid:</strong> ${currencySymbol}${invoice.amount.toLocaleString()}</p>
          <p><strong>Payment ID:</strong> ${invoice.paymentId}</p>
          <p><strong>Paid On:</strong> ${new Date(invoice.paidAt!).toLocaleString()}</p>
        </div>

        <p>We appreciate your business and look forward to working with you!</p>
        
        <p style="margin-top: 30px;">Best regards,<br>Deven Digital Labs Team</p>
      </div>
    `,
  });

  // Email to you (admin)
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `💰 Payment Received - ${invoice.invoiceNumber}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">Payment Received!</h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Invoice Number:</strong> ${invoice.invoiceNumber}</p>
          <p><strong>Client:</strong> ${invoice.clientName}</p>
          <p><strong>Email:</strong> ${invoice.clientEmail}</p>
          <p><strong>Amount:</strong> ${currencySymbol}${invoice.amount.toLocaleString()}</p>
          <p><strong>Payment ID:</strong> ${invoice.paymentId}</p>
          <p><strong>Paid On:</strong> ${new Date(invoice.paidAt!).toLocaleString()}</p>
        </div>
      </div>
    `,
  });
}
