"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [show, setShow] = useState(true);

  const logs = [
    "Initializing Chamakuri Mohith portfolio...",
    "Running environment check [Node.js 18+, React 19]... OK",
    "Loading Data Science & Machine Learning metrics...",
    "Importing Eativo architecture engine [React, Spring Boot]... Loaded",
    "Booting particle background, establishing secure connection...",
    "Ready. Welcome to the future."
  ];

  useEffect(() => {
    if (textIndex < logs.length) {
      const delay = textIndex === logs.length - 1 ? 900 : Math.random() * 300 + 150;
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 500); // Allow exit animation to complete
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [textIndex, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark text-slate-50 font-mono p-6"
        >
          <div className="w-full max-w-lg glass-card border-slate-800 rounded-lg p-6 bg-slate-950/80 shadow-2xl relative overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex items-center gap-1.5 border-b border-slate-800 pb-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs text-slate-500 ml-2">portfolio-init.sh</span>
            </div>

            {/* Terminal Body */}
            <div className="flex flex-col gap-2 min-h-[160px] text-xs md:text-sm">
              {logs.slice(0, textIndex).map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`${idx === logs.length - 1 ? "text-primary-light font-semibold" : "text-slate-300"}`}
                >
                  <span className="text-slate-600 mr-2">$</span>
                  {log}
                </motion.div>
              ))}

              {textIndex < logs.length && (
                <div className="flex items-center text-slate-300">
                  <span className="text-slate-600 mr-2">$</span>
                  <span className="animate-pulse">{logs[textIndex]}</span>
                  <span className="w-1.5 h-4 ml-1 bg-primary-light animate-ping" />
                </div>
              )}
            </div>

            {/* Bottom percentage indicator */}
            <div className="mt-6">
              <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1.5">
                <span>SYSTEM DIAGNOSTIC</span>
                <span>{Math.min(Math.round((textIndex / logs.length) * 100), 100)}%</span>
              </div>
              <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${(textIndex / logs.length) * 100}%` }}
                  transition={{ duration: 0.2 }}
                  className="h-full bg-gradient-to-r from-primary to-primary-light"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
