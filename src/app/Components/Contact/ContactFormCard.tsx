"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
    const target = e.target;
    const { name, value, type } = target;

    const newValue =
        type === "checkbox"
        ? (target as HTMLInputElement).checked
        : value;

    setForm((prev) => ({
        ...prev,
        [name]: newValue,
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
    } catch (err: unknown) {
      if (err instanceof Error) {
        setStatus(err.message);
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-700/50 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-blue-500/20 dark:hover:border-blue-500/50 transition-all duration-300 border border-gray-100 hover:border-indigo-300 p-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8"
      >
        Send Me a Message
      </motion.h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2 text-sm">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-400 focus:border-indigo-300 dark:focus:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>
          <div>
            <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2 text-sm">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-400 focus:border-indigo-300 dark:focus:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>
          <div>
            <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2 text-sm">Subject *</label>
            <select
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-400 focus:border-indigo-300 dark:focus:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
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
            <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2 text-sm">Message *</label>
            <textarea
              name="message"
              required
              placeholder="Tell me about your project or inquiry..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-400 focus:border-indigo-300 dark:focus:border-blue-400 transition-all duration-300 resize-none shadow-sm hover:shadow-md"
            />
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 mr-3 accent-indigo-600 dark:accent-blue-400 cursor-pointer"
              required
            />
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              I agree to the <a href="#" className="underline text-indigo-600 dark:text-blue-400 hover:text-indigo-700 dark:hover:text-blue-300 transition-colors font-semibold">Terms of Service</a> and <a href="#" className="underline text-indigo-600 dark:text-blue-400 hover:text-indigo-700 dark:hover:text-blue-300 transition-colors font-semibold">Privacy Policy</a>.
            </p>
          </div>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:bg-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 dark:hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm font-medium ${status.includes("success") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
            >
              {status}
            </motion.p>
          )}
        </form>
    </motion.div>
  );
};

export default ContactFormCard;