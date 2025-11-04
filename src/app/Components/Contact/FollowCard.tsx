"use client";

import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/dev55",
    icon: FaLinkedin,
    title: "View my LinkedIn profile",
    hoverColor: "hover:bg-[#0077b5] dark:hover:bg-[#0077b5] hover:text-white dark:hover:text-white",
    lightBg: "bg-gray-100",
    darkBg: "dark:bg-gray-800 dark:text-gray-300",
  },
  {
    href: "https://github.com/deven065",
    icon: FaGithub,
    title: "View my GitHub profile",
    hoverColor: "hover:bg-[#181717] dark:hover:bg-[#24292e] hover:text-white dark:hover:text-white",
    lightBg: "bg-gray-100",
    darkBg: "dark:bg-gray-800 dark:text-gray-300",
  },
  {
    href: "https://x.com/rikame_deven",
    icon: FaX,
    title: "View my X profile",
    hoverColor: "hover:bg-[#000000] dark:hover:bg-[#1DA1F2] hover:text-white dark:hover:text-white",
    lightBg: "bg-gray-100",
    darkBg: "dark:bg-gray-800 dark:text-gray-300",
  },
  {
    href: "mailto:devenrikame55@gmail.com",
    icon: FaGoogle,
    title: "Send me an email",
    hoverColor: "hover:bg-[#EA4335] dark:hover:bg-[#EA4335] hover:text-white dark:hover:text-white",
    lightBg: "bg-gray-100",
    darkBg: "dark:bg-gray-800 dark:text-gray-300",
  },
];

const FollowCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-md bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-700/50 rounded-2xl shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-blue-500/20 dark:hover:border-blue-500/50 p-6 transition-all duration-300 border border-gray-100 hover:border-indigo-300"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-8"
      >
        Follow Me
      </motion.h2>

      {/* Icons Row */}
      <div className="flex space-x-6 mb-8">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              title={link.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                y: -5,
                transition: { duration: 0.2, type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.95 }}
              className={`${link.lightBg} ${link.darkBg} p-3 rounded-full cursor-pointer ${link.hoverColor} transition-all duration-300 group relative shadow-sm hover:shadow-lg`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            </motion.a>
          );
        })}
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-sm text-gray-900 dark:text-gray-300 leading-relaxed"
      >
        Connect with me on social media for updates on my latest projects and
        insights into web development.
      </motion.p>
    </motion.div>
  );
};

export default FollowCard;