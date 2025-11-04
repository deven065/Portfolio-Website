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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="max-w-md bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-700/50 rounded-2xl shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-blue-500/20 dark:hover:border-blue-500/50 p-6 transition-all duration-300 border border-gray-100 hover:border-indigo-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-8"
      >
        Quick FAQ
      </motion.h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
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
