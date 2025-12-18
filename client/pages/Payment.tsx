import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { CreditCard, Shield, CheckCircle2, FileText } from "lucide-react";
import { useSearchParams } from "react-router-dom";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Payment() {
  const [searchParams] = useSearchParams();
  const invoiceId = searchParams.get("invoice");
  
  const [invoice, setInvoice] = useState<any>(null);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingInvoice, setLoadingInvoice] = useState(!!invoiceId);

  useEffect(() => {
    if (invoiceId) {
      fetchInvoice();
    }
  }, [invoiceId]);

  const fetchInvoice = async () => {
    try {
      const response = await fetch(`/api/invoices/${invoiceId}`);
      const data = await response.json();
      
      if (data.success) {
        setInvoice(data.invoice);
        setAmount(data.invoice.amount.toString());
        setName(data.invoice.clientName);
        setEmail(data.invoice.clientEmail);
        setPhone(data.invoice.clientPhone || "");
      } else {
        alert("Invoice not found");
      }
    } catch (error) {
      console.error("Error fetching invoice:", error);
      alert("Failed to load invoice");
    } finally {
      setLoadingInvoice(false);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (!name || !email) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      setLoading(false);
      return;
    }

    try {
      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseFloat(amount) }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        alert("Failed to create order. Please try again.");
        setLoading(false);
        return;
      }

      const { order } = orderData;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Deven Digital Labs",
        description: invoice ? `Invoice ${invoice.invoiceNumber}` : "Service Payment",
        image: "/logo-white.png",
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const verifyResponse = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            const data = await verifyResponse.json();
            if (data.success) {
              // If this is an invoice payment, update invoice status
              if (invoice) {
                try {
                  await fetch(`/api/invoices/${invoice.id}/status`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      status: "paid",
                      paymentId: response.razorpay_payment_id,
                    }),
                  });
                  alert(`✅ Payment successful! Invoice ${invoice.invoiceNumber} has been paid. Thank you!`);
                } catch (error) {
                  console.error("Error updating invoice:", error);
                  alert("✅ Payment successful! However, there was an issue updating the invoice. Please contact support.");
                }
              } else {
                alert("✅ Payment successful! Thank you for your payment.");
              }
              
              setAmount("");
              setName("");
              setEmail("");
              setPhone("");
              setInvoice(null);
              
              // Clear invoice query param if present
              if (invoiceId) {
                window.history.replaceState({}, '', '/payment');
              }
            } else {
              alert("❌ Payment verification failed! Please contact support.");
            }
          } catch (error) {
            console.error("Verification error:", error);
            alert("Error verifying payment. Please contact support.");
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        notes: {
          customer_name: name,
          customer_email: email,
        },
        theme: {
          color: "#3b82f6",
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Secure Payment Gateway</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Make a Payment
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Secure and seamless payment processing powered by Razorpay
          </p>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 max-w-2xl mx-auto pb-20">
        {/* Invoice Details (if invoice exists) */}
        {invoice && (
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-blue-300 mb-1">Invoice Payment</h2>
                <p className="text-sm text-slate-400">You are paying for invoice {invoice.invoiceNumber}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Invoice Number:</span>
                <p className="text-white font-medium">{invoice.invoiceNumber}</p>
              </div>
              <div>
                <span className="text-slate-400">Date:</span>
                <p className="text-white font-medium">{new Date(invoice.date).toLocaleDateString()}</p>
              </div>
              <div>
                <span className="text-slate-400">Due Date:</span>
                <p className="text-white font-medium">{new Date(invoice.dueDate).toLocaleDateString()}</p>
              </div>
              <div>
                <span className="text-slate-400">Amount:</span>
                <p className="text-white font-medium text-lg">
                  {invoice.currency === 'INR' ? '₹' : '$'}{invoice.totalAmount.toLocaleString()}
                </p>
              </div>
            </div>
            
            {invoice.items.length > 0 && (
              <div className="mt-4 pt-4 border-t border-blue-500/20">
                <p className="text-xs text-slate-400 mb-2">Items:</p>
                {invoice.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm py-1">
                    <span className="text-slate-300">{item.description} x {item.quantity}</span>
                    <span className="text-white">{invoice.currency === 'INR' ? '₹' : '$'}{item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 space-y-6">
          {/* Customer Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>

          <div className="border-t border-slate-800 my-6"></div>

          {/* Payment Amount */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Amount ({invoice ? (invoice.currency === 'INR' ? '₹' : '$') : '₹'}) <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                {invoice ? (invoice.currency === 'INR' ? '₹' : '$') : '₹'}
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                min="1"
                step="0.01"
                readOnly={!!invoice}
                className={`w-full bg-slate-800/50 border border-slate-700/50 rounded-lg pl-8 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 ${invoice ? 'cursor-not-allowed opacity-75' : ''}`}
              />
              {invoice && (
                <p className="text-xs text-slate-400 mt-2">Amount is locked for invoice payments</p>
              )}
            </div>
          </div>

          <Button
            onClick={handlePayment}
            disabled={loading}
            size="lg"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            {loading ? "Processing..." : "Proceed to Payment"}
          </Button>

          {/* Security Features */}
          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Secured by Razorpay with 256-bit SSL encryption</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Supports UPI, Cards, Net Banking, and Wallets</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Instant payment confirmation via email</span>
            </div>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-8 text-center text-sm text-slate-400">
          <p>
            Need help? Contact us at{" "}
            <a href="mailto:devenrikame55@gmail.com" className="text-blue-400 hover:text-blue-300">
              hello@devendigitallabs.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
