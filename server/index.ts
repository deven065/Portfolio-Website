import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSendEmail } from "./routes/send-email";
import { createOrder, verifyPayment } from "./routes/razorpay";
import { createInvoice, getInvoices, getInvoice, updateInvoiceStatus } from "./routes/invoices";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  
  // Contact form email endpoint
  app.post("/api/send-email", handleSendEmail);
  
  // Razorpay payment endpoints
  app.post("/api/razorpay/create-order", createOrder);
  app.post("/api/razorpay/verify-payment", verifyPayment);
  
  // Invoice management endpoints
  app.post("/api/invoices", createInvoice);
  app.get("/api/invoices", getInvoices);
  app.get("/api/invoices/:id", getInvoice);
  app.patch("/api/invoices/:id/status", updateInvoiceStatus);

  return app;
}
