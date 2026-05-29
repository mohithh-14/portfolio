"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import ParticleBackground from "@/components/ui/particle-bg";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden font-sans">
          
          {/* 1. Interactive Canvas Particles */}
          <ParticleBackground />

          {/* Noise/Grain overlay for added visual premium texture */}
          <div className="fixed inset-0 pointer-events-none -z-20 bg-[url('/noise.png')] opacity-[0.015] dark:opacity-[0.007]" />

          {/* 2. Navigation Header */}
          <Header />

          {/* Main Layout Sections */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-8">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>

          {/* 3. Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
