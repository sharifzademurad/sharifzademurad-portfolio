import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <InfoSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
