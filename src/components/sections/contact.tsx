"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

// TO ENABLE REAL EMAILS TO YOUR MAILBOX:
// 1. Register a free account on https://formspree.io
// 2. Create a form and paste its Form ID below (e.g. "xpzvkgle")
const FORMSPREE_FORM_ID = "xqejjkdp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }
      
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Fire confetti burst upon successful submission!
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 45 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

    } catch (err) {
      setFormStatus("error");
    }
  };

  const contactMethods = [
    {
      label: "Email Me Directly",
      value: "mohithch662@gmail.com",
      href: "mailto:mohithch662@gmail.com",
      icon: Mail,
      color: "text-blue-500 bg-blue-50 border-blue-100",
    },
    {
      label: "GitHub Profile",
      value: "github.com/mohithh-14",
      href: "https://github.com/mohithh-14",
      icon: GithubIcon,
      color: "text-slate-700 bg-slate-50 border-slate-200/60",
    },
    {
      label: "LinkedIn Professional",
      value: "Chamakuri Mohith",
      href: "https://www.linkedin.com/in/ch-mohith-420598314/",
      icon: LinkedinIcon,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      label: "Contact Number",
      value: "+91 9381177400",
      href: "tel:+919381177400",
      icon: Phone,
      color: "text-indigo-500 bg-indigo-50 border-indigo-100",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-transparent">
      {/* Background blurs */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-blue text-xs font-bold text-primary uppercase tracking-wider mb-3"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect with me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 mt-4 font-medium"
          >
            Have a question, an internship opportunity, or a project concept? Send me a message using the form or connect on social platforms!
          </motion.p>
        </div>

        {/* Layout: Sidebar stats vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4.5">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href !== "#" ? "_blank" : undefined}
                    rel={method.href !== "#" ? "noopener noreferrer" : undefined}
                    className="glass p-5 rounded-2xl border hover:border-primary/30 transition-all duration-300 group shadow-sm flex items-center gap-4 bg-white/70"
                  >
                    <div className={`p-3 rounded-xl border ${method.color} transition-transform group-hover:scale-105 duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {method.label}
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-slate-700 mt-0.5 break-all">
                        {method.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden bg-white/70">
              
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  /* SUCCESS BLOCK */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4 font-sans"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 border border-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                    <p className="text-sm text-slate-500 max-w-sm font-medium">
                      Thank you! Your message was delivered successfully. A notification has been sent, and I will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-light text-white shadow-md transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* CONTACT FORM */
                  <form key="form" onSubmit={handleFormSubmit} className="space-y-5">
                    
                    {/* Row: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-sm font-medium rounded-xl border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                            formErrors.name ? "border-red-500" : "border-slate-200 focus:border-primary"
                          }`}
                          placeholder="Chamakuri Mohith"
                        />
                        {formErrors.name && (
                          <div className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
                          </div>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-sm font-medium rounded-xl border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                            formErrors.email ? "border-red-500" : "border-slate-200 focus:border-primary"
                          }`}
                          placeholder="client@company.com"
                        />
                        {formErrors.email && (
                          <div className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 text-sm font-medium rounded-xl border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                          formErrors.subject ? "border-red-500" : "border-slate-200 focus:border-primary"
                        }`}
                        placeholder="Project Partnership / Internship Invitation"
                      />
                      {formErrors.subject && (
                        <div className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.subject}
                        </div>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Message Content
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 text-sm font-medium rounded-xl border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none ${
                          formErrors.message ? "border-red-500" : "border-slate-200 focus:border-primary"
                        }`}
                        placeholder="Write your detailed proposal or message here..."
                      />
                      {formErrors.message && (
                        <div className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.message}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 disabled:opacity-50"
                    >
                      {formStatus === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Delivering...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Secure Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
