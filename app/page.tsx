import Spotlight from "@/components/Spotlight";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStackSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <>
      <Spotlight />

      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/15 dark:bg-brand-purple/20 rounded-full blur-[160px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 dark:bg-brand-cyan/15 rounded-full blur-[160px] animate-pulse-slow" />
      </div>

      {/* NAVIGATION BAR */}
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 md:space-y-32 pt-28 pb-12 md:pb-16">
        {/* HERO SECTION */}
        <HeroSection />

        {/* TECH STACK SECTION */}
        <TechStackSection />

        {/* AI WORKFLOW */}
        <WorkflowSection />

        {/* FEATURED PROJECTS */}
        <ProjectsSection />

        {/* EXPERIENCE & COMMITMENTS */}
        <ExperienceSection />
      </main>

      {/* FOOTER / CONTACT SECTION */}
      <Footer />
    </>
  );
}
