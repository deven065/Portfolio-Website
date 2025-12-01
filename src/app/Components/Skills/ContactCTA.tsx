'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto"
            >
              Let&apos;s collaborate and turn your vision into reality. I&apos;m available for freelance projects, 
              full-time opportunities, and consulting work.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 ease-out"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 px-8 rounded-xl border-2 border-blue-500 transition-all duration-400 ease-out"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-2 text-blue-100 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Usually responds within 24 hours</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
