"use client";

const jobs = [
  {
    role: "Senior Software Engineer",
    company: "VConstruct Pvt Ltd",
    product: "Vueops — Facility Management Platform",
    location: "Noida, India",
    period: "Jul 2025 – Present",
    current: true,
    bullets: [
      "Implemented AWS API Gateway across the microservices fleet to centralize traffic routing, auth, and TLS termination — eliminating ad-hoc routing and improving reliability.",
      "Rolled out distributed tracing (OpenTelemetry + Jaeger) and rate limiting at the gateway layer, cutting mean time to debug cross-service latency by ~50%.",
      "Drove API standardization via OpenAPI 3.0 specs, auto-generated Swagger docs, and contract validation in CI.",
      "Remediated security vulnerabilities from AWS Inspector and ECR scans, contributing to SOC2 compliance.",
      "Built AI-augmented developer workflows using Claude, Cursor, and Kiro for feature scaffolding, refactoring, and documentation generation.",
      "Set up MCP servers for Jira and GitHub Copilot — reduced PR review and ticket creation time by ~35%.",
    ],
    tags: ["AWS API Gateway", "OpenTelemetry", "Jaeger", "SOC2", "Claude", "MCP Servers"],
  },
  {
    role: "Software Engineer (L2)",
    company: "Builder.ai",
    product: "360 · Scheduler · Tracker",
    location: "Remote / Gurugram, India",
    period: "Nov 2022 – Jun 2025",
    current: false,
    bullets: [
      "Led design and development of 360, Scheduler, and Tracker — internal delivery platforms used by 200+ users across delivery, ops, and finance.",
      "Migrated legacy Redis messaging to AWS SQS + SNS, increasing async job throughput and stability by 40%+ and enabling fan-out patterns.",
      "Implemented API optimizations — caching, N+1 elimination, query batching — reducing P95 latency by 30% on hot endpoints.",
      "Productionized GoLang microservices interoperating with the Rails monolith via gRPC and message queues.",
      "Raised test coverage to 85%+ on core modules via SonarQube, RuboCop, and parallel RSpec workflows.",
      "Mentored 4 junior engineers, ran weekly sprint demos, authored RCA reports for production incidents.",
    ],
    tags: ["Ruby on Rails", "React", "GoLang", "gRPC", "AWS SQS/SNS", "RSpec"],
  },
  {
    role: "Senior Software Engineer",
    company: "Bacancy Systems",
    product: "Invoke — RPA Platform",
    location: "Ahmedabad, India",
    period: "Mar 2022 – Nov 2022",
    current: false,
    bullets: [
      "Delivered secure, testable APIs and UI modules on Rails + React for a cloud-based Robotic Process Automation platform.",
      "Introduced service objects and DRY patterns that reduced regression bugs and improved code readability.",
      "Sustained 95%+ release stability via integration tests and performance checks across staging and production.",
      "Partnered with QA and DevOps on release planning and build validation.",
    ],
    tags: ["Ruby on Rails", "React", "RSpec", "RPA", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "Systango",
    product: "RACE Ecosystem · FTC Solar",
    location: "Indore, India",
    period: "Sep 2019 – Mar 2022",
    current: false,
    bullets: [
      "Built admin tooling, CRM, and real-estate workflows for RACE Ecosystem (blockchain-based platform) using Rails, ActiveAdmin, Sidekiq, and SendGrid.",
      "Integrated DocuSign and automated email flows to support scalable business operations.",
      "Contributed to FTC Solar by building interactive React components and Dockerizing services for CI/CD pipelines.",
    ],
    tags: ["Ruby on Rails", "ActiveAdmin", "Sidekiq", "React", "Docker", "DocuSign"],
  },
  {
    role: "Software Engineering Intern",
    company: "Infosys Technologies",
    product: "Structured Engineering Training",
    location: "Mysuru, India",
    period: "Jan 2019 – May 2019",
    current: false,
    bullets: [
      "Completed structured training in Python, MySQL, and object-oriented design as part of the Infosys onboarding program.",
    ],
    tags: ["Python", "MySQL", "OOP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Career</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Professional Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block ${
                  job.current
                    ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/30"
                    : "bg-white border-slate-300"
                }`} />

                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                        {job.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 font-semibold text-sm">{job.company}</p>
                      <p className="text-slate-500 text-sm">{job.product} · {job.location}</p>
                    </div>
                    <span className="text-sm text-slate-500 font-medium whitespace-nowrap">{job.period}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
