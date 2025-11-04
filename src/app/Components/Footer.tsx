"use client";

import { FaCode, FaEnvelope, FaGithub, FaGoogle, FaHeart, FaLinkedin, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-white dark:bg-black text-gray-800 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-blue-600">Dev.Folio</h2>
          <p className="mt-4 text-sm text-gray-900 dark:text-gray-300">
            Crafting digital experiences with passion. Full-stack developer dedicated to creating innovative and user-friendly web applications.
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-900 dark:text-gray-300">
            <FaCode className="text-gray-900 dark:text-gray-400" />
            <span>Made with</span>
            <FaHeart className="text-red-500" />
            <span>by Deven</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-200">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Home</li>
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Projects</li>
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Skills</li>
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-200">Services</h3>
          <ul className="space-y-2 text-sm list-disc list-inside">
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Web Development</li>
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Mobile Apps</li>
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">UI/UX Design</li>
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Backend Development</li>
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Database Design</li>
            <li className="text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 cursor-pointer transition-colors">API Integration</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-200">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">
              <FaEnvelope className="text-indigo-600 dark:text-blue-600" /> devenrikame55@gmail.com
            </li>
            <li className="flex items-center gap-2 text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">
              <FaPhone className="text-indigo-600 dark:text-blue-600" /> +91 (983) 370-3389
            </li>
            <li className="flex items-center gap-2 text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">
              <FaMapMarkedAlt className="text-indigo-600 dark:text-blue-600" /> Mumbai, India
            </li>
          </ul>

          {/* Follow Me */}
          <div className="mt-4">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-200">Follow Me</p>
            <div className="flex gap-3 relative z-20">
              <motion.a
                href="https://www.linkedin.com/in/dev55"
                target="_blank"
                rel="noopener noreferrer"
                title="View my LinkedIn profile (Login may be required)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-2 rounded-full hover:bg-[#0077b5] dark:hover:bg-[#0077b5] hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <FaLinkedin />
                </motion.div>
              </motion.a>
              <motion.a
                href="https://github.com/deven065"
                target="_blank"
                rel="noopener noreferrer"
                title="View my GitHub profile (Login may be required)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-2 rounded-full hover:bg-[#181717] dark:hover:bg-[#24292e] hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <FaGithub />
                </motion.div>
              </motion.a>
              <motion.a
                href="https://x.com/rikame_deven"
                target="_blank"
                rel="noopener noreferrer"
                title="View my X profile (Login may be required)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-2 rounded-full hover:bg-[#000000] dark:hover:bg-[#1DA1F2] hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <FaX />
                </motion.div>
              </motion.a>
              <motion.a
                href="mailto:devenrikame55@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-2 rounded-full hover:bg-[#EA4335] dark:hover:bg-[#EA4335] hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <FaGoogle />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-sm text-center text-gray-600 dark:text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4">
          <p className="text-gray-700 dark:text-gray-300">© 2025 Dev.Folio. All rights reserved.</p>
          <p className="text-gray-600 dark:text-gray-400">Built with Next.js & Tailwind CSS</p>
          <div className="flex gap-4 justify-center mt-2 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
