"use client";

import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/dev55",
    icon: FaLinkedin,
    title: "View my LinkedIn profile",
    hoverBg: "#0077b5",
    normalBg: "#0077b5",
    normalColor: "text-white",
    hoverColor: "text-white",
    lightBg: "bg-[#0077b5]",
    darkBg: "dark:bg-gray-800",
    darkIconColor: "dark:text-gray-300",
  },
  {
    href: "https://github.com/deven065",
    icon: FaGithub,
    title: "View my GitHub profile",
    hoverBg: "#181717",
    normalBg: "#181717",
    normalColor: "text-white",
    hoverColor: "text-white",
    lightBg: "bg-[#181717]",
    darkBg: "dark:bg-gray-800",
    darkIconColor: "dark:text-gray-300",
  },
  {
    href: "https://x.com/rikame_deven",
    icon: FaX,
    title: "View my X profile",
    hoverBg: "#000000",
    normalBg: "#000000",
    normalColor: "text-white",
    hoverColor: "text-white",
    lightBg: "bg-black",
    darkBg: "dark:bg-gray-800",
    darkIconColor: "dark:text-gray-300",
  },
  {
    href: "mailto:devenrikame55@gmail.com",
    icon: FaGoogle,
    title: "Send me an email",
    hoverBg: "#EA4335",
    normalBg: "#EA4335",
    normalColor: "text-white",
    hoverColor: "text-white",
    lightBg: "bg-[#EA4335]",
    darkBg: "dark:bg-gray-800",
    darkIconColor: "dark:text-gray-300",
  },
];

const FollowCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="max-w-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30 p-8 transition-all duration-300"
      whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        viewport={{ once: true }}
        className="text-xl font-extrabold gradient-text mb-8"
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
                duration: 0.2,
                delay: index * 0.05,
                type: "spring",
                stiffness: 300,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                y: -3,
                transition: { duration: 0.15, type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full cursor-pointer transition-all duration-300 group relative shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-gray-300"
              style={{
                backgroundColor: link.normalBg,
                color: 'white'
              }}
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
        transition={{ duration: 0.3, delay: 0.15 }}
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