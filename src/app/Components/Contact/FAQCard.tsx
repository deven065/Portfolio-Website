"use client";

import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's your typical response time?",
    answer: "I usually respond within 24 hours during business days.",
  },
  {
    question: "Do you work on small projects?",
    answer: "Yes! I'm happy to work on projects of all sizes.",
  },
  {
    question: "What's your availability?",
    answer: "I'm currently accepting new projects and collaborations.",
  },
];

const FAQCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
      className="max-w-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30 p-8 transition-all duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        viewport={{ once: true }}
        className="text-xl font-extrabold gradient-text mb-8"
      >
        Quick FAQ
      </motion.h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ x: 5, transition: { duration: 0.15 } }}
            className="p-4 rounded-xl hover:bg-indigo-50/50 dark:hover:bg-gray-800/50 transition-colors duration-300 cursor-default border border-transparent hover:border-indigo-100 dark:hover:border-gray-700"
          >
            <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-2">{faq.question}</p>
            <p className="text-gray-900 dark:text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQCard;
