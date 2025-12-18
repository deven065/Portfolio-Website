import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus, Trash2, Send } from "lucide-react";
import { InvoiceItem } from "@shared/invoice";

export default function CreateInvoice() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<InvoiceItem[]>([
    { description: "", quantity: 1, rate: 0, amount: 0 },
  ]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, rate: 0, amount: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...items];
    (newItems[index] as any)[field] = value;
    
    // Calculate amount
    if (field === "quantity" || field === "rate") {
      newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    }
    
    setItems(newItems);
  };

  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          clientPhone,
          clientAddress,
          description,
          currency,
          amount: totalAmount,
          items,
          dueDate: dueDate || undefined,
          notes: notes || undefined,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        // Reset form
        setClientName("");
        setClientEmail("");
        setClientPhone("");
        setClientAddress("");
        setDescription("");
        setDueDate("");
        setNotes("");
        setItems([{ description: "", quantity: 1, rate: 0, amount: 0 }]);
        
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Failed to create invoice");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Create Invoice</h1>
          <p className="text-slate-300">Generate and send professional invoices to your clients</p>
        </div>

        {success && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-300 mb-6">
            ✅ Invoice created and sent to client successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Client Information */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Client Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Client Phone</label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Currency <span className="text-red-400">*</span>
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Project Description <span className="text-red-400">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={2}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                placeholder="Brief description of the project/service"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                placeholder="Additional notes or payment terms"
              />
            </div>
          </div>

          {/* Invoice Items */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Invoice Items</h2>
              <Button
                type="button"
                onClick={addItem}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus size={16} className="mr-1" />
                Add Item
              </Button>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-3 items-end">
                  <div className="col-span-12 md:col-span-5">
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateItem(index, "description", e.target.value)}
                      required
                      className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                      placeholder="Service/Product description"
                    />
                  </div>

                  <div className="col-span-4 md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Qty</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(index, "quantity", parseFloat(e.target.value) || 0)}
                      required
                      min="1"
                      className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                    />
                  </div>

                  <div className="col-span-4 md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Rate</label>
                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) => updateItem(index, "rate", parseFloat(e.target.value) || 0)}
                      required
                      min="0"
                      className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white"
                    />
                  </div>

                  <div className="col-span-3 md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Amount</label>
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg px-4 py-3 text-slate-300">
                      {item.amount.toFixed(2)}
                    </div>
                  </div>

                  <div className="col-span-1">
                    {items.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeItem(index)}
                        size="sm"
                        variant="outline"
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total Amount:</span>
                <span className="text-blue-400">
                  {currency === "INR" ? "₹" : "$"}{totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
          >
            <Send size={18} className="mr-2" />
            {loading ? "Creating Invoice..." : "Create & Send Invoice"}
          </Button>
        </form>
      </section>
    </Layout>
  );
}
