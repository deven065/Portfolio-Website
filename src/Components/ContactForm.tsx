"use client";

import { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Safely handle checkbox
    const checked =
      type === "checkbox" && "checked" in e.target
        ? (e.target as HTMLInputElement).checked
        : false;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "", acceptTerms: false });
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-2">Get in Touch</h2>
        <p className="text-gray-700">
          Reach out to discuss opportunities or collaborations.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-100 p-0 space-y-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-800 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-800 font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="w-4 h-4"
            required
          />
          <label htmlFor="acceptTerms" className="text-gray-700">
            I accept the Terms
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Status Message */}
      {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
    </section>
  );
};

export default ContactForm;
