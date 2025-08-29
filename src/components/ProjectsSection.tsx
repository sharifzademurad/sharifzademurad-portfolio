"use client";

import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-gradient-to-b from-[#0f0f0f] to-black text-white"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14 tracking-wide">
         My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-red-500/30"
          >
            {/* Title */}
            <h3 className="text-xl font-bold mb-4 group-hover:text-red-500 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-6 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/70 rounded-lg text-xs hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Github className="h-4 w-4" /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-red-600/40 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
