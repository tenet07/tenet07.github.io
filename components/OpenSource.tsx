"use client";

import { GitMerge } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const contributions = [
  {
    repo: "tenet07/rails-ai-toolkit",
    description: "Production Rails integration layer for multi-provider LLMs: Anthropic, OpenAI, Gemini. Built on ruby_llm with Sidekiq jobs, pgvector RAG, ActionCable streaming, and Redis rate limiting.",
    type: "New Library",
    url: "https://github.com/tenet07/rails-ai-toolkit",
    stars: "Ruby",
    lang: "Ruby",
    langColor: "bg-red-500",
    own: true,
  },
  {
    repo: "tenet07/go-otel-microservices",
    description: "Go microservices reference with OpenTelemetry + Jaeger distributed tracing, Redis rate limiting at the API gateway layer, gRPC inter-service calls, and Docker Compose.",
    type: "Reference Architecture",
    url: "https://github.com/tenet07/go-otel-microservices",
    stars: "Go",
    lang: "Go",
    langColor: "bg-cyan-500",
    own: true,
  },
  {
    repo: "tenet07/rails-starter-kit",
    description: "Rails 8 app template with Devise, Pundit, Sidekiq, pgvector, OpenTelemetry, and GitHub Actions CI/CD. Includes a generator that scaffolds AI chat into any model in one command.",
    type: "App Template",
    url: "https://github.com/tenet07/rails-starter-kit",
    stars: "Ruby",
    lang: "Ruby",
    langColor: "bg-red-500",
    own: true,
  },
  {
    repo: "tenet07/SlideBuilder.ai",
    description: "MCP tool-calling agent that generates PowerPoint decks from YouTube URLs. Uses Claude's tool use to extract key points, structure slides, and output a ready-to-use .pptx file.",
    type: "MCP Agent",
    url: "https://github.com/tenet07/SlideBuilder.ai",
    stars: "Python",
    lang: "Python",
    langColor: "bg-yellow-500",
    own: true,
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Open Source</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Public Projects on GitHub</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          Libraries, tools, and reference implementations built around my core stack — free for the community to use and extend.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contributions.map((c) => (
            <a
              key={c.repo}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 min-w-0">
                  <GithubIcon size={16} className="text-slate-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-900 text-sm truncate group-hover:text-blue-700 transition-colors">
                    {c.repo}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 flex-shrink-0">
                  <span className={`w-2 h-2 rounded-full ${c.langColor}`} />
                  {c.lang}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.description}</p>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-medium">
                  <GitMerge size={11} />
                  {c.type}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/tenet07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium"
          >
            <GithubIcon size={16} />
            View all contributions on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
