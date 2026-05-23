"use client";

import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Location", value: "Dewas, MP, India" },
  { icon: Briefcase, label: "Current Role", value: "Senior SWE @ VConstruct" },
  { icon: GraduationCap, label: "Education", value: "B.E. IT, DAVV Indore" },
  { icon: Award, label: "Experience", value: "6+ Years Full-Stack" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">About</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Building systems that scale, ship, and last</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I'm a Senior Software Engineer with 6+ years designing and scaling distributed full-stack systems
                across fintech, real-estate, RPA, and SaaS domains. My core stack is{" "}
                <span className="font-semibold text-slate-800">Ruby on Rails, React.js, GoLang, and PostgreSQL</span>,
                deployed on cloud-native infrastructure with AWS, Docker, and Kubernetes.
              </p>
              <p>
                I've led API gateway standardization, drove observability rollouts with OpenTelemetry and Jaeger,
                and shipped AI-augmented developer workflows using Claude, Cursor, Kiro, LangChain, and LangGraph.
                I care deeply about code quality — raising test coverage to 85%+ and cutting P95 latency by 30%
                on critical endpoints.
              </p>
              <p>
                Beyond the code, I mentor engineers, run sprint demos, write RCAs, and partner closely with product
                and DevOps to ship reliable software that actually moves metrics.
              </p>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-100 flex items-center justify-center mb-3 transition-all">
                  <Icon size={18} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-semibold text-slate-800">{value}</p>
              </div>
            ))}

            {/* Awards block */}
            <div className="col-span-2 p-5 rounded-2xl border border-slate-100 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">Awards</p>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  Builder.ai recognition — led internal migration to Builder Chat
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  Quarterly Excellence Award — Bacancy Systems (RPA modules ahead of schedule)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  Software Engineering Certification — Infosys Technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
