"use client";
import React, { useState } from "react";

const ContactFormCard = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) return setStatus("Please agree to the terms.");

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send message.");

      setStatus("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        agree: false,
      });
    } catch (err: any) {
      setStatus(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Subject *</label>
            <select
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700"
            >
              <option value="">Select a subject</option>
              <option>Project Inquiry</option>
              <option>Job Opportunity</option>
              <option>Collaboration</option>
              <option>Freelance Opportunity</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message *</label>
            <textarea
              name="message"
              required
              placeholder="Tell me about your project or inquiry..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 mr-2"
              required
            />
            <p className="text-sm text-gray-600">
              I agree to the <a href="#" className="underline text-blue-500">Terms of Service</a> and <a href="#" className="underline text-blue-500">Privacy Policy</a>.
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p className={`text-sm ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactFormCard;