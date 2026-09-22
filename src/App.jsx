import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Projects from "./components/Projects.jsx";
import Statement from "./components/Statement.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-ink text-paper antialiased">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Process />
          <Projects />
          <Statement />
          <CTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}