"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <main id="contact" className="bg-gray-50 py-14 sm:py-16 px-4 sm:px-5">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-2 mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="uppercase text-gray-500 tracking-widest text-sm font-medium"
        >
          Get in touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[clamp(2.25rem,7vw,4rem)] leading-[1.05] text-center tracking-tight my-3 text-slate-900"
        >
          Let's create <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Something Amazing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-center leading-relaxed text-slate-700 max-w-xl sm:max-w-2xl"
        >
          Have a project in mind? Let's discuss how we can work together to
          bring your ideas to life.
        </motion.p>
      </div>

      {/* Contact Section */}
      <section className="max-w-[1400px] mx-auto px-0 sm:px-5 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Side - Contact Information */}
        <div className="space-y-4 sm:space-y-6">
          {personalInfo.map(({ icon: Icon, title, text }, idx) => (
            <motion.article
              key={text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
              className="bg-white p-4 sm:p-6 border border-gray-200 flex items-start gap-3 sm:gap-4"
            >
              <div className="bg-white border border-gray-300 p-2.5 sm:p-3 shrink-0">
                {Icon && (
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                )}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                  {title}
                </p>
                <p className="text-base sm:text-lg font-medium text-gray-900 break-words">
                  {text}
                </p>
              </div>
            </motion.article>
          ))}

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="bg-blue-900 p-6 sm:p-8 text-white"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Available for Freelance
            </h3>
            <p className="text-blue-100 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
              I'm currently available for freelance work and new opportunities.
              If you have a project in mind, let's talk!
            </p>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Available Now</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-5 sm:p-8 border border-gray-200 lg:col-span-2"
        >
          <form className="space-y-5 sm:space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  EMAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  required
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                SUBJECT <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Project inquiry"
                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                MESSAGE <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gray-900 text-white py-3.5 sm:py-4 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group text-sm sm:text-base"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
