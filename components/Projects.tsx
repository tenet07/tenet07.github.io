"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const projects = [
  {
    name: "rails-ai-toolkit",
    description:
      "Production-ready Rails integration layer for multi-provider LLMs. Adds ActiveRecord persistence, Sidekiq async jobs, pgvector RAG pipelines, and ActionCable streaming — so you ship AI features like any other Rails feature.",
    tags: ["Ruby on Rails", "Anthropic", "pgvector", "Sidekiq", "Redis", "MIT"],
    github: "https://github.com/tenet07/rails-ai-toolkit",
    demo: null,
    color: "from-rose-500 to-pink-600",
    letter: "R",
  },
  {
    name: "go-otel-microservices",
    description:
      "Reference Go microservices architecture with full OpenTelemetry observability: distributed tracing via Jaeger, Redis rate limiting at the API Gateway, gRPC service communication, and Docker Compose orchestration.",
    tags: ["GoLang", "OpenTelemetry", "Jaeger", "gRPC", "Redis", "Docker"],
    github: "https://github.com/tenet07/go-otel-microservices",
    demo: null,
    color: "from-cyan-500 to-blue-600",
    letter: "G",
  },
  {
    name: "rails-starter-kit",
    description:
      "One-command Rails 8 template with Devise auth, Pundit, Sidekiq, pgvector, OpenTelemetry, Sentry, Docker Compose, and GitHub Actions CI/CD — plus an AI chat generator that scaffolds LLM features into any model.",
    tags: ["Ruby on Rails", "Devise", "Sidekiq", "OpenTelemetry", "Docker"],
    github: "https://github.com/tenet07/rails-starter-kit",
    demo: null,
    color: "from-violet-500 to-purple-600",
    letter: "S",
  },
  {
    name: "SlideBuilder.ai",
    description:
      "MCP tool-calling agent that generates polished PowerPoint decks from YouTube video URLs. Uses Claude to extract key points, structure slides, and format content automatically.",
    tags: ["MCP", "Claude API", "Python", "PowerPoint", "Tool Use"],
    github: "https://github.com/tenet07/SlideBuilder.ai",
    demo: null,
    color: "from-amber-500 to-orange-600",
    letter: "S",
  },
  {
    name: "coding-ninja",
    description:
      "Self-paced Go learning platform with structured modules on algorithms, system design, and concurrency. Built to practice production-grade Go patterns beyond toy examples.",
    tags: ["GoLang", "Algorithms", "System Design", "Concurrency"],
    github: "https://github.com/tenet07/coding-ninja",
    demo: null,
    color: "from-emerald-500 to-teal-600",
    letter: "C",
  },
  {
    name: "geekbygeeks",
    description:
      "Storyteller platform made by and for developers — share engineering stories, lessons learned, and deep dives in a community built around technical craft.",
    tags: ["JavaScript", "Community", "Dev Platform"],
    github: "https://github.com/tenet07/geekbygeeks",
    demo: null,
    color: "from-indigo-500 to-blue-600",
    letter: "G",
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
