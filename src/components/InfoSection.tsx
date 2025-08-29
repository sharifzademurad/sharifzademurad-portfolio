"use client";

import { useEffect, useState } from "react";

export default function InfoSection() {
  const [showInfo, setShowInfo] = useState(false);
  const [typedInfo, setTypedInfo] = useState("");
  const fullInfoText = "FULL STACK DEVELOPER";

  // Intersection observer (animate when in view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShowInfo(true);
        }),
      { threshold: 0.3 }
    );
    const section = document.getElementById("info");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Typing animation
  useEffect(() => {
    if (showInfo) {
      let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex <= fullInfoText.length) {
          setTypedInfo(fullInfoText.slice(0, currentIndex));
          currentIndex++;
        } else clearInterval(timer);
      }, 90);
      return () => clearInterval(timer);
    }
  }, [showInfo]);

  return (
    <section
      id="info"
      className="py-24 px-6 border-t border-gray-800 text-center bg-gradient-to-b from-[#0f0f0f] to-black"
    >
      {/* Title with typing effect */}
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-white tracking-wide">
        {showInfo && (
          <>
            {typedInfo}
            <span className="animate-pulse text-red-500">|</span>
          </>
        )}
      </h2>

      {/* Info content */}
      <div className="text-left text-lg text-gray-300 space-y-6 max-w-3xl mx-auto leading-relaxed">
        <p className="transition-all duration-300 hover:text-red-400 hover:translate-x-2">
          🚀 Turning ideas into full-stack experiences — from sleek frontends to
          powerful backends that scale.
        </p>
        <p className="transition-all duration-300 hover:text-red-400 hover:translate-x-2">
          💻 Skilled in React, TypeScript & modern backends — passionate about
          building smooth and intuitive digital products.
        </p>
        <p className="transition-all duration-300 hover:text-red-400 hover:translate-x-2">
          🌍 Always curious, always learning — I see coding not just as work,
          but as a way to create, inspire, and connect.
        </p>
      </div>
    </section>
  );
}
