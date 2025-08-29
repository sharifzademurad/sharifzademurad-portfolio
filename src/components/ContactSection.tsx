"use client";

import { Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#111] text-white border-t border-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Have an idea or opportunity? Drop me a message below or connect via social links.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mdklabbj"
          method="POST"
          className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800 text-left"
        >
          <div className="mb-4">
            <label className="block mb-2 text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md bg-[#111] border border-gray-700 text-white focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md bg-[#111] border border-gray-700 text-white focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-md bg-[#111] border border-gray-700 text-white focus:outline-none focus:border-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-4">
      
          <a
            href="https://www.linkedin.com/in/murad-sharifzada-069510250/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-[#222]"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a
            href="https://github.com/sharifzademurad"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-[#222]"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
