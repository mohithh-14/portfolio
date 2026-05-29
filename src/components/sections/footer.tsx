"use client";

import { Code2, Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-100 py-12 md:py-16 overflow-hidden bg-transparent">
      {/* Background blurs */}
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand Signature */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-bold text-base md:text-lg tracking-tight text-foreground">
            <div className="p-1 rounded bg-accent-blue text-primary">
              <Code2 className="w-4 h-4" />
            </div>
            <span>
              Mohith<span className="text-primary font-bold">.dev</span>
            </span>
          </div>
          <p className="text-xs font-semibold text-slate-400 text-center md:text-left mt-1">
            Designed & Developed by Chamakuri Mohith
          </p>
        </div>

        {/* Center: Scroll to top & secondary navigation */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm bg-white/60 hover:-translate-y-0.5 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
            <span>Built with React 19 & Next.js 15</span>
            <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse inline" />
            <span>in {currentYear}</span>
          </div>
        </div>

        {/* Right Side: Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mohithh-14"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-all duration-200"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ch-mohith-420598314/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-all duration-200"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
