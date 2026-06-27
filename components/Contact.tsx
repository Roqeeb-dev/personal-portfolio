"use client";

import { motion } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Calendar,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@Roqeeb-dev",
    href: "https://github.com/Roqeeb-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/roqeeb-shafiriyu",
    href: "https://www.linkedin.com/in/roqeeb-shafiriyu-51288b29a/",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "shafiriyuroqeeb@gmail.com",
    href: "mailto:shafiriyuroqeeb@gmail.com",
  },
];

const expectations = [
  "Reply within 24 hours",
  "Free initial conversation",
  "No commitment required",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setSubmitStatus({
        type: "success",
        message: "Message sent! I'll get back to you within 24 hours.",
      });
      setFormData({
        from_name: "",
        from_email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send. Please email me directly at shafiriyuroqeeb@gmail.com",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contact" className="bg-gray-50 py-16 px-4 sm:px-6">
      {/* ── Section header ── */}
      <div className="flex flex-col items-center justify-center gap-2 mb-14 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="uppercase text-gray-400 tracking-widest text-xs font-semibold"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[clamp(2.25rem,7vw,4rem)] leading-[1.05] tracking-tight text-slate-900"
        >
          Get in{" "}
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed"
        >
          Open to remote frontend roles, freelance projects, and interesting
          conversations. Reach out and I'll reply within a day.
        </motion.p>
      </div>

      {/* ── Main grid ── */}
      <section className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-4">
          {/* Schedule card */}
          <motion.a
            href="mailto:shafiriyuroqeeb@gmail.com?subject=Let's%20talk"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ x: 3 }}
            className="group bg-white border border-gray-200 p-5 flex items-start gap-4 hover:border-gray-900 transition-all duration-200"
          >
            <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-900 text-sm">
                  Start a conversation
                </p>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Send me an email to set up a call
              </p>
              <p className="text-xs text-blue-600 mt-1 font-medium">
                Free initial discussion
              </p>
            </div>
          </motion.a>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="bg-blue-900 p-6 text-white"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                Available Now
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              Open to remote roles & freelance
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Graduating August 2026. Actively looking for frontend engineering
              roles at funded Nigerian or African startups.
            </p>
            <div className="flex items-center gap-1.5 mt-4 text-blue-300 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>Lagos, Nigeria · GMT+1</span>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Connect on social
            </p>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors flex-shrink-0">
                    <Icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-900">
                      {label}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{handle}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-600 transition-colors ml-auto flex-shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* What to expect */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              What to expect
            </p>
            <ul className="space-y-2.5">
              {expectations.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-gray-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Right column — form ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 p-6 sm:p-8 lg:col-span-2"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            Send a message
          </h3>
          <p className="text-sm text-gray-400 mb-7">
            Fill out the form and I'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Status */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 border text-sm ${
                  submitStatus.type === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-gray-900 transition-colors disabled:opacity-50 bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-gray-900 transition-colors disabled:opacity-50 bg-gray-50 focus:bg-white"
                />
              </div>
            </div>

            {/* Company + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Company / Organisation
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-gray-900 transition-colors disabled:opacity-50 bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-gray-900 transition-colors disabled:opacity-50 bg-gray-50 focus:bg-white text-gray-700"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="Job opportunity">Job opportunity</option>
                  <option value="Freelance project">Freelance project</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General enquiry">General enquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, role, or what's on your mind..."
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-gray-900 transition-colors resize-none disabled:opacity-50 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-colors ${
                isSubmitting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-900 text-white hover:bg-black"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
