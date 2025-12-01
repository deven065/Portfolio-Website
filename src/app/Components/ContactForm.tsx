"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const fieldsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!formRef.current || !fieldsRef.current) return;

    // Animate form fields with stagger
    gsap.fromTo(
      fieldsRef.current.children,
      {
        opacity: 0,
        x: -50,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: formRef });

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
        method : "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch((err) => {
        console.error("Network error:", err);
        throw new Error("Network request failed");
      });

      if (res && res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "", acceptTerms: false });
        
        // Success animation
        if (formRef.current) {
          gsap.to(formRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "back.out(1.7)",
            yoyo: true,
            repeat: 1,
          });
        }
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-black py-24 px-6 transition-colors duration-300">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-mono tracking-wider mb-4"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-800 dark:text-gray-300 font-medium"
        >
          Reach out to discuss opportunities or collaborations.
        </motion.p>
      </motion.div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-2xl transition-all duration-300"
      >
        <div ref={fieldsRef} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white transition-all glass shimmer"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white transition-all"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-800 dark:text-gray-200 font-medium mb-1"
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
            className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white transition-all resize-none"
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
            className="w-4 h-4 accent-blue-600 dark:accent-blue-400"
            required
          />
          <label htmlFor="acceptTerms" className="text-gray-700 dark:text-gray-300">
            I accept the Terms
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:shadow-blue-500/30 dark:hover:shadow-cyan-400/40 overflow-hidden"
            style={{
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.3)',
            }}
          >
            <span className="relative z-10">Submit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
          </button>
        </div>
        </div>
      </form>

      {/* Status Message */}
      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-6 text-gray-700 dark:text-gray-300 font-medium"
        >
          {status}
        </motion.p>
      )}
    </section>
  );
};

export default ContactForm;
