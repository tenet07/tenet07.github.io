"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const projects = [
  {
    name: "BudgetlyAI",
    description:
      "AI-powered personal finance tracker with natural language expense logging, smart categorization, and predictive budget insights using LLMs and RAG pipelines.",
    tags: ["React", "Node.js", "OpenAI API", "PostgreSQL", "RAG"],
    github: "https://github.com/tenet07/budgetly",
    demo: null,
    color: "from-emerald-500 to-teal-600",
    letter: "B",
  },
  {
    name: "Aigile",
    description:
      "Agile project management platform with AI-assisted story generation, sprint planning, and automated standup summaries. Built for engineering teams.",
    tags: ["Ruby on Rails", "React", "Sidekiq", "PostgreSQL", "Claude API"],
    github: "https://github.com/tenet07/aigile",
    demo: null,
    color: "from-blue-500 to-indigo-600",
    letter: "A",
  },
  {
    name: "LoopCRM",
    description:
      "Full-stack CRM platform with pipeline management, contact tracking, email automation via SendGrid, and Zoom integration for sales teams.",
    tags: ["Ruby on Rails", "React", "SendGrid", "Zoom API", "Redis"],
    github: "https://github.com/tenet07/loops-crm",
    demo: null,
    color: "from-violet-500 to-purple-600",
    letter: "L",
  },
  {
    name: "RentSight",
    description:
      "Real-estate intelligence platform providing rental market analytics, property comparisons, and neighborhood insights for tenants and landlords.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Google Maps API"],
    github: "https://github.com/tenet07/rent-sight",
    demo: null,
    color: "from-orange-500 to-amber-600",
    letter: "R",
  },
  {
    name: "Agent Orchestrator",
    description:
      "Multi-agent orchestration framework for chaining LLM agents with tool use, memory management, and human-in-the-loop approval workflows.",
    tags: ["Python", "LangGraph", "LangChain", "OpenAI", "Redis"],
    github: "https://github.com/tenet07/agent-orchestrator",
    demo: null,
    color: "from-rose-500 to-pink-600",
    letter: "O",
  },
  {
    name: "Voiceflow Integration",
    description:
      "Voice-enabled AI assistant platform integrating Voiceflow with custom Rails backend and React frontend for conversational UI workflows.",
    tags: ["React", "Ruby on Rails", "Voiceflow API", "WebSockets"],
    github: "https://github.com/tenet07/voiceflow",
    demo: null,
    color: "from-sky-500 to-cyan-600",
    letter: "V",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Work</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Side Projects</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          Products and tools I've built outside of work — exploring AI, SaaS, and developer tooling.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md hover:border-slate-200 transition-all group flex flex-col"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${p.color} p-6 flex items-center justify-between`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl">
                  {p.letter}
                </div>
                <div className="flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon size={16} className="text-white" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
