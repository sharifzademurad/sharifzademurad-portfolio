import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  const [showHeroText, setShowHeroText] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showProfileCard, setShowProfileCard] = useState(false);
  const fullText = "WHO AM I?";

  useEffect(() => {
    const timer = setTimeout(() => setShowHeroText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showHeroText) {
      let currentIndex = 0;
      const typingTimer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else clearInterval(typingTimer);
      }, 100);
      return () => clearInterval(typingTimer);
    }
  }, [showHeroText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">
      <div className="text-center">
        {showHeroText && (
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold animate-slide-in-left">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <button
              onClick={() => setShowProfileCard(true)}
              className="p-2 text-red-600 hover:text-red-400 animate-slide-in-right"
            >
              <ChevronRight className="h-8 w-8 md:h-12 md:w-12" />
            </button>
          </div>
        )}
      </div>
      {showProfileCard && <ProfileCard />}
    </section>
  );
}
