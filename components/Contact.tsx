"use client";

import { Mail, FileText, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "gunjansolanki2210@gmail.com",
    href: "mailto:gunjansolanki2210@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/tenet07",
    href: "https://github.com/tenet07",
    description: "Code, projects, contributions",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/gunjan007",
    href: "https://linkedin.com/in/gunjan007",
    description: "Professional profile",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    description: "Full career details",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's work together</h2>
          <p className="text-slate-500 leading-relaxed">
            I'm open to senior engineering roles, technical consulting, and interesting side projects. If you're
            building something ambitious — reach out.
          </p>
          <div className="flex items-center justify-center gap-1.5 text-slate-400 text-sm mt-4">
            <MapPin size={14} />
            <span>Dewas, MP, India — open to remote</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {links.map(({ icon: Icon, label, value, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center flex-shrink-0 transition-all">
                <Icon size={18} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-blue-700 transition-colors">
                  {value}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
