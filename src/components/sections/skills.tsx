"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Code2, Database, Library } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"programming" | "libraries" | "frameworks" | "databases">("programming");

  const skillCategories = [
    {
      id: "programming",
      title: "Programming",
      icon: Terminal,
      skills: [
        { name: "Java", percentage: 90, level: "Advanced" },
        { name: "Python", percentage: 85, level: "Advanced" },
        { name: "SQL", percentage: 85, level: "Advanced" },
        { name: "C", percentage: 75, level: "Intermediate" },
        { name: "R", percentage: 70, level: "Intermediate" },
        { name: "HTML", percentage: 95, level: "Expert" },
        { name: "CSS", percentage: 90, level: "Expert" },
      ],
      color: "text-blue-500 bg-blue-50",
    },
    {
      id: "frameworks",
      title: "Frameworks",
      icon: Code2,
      skills: [
        { name: "Spring Boot", percentage: 85, level: "Advanced" },
        { name: "React 19", percentage: 85, level: "Advanced" },
        { name: "JPA / Hibernate", percentage: 85, level: "Advanced" },
      ],
      color: "text-indigo-500 bg-indigo-50",
    },
    {
      id: "libraries",
      title: "Libraries & Tools",
      icon: Library,
      skills: [
        { name: "Pandas", percentage: 85, level: "Advanced" },
        { name: "NumPy", percentage: 85, level: "Advanced" },
        { name: "Scikit-Learn", percentage: 80, level: "Advanced" },
        { name: "Matplotlib", percentage: 80, level: "Advanced" },
        { name: "Seaborn", percentage: 80, level: "Advanced" },
        { name: "Tableau", percentage: 75, level: "Intermediate" },
        { name: "Qlik", percentage: 70, level: "Intermediate" },
      ],
      color: "text-cyan-500 bg-cyan-50",
    },
    {
      id: "databases",
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", percentage: 85, level: "Advanced" },
        { name: "H2 Database", percentage: 80, level: "Advanced" },
      ],
      color: "text-sky-500 bg-sky-50",
    },
  ];

  const currentCategory = skillCategories.find((cat) => cat.id === activeCategory)!;
  const CategoryIcon = currentCategory.icon;

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      {/* Background radial light */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-8">
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
            <span>Tech Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 font-medium"
          >
            My specialized technology stack, categorized across languages, microservices, frameworks, libraries, and relational persistence.
          </motion.p>
        </div>

        {/* Tab Selector Header */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 rounded-2xl bg-slate-50 border border-slate-100 max-w-2xl mx-auto">
          {skillCategories.map((cat) => {
            const TabIcon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-primary shadow-md shadow-blue-500/5 border border-slate-200/50"
                    : "text-slate-500 hover:text-primary"
                }`}
              >
                <TabIcon className="w-4.5 h-4.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel - Displays animated progress bar charts */}
        <div className="glass rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          
          <div className="flex items-center gap-3 pb-4 mb-8 border-b border-slate-100">
            <div className={`p-2.5 rounded-xl ${currentCategory.color}`}>
              <CategoryIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{currentCategory.title} Competency</h3>
              <p className="text-xs font-semibold text-slate-400">Drag/Select tabs above to update categories</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {currentCategory.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  
                  {/* Skill labels: Title & Percentage */}
                  <div className="flex justify-between items-center text-xs md:text-sm font-bold">
                    <span className="text-slate-700">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{skill.level}</span>
                      <span className="text-primary font-extrabold">{skill.percentage}%</span>
                    </div>
                  </div>

                  {/* Progressive Bar */}
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/40 relative">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
