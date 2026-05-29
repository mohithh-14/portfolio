"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal, BarChart2, Server } from "lucide-react";

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const titles = ["Full Stack Developer", "AI & ML Enthusiast", "Data Science Specialist"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Stats for the animated counters
  const stats = [
    { value: 3, label: "Core Domains", suffix: "", icon: Terminal },
    { value: 6, label: "Professional Credentials", suffix: "+", icon: Server },
    { value: 95, label: "Lighthouse Performance Target", suffix: "+", icon: BarChart2 },
  ];

  // Typing effect logic
  useEffect(() => {
    const currentWord = titles[titleIdx];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIdx === currentWord.length) {
      typingSpeed = 1600;
      setIsDeleting(true);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      setTypedTitle(
        isDeleting
          ? currentWord.substring(0, charIdx - 1)
          : currentWord.substring(0, charIdx + 1)
      );
      setCharIdx((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, titleIdx]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-transparent">
      {/* 1. Geometric Grid Network Background */}
      <div className="absolute inset-0 grid-bg -z-20 pointer-events-none" />

      {/* 2. Soft Dynamic Accent Blurs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-primary-light/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text Introduction Column */}
        <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass bg-accent-blue text-xs md:text-sm font-bold text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>Available for Internships & Full-Time Roles</span>
          </motion.div>

          {/* Core Branding Headers */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900"
            >
              Hi, I'm <span className="text-gradient">Chamakuri Mohith</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold text-slate-700 h-10 md:h-12 flex items-center justify-center lg:justify-start"
            >
              <span>{typedTitle}</span>
              <span className="w-1.5 h-6 md:h-8 ml-1 bg-primary animate-pulse" />
            </motion.h2>
          </div>

          {/* Narrative tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            Building intelligent digital experiences through software engineering, machine learning, and data-driven solutions. Specialize in full-stack applications and predictive data analytics.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-2xl bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-2xl glass text-slate-700 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>Contact Me</span>
            </a>

            <a
              href="/resume.pdf"
              download="Chamakuri_Mohith_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-2xl border border-dashed border-slate-200 text-slate-500 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-primary animate-bounce" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Dashboard Graphic Mockup Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md lg:max-w-none relative aspect-square flex items-center justify-center"
        >
          {/* Professional Photo Frame */}
          <div className="w-[80%] aspect-[3/4] rounded-3xl glass p-3 relative overflow-hidden shadow-2xl animate-float flex flex-col justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Chamakuri Mohith"
                className="w-full h-full object-cover grayscale-[12%] hover:grayscale-0 hover:scale-[1.01] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-65" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <div className="text-sm font-bold tracking-wide">Chamakuri Mohith</div>
                <div className="text-[10px] text-blue-300 font-bold mt-0.5 uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse" />
                  <span>Full-Stack & AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Glow lights behind */}
          <div className="absolute -top-4 -right-4 w-28 h-28 rounded-2xl bg-blue-500/5 blur-xl -z-10 animate-pulse" />
          <div className="absolute -bottom-6 -left-4 w-36 h-36 rounded-full bg-primary/5 blur-2xl -z-10" />
        </motion.div>
      </div>

      {/* Numerical Stats Dashboard */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8 rounded-3xl glass bg-white/40"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4.5 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-accent-blue text-primary shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-800 flex items-baseline">
                    <span>{stat.value}</span>
                    <span className="text-primary font-bold ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Float mock animate script */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
