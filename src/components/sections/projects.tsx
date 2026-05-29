"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Database, Cpu, Layout, Server, Sparkles, Network } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "full-stack" | "ai-ml">("all");
  const [showEativoArch, setShowEativoArch] = useState(false);

  const projects = [
    {
      id: "eativo",
      title: "Eativo – Personalized Food Discovery & Restaurant Booking Platform",
      category: "full-stack",
      description: "A state-of-the-art SaaS web platform designed to personalize restaurant suggestions and streamline table bookings. Integrates an intelligent client-centric interface with an enterprise microservice backend and custom recommendation matrices.",
      liveUrl: "https://eativo.vercel.app/",
      tech: ["React 19", "Spring Boot", "Recommendation Engine", "REST APIs", "Framer Motion", "JPA/Hibernate", "MySQL"],
      featured: true,
    },
    {
      id: "churn",
      title: "Customer Churn Prediction Engine",
      category: "ai-ml",
      description: "A machine learning pipeline built to forecast user churn probability with high precision. Addresses critical data imbalance problems and integrates model explainability metrics.",
      tech: ["Python", "Random Forest", "SMOTE", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn"],
      metrics: {
        accuracy: "96.8%",
        precision: "95.4%",
        recall: "94.2%",
      },
      featured: false,
    },
    {
      id: "gold",
      title: "Gold Price Prediction Regression Model",
      category: "ai-ml",
      description: "A regression model designed to evaluate historical fluctuations and forecast future gold trading values using economic vectors and commodity data streams.",
      tech: ["Python", "Random Forest Regressor", "Feature Engineering", "NumPy", "Pandas", "Seaborn"],
      metrics: {
        r2Score: "0.982",
        mae: "1.45 USD",
      },
      featured: false,
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      {/* Background soft blurs */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-blue text-xs font-bold text-primary uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 font-medium"
          >
            A curated collection of full-stack software products and machine learning prediction models demonstrating scalable architectures and data-driven insights.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center items-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-50 border border-slate-100">
            {(["all", "full-stack", "ai-ml"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold capitalize transition-all duration-300 ${
                  filter === tab
                    ? "bg-white text-primary shadow-sm border border-slate-200/50"
                    : "text-slate-500 hover:text-primary"
                }`}
              >
                {tab === "all" ? "All Projects" : tab === "full-stack" ? "Full Stack" : "AI & Data Science"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Display Container */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              if (project.featured) {
                // FEATURED BIG CARD (Eativo)
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden relative"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                      {/* Left Block: Description & Badges */}
                      <div className="flex-1 space-y-6">
                        <div className="space-y-3">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/10 text-[10px] md:text-xs font-bold text-primary tracking-wide uppercase">
                            👑 Primary Centerpiece Project
                          </div>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                          {project.description}
                        </p>

                        {/* Tech Stack Bubbles */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200/50 text-slate-600 hover:border-primary/30 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action CTAs */}
                        <div className="flex flex-wrap gap-4 pt-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs md:text-sm font-bold rounded-xl bg-primary hover:bg-primary-light text-white transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5"
                          >
                            <span>Live Application</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => setShowEativoArch(!showEativoArch)}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs md:text-sm font-bold rounded-xl glass text-slate-700 hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                          >
                            <Network className="w-4 h-4 text-primary" />
                            <span>{showEativoArch ? "Hide Architecture" : "View Architecture"}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Architecture Visualization Panel */}
                    <AnimatePresence>
                      {showEativoArch && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          className="mt-10 border-t border-slate-100 pt-8 overflow-hidden"
                        >
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                            <Cpu className="w-4.5 h-4.5 text-primary" />
                            Eativo System Architecture Map
                          </h4>

                          {/* Architecture SVG Flow diagram */}
                          <div className="w-full max-w-4xl mx-auto p-4 md:p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 items-center relative py-6">
                              
                              {/* 1. Client Layer */}
                              <div className="p-4 rounded-xl glass text-center bg-white border-slate-200 relative z-10 flex flex-col items-center">
                                <Layout className="w-6 h-6 text-primary mb-2" />
                                <div className="text-xs font-bold">Client Layer</div>
                                <div className="text-[10px] text-slate-400 mt-1 font-mono">React 19 / Tailwind / Framer Motion</div>
                              </div>

                              {/* 2. REST API Gateway */}
                              <div className="p-4 rounded-xl glass text-center bg-white border-slate-200 relative z-10 flex flex-col items-center">
                                <Server className="w-6 h-6 text-primary mb-2" />
                                <div className="text-xs font-bold">API Backend</div>
                                <div className="text-[10px] text-slate-400 mt-1 font-mono">Spring Boot REST Controllers</div>
                              </div>

                              {/* 3. Business Recommendation */}
                              <div className="p-4 rounded-xl glass text-center bg-white border-slate-200 relative z-10 flex flex-col items-center">
                                <Cpu className="w-6 h-6 text-indigo-500 mb-2" />
                                <div className="text-xs font-bold">Rec Engine</div>
                                <div className="text-[10px] text-slate-400 mt-1 font-mono">Preferences scoring logic</div>
                              </div>

                              {/* 4. Data Layer */}
                              <div className="p-4 rounded-xl glass text-center bg-white border-slate-200 relative z-10 flex flex-col items-center">
                                <Database className="w-6 h-6 text-indigo-500 mb-2" />
                                <div className="text-xs font-bold">Data Store</div>
                                <div className="text-[10px] text-slate-400 mt-1 font-mono">JPA / Hibernate / MySQL</div>
                              </div>

                              {/* Animated SVG connecting pipes */}
                              <div className="absolute inset-0 hidden md:block pointer-events-none -z-0">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
                                  {/* Line 1 -> 2 */}
                                  <path d="M 175,60 H 260" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="5, 5" />
                                  {/* Line 2 -> 3 */}
                                  <path d="M 375,60 H 460" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="5, 5" />
                                  {/* Line 3 -> 4 */}
                                  <path d="M 575,60 H 660" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="5, 5" />
                                  
                                  {/* Flowing animated dots */}
                                  <circle r="4" fill="#2563eb">
                                    <animateMotion dur="5s" repeatCount="indefinite" path="M 175,60 H 260" />
                                  </circle>
                                  <circle r="4" fill="#3b82f6">
                                    <animateMotion dur="4s" repeatCount="indefinite" path="M 375,60 H 460" />
                                  </circle>
                                  <circle r="4" fill="#6366f1">
                                    <animateMotion dur="6s" repeatCount="indefinite" path="M 575,60 H 660" />
                                  </circle>
                                </svg>
                              </div>
                            </div>

                            {/* Descriptive Footnotes */}
                            <div className="mt-4 p-4 rounded-xl bg-white text-[11px] md:text-xs text-slate-500 leading-relaxed font-semibold">
                              🔹 Request Flow: The React 19 client posts a recommendation inquiry. The Spring Boot backend maps this through a custom scoring algorithm, fetching user restaurant indexes via JPA Hibernate database persistence layers in real-time.
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              } else {
                // SECONDARY MACHINE LEARNING CARDS
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="glass rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">
                            📊 AI / Machine Learning Project
                          </span>
                          <h3 className="text-xl font-bold text-foreground tracking-tight">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-50 border border-slate-200/50 text-slate-500"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Performance metrics display board */}
                      {project.metrics && (
                        <div className="p-4 rounded-xl bg-accent-blue border border-primary/10 min-w-[160px] flex flex-col gap-2.5 shadow-sm">
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                            VERIFIED METRICS:
                          </span>
                          {Object.entries(project.metrics).map(([key, val]) => (
                            <div key={key} className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-slate-500 uppercase text-[9px]">{key}:</span>
                              <span className="text-primary font-extrabold">{val}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              }
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
