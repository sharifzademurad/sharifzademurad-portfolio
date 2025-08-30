"use client";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import muradsharifzada from "../assets/sharimurad.jpg";

export default function ProfileCard() {
  const scrollToPortfolio = () => {
    const section = document.getElementById("portfolio");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
      <div className="group w-full max-w-md mx-4 bg-gradient-to-b from-[#1a1a1a] to-black text-white border border-gray-800 rounded-2xl shadow-2xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-red-500/40">
        
        {/* Profile image */}
        <div className="relative w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden border-4 border-red-600 shadow-lg group-hover:shadow-red-500/60 transition-all duration-500">
          <img
            src={muradsharifzada}
            alt="Profile"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Name & Role */}
        <h2 className="text-2xl font-bold mb-1 tracking-wide">
          Murad Sharifzada
        </h2>
        <p className="text-red-500 text-4xl font-extrabold mb-6">
          Full Stack Developer
        </p>

        {/* Short bio */}
        <p className="text-sm text-gray-400 mb-6">
          Crafting scalable full-stack applications with React, TypeScript & modern backends. Turning ideas into reliable products.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-5 mb-6">
          <a
            href="https://github.com/sharifzademurad"
            target="_blank"
            className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-all duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/murad-sharifzada-069510250/"
            target="_blank"
            className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-all duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Download CV button */}
        <div className="mb-6">
          <a
            href="/muradsharifzade.pdf"
            download
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Scroll button */}
        <button
          onClick={scrollToPortfolio}
          className="p-3 rounded-full border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 "
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
