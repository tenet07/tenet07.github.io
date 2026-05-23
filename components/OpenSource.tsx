"use client";

import { GitMerge, Star } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const contributions = [
  {
    repo: "rails/rails",
    description: "Contributed documentation improvements and test coverage for ActiveRecord query methods, clarifying edge-case behavior for N+1 detection.",
    type: "Documentation + Tests",
    url: "https://github.com/rails/rails",
    stars: "56k+",
    lang: "Ruby",
    langColor: "bg-red-500",
  },
  {
    repo: "open-telemetry/opentelemetry-ruby",
    description: "Added instrumentation examples for Sidekiq and Resque workers, enabling distributed tracing for background job processing in Rails apps.",
    type: "Feature + Docs",
    url: "https://github.com/open-telemetry/opentelemetry-ruby",
    stars: "1.2k+",
    lang: "Ruby",
    langColor: "bg-red-500",
  },
  {
    repo: "pgvector/pgvector",
    description: "Added ActiveRecord migration examples and Rails integration guide for pgvector, making it easier to bootstrap vector search in Rails apps.",
    type: "Documentation",
    url: "https://github.com/pgvector/pgvector",
    stars: "13k+",
    lang: "Ruby",
    langColor: "bg-red-500",
  },
  {
    repo: "alan2207/bulletproof-react",
    description: "Contributed TypeScript improvements and updated patterns for React Query v5 compatibility in the project-structure reference implementation.",
    type: "TypeScript + DX",
    url: "https://github.com/alan2207/bulletproof-react",
    stars: "29k+",
    lang: "TypeScript",
    langColor: "bg-blue-500",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Community</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Open Source Contributions</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          Contributing back to the tools and communities that made this work possible.
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
                <div className="flex items-center gap-1 text-slate-400 text-xs flex-shrink-0">
                  <Star size={12} />
                  <span>{c.stars}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.description}</p>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-medium">
                  <GitMerge size={11} />
                  {c.type}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <span className={`w-2.5 h-2.5 rounded-full ${c.langColor}`} />
                  {c.lang}
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
