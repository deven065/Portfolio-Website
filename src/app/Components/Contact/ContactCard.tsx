"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { JSX } from "react";
import { motion } from "framer-motion";

interface ContactItemProps {
  icon: JSX.Element;
  label: string;
  value: string;
  index: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ x: 5, transition: { duration: 0.15 } }}
    className="flex items-start space-x-3 group cursor-default"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-gray-800 dark:border dark:border-gray-700 p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:from-blue-100 group-hover:to-indigo-100 dark:group-hover:bg-gray-700"
    >
      {icon}
    </motion.div>
    <div>
      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{label}</p>
      <p className="text-sm text-gray-900 dark:text-gray-400">{value}</p>
    </div>
  </motion.div>
);

const ContactCard: React.FC = () => {
  const contactItems = [
    { icon: <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />, label: "Email", value: "devenrikame55@gmail.com" },
    { icon: <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />, label: "Phone", value: "+91-9833703389" },
    { icon: <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />, label: "Location", value: "Mumbai, India" },
    { icon: <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />, label: "Response Time", value: "Usually within 24 hours" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
      whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
      className="max-w-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30 p-8 transition-all duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-xl font-extrabold gradient-text mb-8"
      >
        Contact Information
      </motion.h2>
      <div className="space-y-5">
        {contactItems.map((item, index) => (
          <ContactItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            value={item.value}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ContactCard;