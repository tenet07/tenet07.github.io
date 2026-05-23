"use client";

import { useState, useEffect } from "react";
import { Mail, FileText, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const roles = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "Cloud Architect",
  "AI-Augmented Developer",
  "Rails + React Expert",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blue accent blob */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-4">
            Gunjan<br />
            <span className="text-blue-600">Solanki</span>
          </h1>

          {/* Animated role */}
          <div className="h-10 flex items-center mb-6">
            <span className="text-xl md:text-2xl text-slate-600 font-medium">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-blue-600 ml-0.5 animate-pulse" />
            </span>
          </div>

          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-10">
            6+ years building and scaling distributed full-stack systems across fintech, real-estate, RPA, and SaaS.
            Deep expertise in <strong className="text-slate-700">Ruby on Rails, React, GoLang</strong>, and{" "}
            <strong className="text-slate-700">AWS</strong>, with a focus on AI-augmented developer workflows.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:border-blue-400 hover:text-blue-600 transition-all hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 transition-colors text-sm"
            >
              <FileText size={16} />
              Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/tenet07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm"
            >
              <GithubIcon size={18} />
              <span>tenet07</span>
            </a>
            <a
              href="https://linkedin.com/in/gunjan-solanki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:gunjansolanki2210@gmail.com"
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap gap-8">
          {[
            { value: "6+", label: "Years Experience" },
            { value: "4", label: "Companies" },
            { value: "30%", label: "P95 Latency Cut" },
            { value: "85%+", label: "Test Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
              <span className="text-sm text-slate-500 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce">
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
