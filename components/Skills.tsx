"use client";

const skillGroups = [
  {
    category: "Languages",
    color: "blue",
    skills: ["Ruby", "GoLang", "JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    color: "violet",
    skills: ["Ruby on Rails", "React.js", "Next.js", "Node.js", "Sidekiq", "ActiveAdmin", "RSpec"],
  },
  {
    category: "Cloud & Infrastructure",
    color: "sky",
    skills: ["AWS EC2", "S3", "SQS/SNS", "Lambda", "RDS", "CloudFormation", "Docker", "Kubernetes", "Firebase"],
  },
  {
    category: "API & Microservices",
    color: "indigo",
    skills: ["REST", "gRPC", "GraphQL", "OpenAPI/Swagger", "JWT/OAuth2", "Rate Limiting", "OpenTelemetry", "Jaeger"],
  },
  {
    category: "Databases & Caching",
    color: "emerald",
    skills: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "MongoDB"],
  },
  {
    category: "DevOps & Observability",
    color: "orange",
    skills: ["GitHub Actions", "GitLab CI/CD", "Grafana", "Prometheus", "Sentry", "SonarQube", "Rollbar"],
  },
  {
    category: "AI / LLM Tooling",
    color: "purple",
    skills: ["Claude", "Cursor", "Kiro", "GitHub Copilot", "MCP Servers", "LangChain", "LangGraph", "RAG Pipelines", "pgvector", "Pinecone"],
  },
  {
    category: "Integrations",
    color: "rose",
    skills: ["Stripe", "SendGrid", "DocuSign", "Zoom", "Google APIs", "Mattermost"],
  },
];

const colorMap: Record<string, { badge: string; label: string }> = {
  blue:    { badge: "bg-blue-50 text-blue-700 border-blue-200",       label: "text-blue-700" },
  violet:  { badge: "bg-violet-50 text-violet-700 border-violet-200", label: "text-violet-700" },
  sky:     { badge: "bg-sky-50 text-sky-700 border-sky-200",          label: "text-sky-700" },
  indigo:  { badge: "bg-indigo-50 text-indigo-700 border-indigo-200", label: "text-indigo-700" },
  emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "text-emerald-700" },
  orange:  { badge: "bg-orange-50 text-orange-700 border-orange-200", label: "text-orange-700" },
  purple:  { badge: "bg-purple-50 text-purple-700 border-purple-200", label: "text-purple-700" },
  rose:    { badge: "bg-rose-50 text-rose-700 border-rose-200",       label: "text-rose-700" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Expertise</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          A comprehensive stack built over 6+ years of production engineering across diverse domains.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const colors = colorMap[group.color];
            return (
              <div key={group.category} className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-slate-200 hover:shadow-sm transition-all">
                <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${colors.label}`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
