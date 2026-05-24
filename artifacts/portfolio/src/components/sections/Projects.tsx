import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Zap, Brain, Cloud, GitBranch } from "lucide-react";

const projects = [
  {
    icon: Brain,
    number: "01",
    title: "RAG-Based AI Knowledge Assistant",
    description:
      "Production-grade Retrieval-Augmented Generation (RAG) system that lets users query large document corpora with natural language. Ingests PDFs, web pages, and databases into a vector store, retrieves semantically relevant context, and generates grounded responses via GPT-4. Includes hallucination guardrails and confidence scoring.",
    impact: "Reduced manual document search time by ~80% in pilot deployment",
    tech: ["Python", "LangChain", "OpenAI GPT-4", "Pinecone", "FastAPI", "Docker"],
    github: "https://github.com/srinivasulumaddula",
    link: "#",
    featured: true,
  },
  {
    icon: Brain,
    number: "02",
    title: "LLM-Powered Customer Support Chatbot",
    description:
      "Conversational AI chatbot built with advanced prompt engineering techniques — few-shot prompting, chain-of-thought reasoning, and dynamic context injection. Integrated with live product catalogue via tool-calling, with a fallback escalation path to human agents. Deployed as a containerised microservice on Azure.",
    impact: "Handles 60%+ of tier-1 support queries autonomously",
    tech: ["Python", "OpenAI API", "LangChain", "Azure ACI", "Redis", "FastAPI"],
    github: "https://github.com/srinivasulumaddula",
    link: "#",
    featured: true,
  },
  {
    icon: GitBranch,
    number: "03",
    title: "Cloud DevOps Infrastructure Pipeline",
    description:
      "End-to-end cloud infrastructure and CI/CD solution built with Infrastructure as Code. Terraform modules provision VPCs, EKS/AKS clusters, RDS, and S3 across AWS and Azure. GitHub Actions pipelines handle build, test, SAST scanning, Docker image push to ECR, and zero-downtime Kubernetes rolling deployments.",
    impact: "Cut deployment time from 45 min to under 6 min; zero failed prod deploys",
    tech: ["Terraform", "AWS EKS", "Azure AKS", "Docker", "Kubernetes", "GitHub Actions", "Helm"],
    github: "https://github.com/srinivasulumaddula",
    link: "#",
    featured: false,
  },
  {
    icon: Zap,
    number: "04",
    title: "n8n Enterprise Automation Suite",
    description:
      "Designed and deployed 50+ production automation workflows in n8n, connecting CRM, ERP, Slack, email, and third-party REST APIs. Includes an AI-assisted triage workflow that classifies inbound support tickets with GPT, routes them to the right queue, and auto-drafts responses — all without human intervention.",
    impact: "Saved 30+ hours/week of manual operations work",
    tech: ["n8n", "Node.js", "REST APIs", "Webhooks", "OpenAI", "PostgreSQL", "Docker"],
    github: "https://github.com/srinivasulumaddula",
    link: "#",
    featured: false,
  },
  {
    icon: Cloud,
    number: "05",
    title: "IT System Audit & Monitoring Dashboard",
    description:
      "Centralised observability platform built during System Auditor role. Python agents collect metrics from 100+ servers, feeding Prometheus. Grafana dashboards surface CPU, memory, disk, and compliance KPIs in real time. Alertmanager rules trigger PagerDuty and Slack notifications for SLA breaches.",
    impact: "Identified 3 critical security misconfigurations before audit; MTTR reduced by 40%",
    tech: ["Python", "Prometheus", "Grafana", "Alertmanager", "Bash", "Linux", "PostgreSQL"],
    github: "https://github.com/srinivasulumaddula",
    link: "#",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-primary font-mono text-2xl mr-2">04.</span> Featured Projects
          </h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        {/* Featured — large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-7 flex flex-col hover:-translate-y-1.5 transition-transform duration-300 group hover:border-primary/50 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.08)]"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto space-y-3">
                  <div className="flex items-start gap-2 text-xs text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 rounded-md px-3 py-2">
                    <Zap className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{project.impact}</span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Rest — smaller cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col hover:-translate-y-1.5 transition-transform duration-300 group hover:border-primary/50 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.06)]"
              >
                <div className="flex justify-between items-center mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto space-y-3">
                  <div className="flex items-start gap-2 text-xs text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 rounded-md px-2.5 py-1.5">
                    <Zap className="w-3 h-3 mt-0.5 shrink-0" />
                    <span>{project.impact}</span>
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/srinivasulumaddula"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm border border-border rounded-lg px-6 py-3 hover:border-primary/50 bg-card"
          >
            <FolderGit2 className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
