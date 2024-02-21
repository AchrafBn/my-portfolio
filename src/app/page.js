import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServiceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-rangoonGreen">
      <Navbar />
      <div className="mt-52 mx-auto px-8 md:px-24">
        <HeroSection />
        <ServicesSection />

        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
}
