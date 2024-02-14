import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-rangoonGreen">
      <Navbar />
      <div className=" mt-24 mx-auto px-24 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
