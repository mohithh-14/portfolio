"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Cpu, LineChart, Network, Terminal, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "AWS AI Practitioner Training",
      issuer: "Amazon Web Services (AWS)",
      icon: Cloud,
      color: "from-orange-500 to-amber-500",
      bgGlow: "rgba(249, 115, 22, 0.04)",
      status: "Verified",
    },
    {
      title: "CCNA Enterprise Networking",
      issuer: "Cisco",
      icon: Network,
      color: "from-blue-500 to-sky-500",
      bgGlow: "rgba(59, 130, 246, 0.04)",
      status: "Verified",
    },
    {
      title: "Cisco Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      icon: LineChart,
      color: "from-emerald-500 to-teal-500",
      bgGlow: "rgba(16, 185, 129, 0.04)",
      status: "Verified",
    },
    {
      title: "Automation Anywhere Professional",
      issuer: "Automation Anywhere",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      bgGlow: "rgba(99, 102, 241, 0.04)",
      status: "Verified",
    },
    {
      title: "Python Essentials 1",
      issuer: "Python Institute",
      icon: Terminal,
      color: "from-blue-600 to-indigo-600",
      bgGlow: "rgba(37, 99, 235, 0.04)",
      status: "Verified",
    },
    {
      title: "Python Essentials 2",
      issuer: "Python Institute",
      icon: Terminal,
      color: "from-sky-500 to-blue-600",
      bgGlow: "rgba(56, 189, 248, 0.04)",
      status: "Verified",
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      {/* Background radial soft light */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-blue text-xs font-bold text-primary uppercase tracking-wider mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Certifications & <span className="text-gradient">Badges</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 font-medium"
          >
            Industry recognized validations covering cloud architecture, database operations, artificial intelligence, enterprise networking, and scripts automation.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass p-6 md:p-8 rounded-2xl relative group overflow-hidden shadow-sm flex flex-col justify-between"
              >
                {/* Micro Hover Glow Accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${cert.bgGlow} 0%, transparent 60%)` }}
                />

                <div className="space-y-6">
                  {/* Card Header Category Icon */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-sm`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    {/* Verification Stamp badge */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-green-500/10 text-green-600 border border-green-100">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  {/* Title Description */}
                  <div className="space-y-1">
                    <h3 className="text-base md:text-lg font-bold text-foreground leading-snug tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
