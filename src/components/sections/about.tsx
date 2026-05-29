"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, BrainCircuit, Sparkles, BookOpen } from "lucide-react";

export default function About() {
  const coreFields = [
    { name: "Machine Learning", color: "text-blue-600 bg-blue-50 border-blue-100" },
    { name: "Full Stack", color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
    { name: "Artificial Intelligence", color: "text-cyan-600 bg-cyan-50 border-cyan-100" },
    { name: "Data Science", color: "text-sky-600 bg-sky-50 border-sky-100" },
  ];

  const cards = [
    {
      title: "Data Science & AI",
      desc: "Passionate about building predictive classifiers, regression engines, and analytical graphs. Proficient in machine learning frameworks, data scaling, and preprocessing techniques.",
      icon: BrainCircuit,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Full-Stack Development",
      desc: "Creating seamless web applications utilizing React 19 on the frontend and robust Spring Boot REST microservices on the backend, complete with Hibernate persistence structures.",
      icon: Code2,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Database Engineering",
      desc: "Expertise in structuring and optimizing relational queries. Proficient in MySQL, H2 Database, complex joins, indexing, and transactional integrity systems.",
      icon: Database,
      color: "from-indigo-600 to-blue-500",
    },
  ];

  const academicDetails = [
    { label: "Degree", value: "B.Tech Computer Science & Engineering (Data Science)" },
    { label: "Institution", value: "Anurag University" },
    { label: "Core Foundation", value: "Java, Python, SQL, REST APIs, JPA/Hibernate" },
    { label: "Philosophy", value: "Bridging advanced machine learning models with responsive, elegant user-centric web applications." },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-blue text-xs font-bold text-primary uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover my journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 font-medium"
          >
            A B.Tech Computer Science student specializing in Data Science. I focus on developing full-stack web applications and training high-performance machine learning models to solve actual business and real-world challenges.
          </motion.p>
        </div>

        {/* Academic Details Snapshot Grid - matches the "H Portfolio" layout style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16">
          
          {/* Card 1: Academic Snapshot (Col 8) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col justify-between glass p-6 md:p-8 rounded-3xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-accent-blue text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Academics snapshot</h3>
                  <p className="text-xs font-semibold text-slate-400">Anurag University Credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {academicDetails.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 leading-snug">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Core Fields snapshot (Col 4) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between glass p-6 md:p-8 rounded-3xl"
          >
            <div>
              <h3 className="text-base font-bold mb-6 text-foreground pb-3 border-b border-slate-100 flex items-center gap-2">
                <BookOpen className="w-4.5 h-4.5 text-primary" /> Core fields
              </h3>
              <div className="flex flex-col gap-3">
                {coreFields.map((field) => (
                  <div
                    key={field.name}
                    className={`px-4 py-3.5 rounded-xl border text-xs font-bold text-center tracking-wide transition-transform hover:scale-103 duration-250 cursor-default ${field.color}`}
                  >
                    {field.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] text-slate-400 leading-relaxed font-semibold mt-6 pt-4 border-t border-slate-100">
              ⚡ Focusing on building and scaling predictive data analytical layers.
            </div>
          </motion.div>

        </div>

        {/* Focus Area Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 md:p-8 rounded-2xl group shadow-sm"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
