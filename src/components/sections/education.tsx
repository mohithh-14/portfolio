"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";

export default function Education() {
  const educationTimeline = [
    {
      institution: "Anurag University",
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      duration: "Pursuing",
      location: "Hyderabad, India",
      description: "Focusing on advanced engineering topics including Database Systems, Web Development frameworks, Artificial Intelligence, and Predictive Data Science methodologies.",
      featured: true,
    },
    {
      institution: "Nagarjuna Junior College",
      degree: "Intermediate Education (MPC)",
      duration: "Completed",
      location: "Hyderabad, India",
      description: "Completed higher secondary curriculum with major focus on Mathematics, Physics, and Chemistry (MPC).",
      featured: false,
    },
    {
      institution: "Ramadevi Public School",
      degree: "ICSE - High School Board",
      duration: "Completed",
      location: "Hyderabad, India",
      description: "Acquired secondary education following ICSE guidelines, developing mathematical reasoning, science foundation, and soft skills.",
      featured: false,
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-blue text-xs font-bold text-primary uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Education <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 font-medium"
          >
            A fully aligned, alternating chronological overview of my educational journey and academic foundations.
          </motion.p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative py-8">
          
          {/* Centered Vertical Line on Desktop */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-100" />

          {/* Active fill blue indicator track */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-[15%] w-[2px] bg-primary shadow-[0_0_15px_rgba(37,99,235,0.4)]" />

          <div className="space-y-16 relative">
            {educationTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              // Reusable card contents
              const CardContent = () => (
                <div className={`glass p-6 md:p-8 rounded-2xl relative shadow-md hover:shadow-lg transition-all duration-300 ${
                  item.featured ? "ring-1 ring-primary/10 bg-blue-50/[0.02]" : ""
                }`}>
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-bold text-slate-400 mb-1 tracking-wider uppercase">
                      {item.duration}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
                      {item.institution}
                    </h3>
                    <h4 className="text-xs md:text-sm font-semibold text-primary">
                      {item.degree}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-3 text-[10px] md:text-xs text-slate-400 font-bold">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-500 mt-4 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              );

              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative flex flex-col md:grid md:grid-cols-9 items-center justify-center gap-4 md:gap-0"
                >
                  {/* Left Column Card (Desktop Even - alternates to the left) */}
                  <div className="hidden md:flex justify-end items-center col-span-4 w-full pr-8">
                    {isEven && (
                      <div className="w-full max-w-sm">
                        <CardContent />
                      </div>
                    )}
                  </div>

                  {/* Centered Timeline Dot indicator */}
                  <div className="absolute md:relative left-4 md:left-auto top-2 md:top-auto z-10 flex md:col-span-1 items-center justify-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-white shadow-md transition-transform duration-300 hover:scale-110 ${
                      item.featured
                        ? "bg-primary text-white"
                        : "bg-slate-50 border border-slate-200 text-slate-500"
                    }`}>
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right Column Card (Desktop Odd - alternates to the right) */}
                  <div className="hidden md:flex justify-start items-center col-span-4 w-full pl-8">
                    {!isEven && (
                      <div className="w-full max-w-sm">
                        <CardContent />
                      </div>
                    )}
                  </div>

                  {/* Mobile Card (Graceful Fallback - visible on mobile only) */}
                  <div className="w-full pl-10 block md:hidden">
                    <CardContent />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
