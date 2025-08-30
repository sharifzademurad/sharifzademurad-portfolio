"use client";

import {
  Server,
  Wrench,
  Layout,
} from "lucide-react";

export default function SkillsSection() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Shadcn/UI",
    "AntDesign",
    "MUI",
    "Figma",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "Supabase",
    "API Development",
    "Database Design",
  ];
  const toolsSkills = [
    "Vercel",
    "Git",
    "GitHub",
    "VScode",
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0f0f0f] to-black text-white">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14 tracking-wide">
         Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Frontend */}
        <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-8 shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center gap-3 mb-5">
            <Layout className="text-red-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-red-500">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-gray-800/70 rounded-lg text-sm hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-8 shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center gap-3 mb-5">
            <Server className="text-red-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-red-500">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-gray-800/70 rounded-lg text-sm hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-8 shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-center gap-3 mb-5">
            <Wrench className="text-red-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-red-500">Tools & Platforms</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {toolsSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-gray-800/70 rounded-lg text-sm hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
