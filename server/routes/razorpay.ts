import { RequestHandler } from "express";
import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export const createOrder: RequestHandler = async (req, res) => {
  try {
    const { amount, currency = "INR", receipt } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid amount" 
      });
    }

    const options = {
      amount: Math.round(amount * 100), // amount in smallest currency unit (paise)
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to create order" 
    });
  }
};

export const verifyPayment: RequestHandler = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing payment details" 
      });
    }

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generated_signature = hmac.digest("hex");

    if (generated_signature === razorpay_signature) {
      // Payment is verified - You can save this to database or send confirmation email
      console.log("Payment verified:", { razorpay_order_id, razorpay_payment_id });
      res.json({ 
        success: true, 
        message: "Payment verified successfully",
        payment_id: razorpay_payment_id 
      });
    } else {
      res.status(400).json({ 
        success: false, 
        message: "Invalid signature" 
      });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to verify payment" 
    });
  }
};
