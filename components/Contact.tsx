import { Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <main className="bg-gray-50 py-16 px-5">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-2 mb-16">
        <p className="uppercase text-gray-500 tracking-widest text-sm font-medium">
          Get in touch
        </p>
        <h1 className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] text-center tracking-tight my-3 text-slate-900">
          Let's create <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Something Amazing
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-center leading-relaxed text-slate-700 max-w-2xl">
          Have a project in mind? Let's discuss how we can work together to
          bring your ideas to life.
        </p>
      </div>

      {/* Contact Section */}
      <section className="max-w-[1400px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Contact Information */}
        <div className="space-y-6">
          {personalInfo.map(({ icon: Icon, title, text }) => (
            <article
              key={text}
              className="bg-white p-6 border border-gray-200 flex items-start gap-4"
            >
              <div className="bg-white border border-gray-300 p-3 shrink-0">
                {Icon && <Icon className="w-6 h-6 text-gray-700" />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                  {title}
                </p>
                <p className="text-lg font-medium text-gray-900">{text}</p>
              </div>
            </article>
          ))}

          {/* Availability Card */}
          <div className="bg-blue-900 p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Available for Freelance</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              I'm currently available for freelance work and new opportunities.
              If you have a project in mind, let's talk!
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Available Now</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-lg p-8 border border-gray-200 col-span-2">
          <form className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  EMAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                SUBJECT <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Project inquiry"
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                MESSAGE <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white flex items-center py-4 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="text-white w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
