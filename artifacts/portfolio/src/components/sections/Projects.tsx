import { motion } from "framer-motion";
import { ExternalLink, Zap, Brain, Cloud, GitBranch, Lock, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Brain,
    accent: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-100 text-violet-600",
    number: "01",
    title: "Telugu LLM — India's Foundational Language Model",
    description:
      "Contributing to VISWAM.AI's Telugu LLM — building India's first large-scale regional language AI model. Involved in data preprocessing, model evaluation workflows, and structured deployment pipelines using Python and Transformer architectures (GPT/BERT).",
    impact: "Contributing to India's first large-scale Telugu language AI model",
    tech: ["Python", "Transformers", "GPT / BERT", "NLP", "AI Evaluation", "DevOps"],
    isPrivate: false,
    featured: true,
  },
  {
    icon: Brain,
    accent: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
    number: "02",
    title: "RAG-Based AI Knowledge Assistant",
    description:
      "Built a Retrieval-Augmented Generation (RAG) pipeline enabling natural-language querying of document corpora. Ingests PDFs and structured data into a vector store, retrieves semantically relevant context, and generates grounded LLM responses with confidence scoring to reduce hallucinations.",
    impact: "Dramatically reduces manual search time in knowledge-heavy workflows",
    tech: ["Python", "LangChain", "RAG", "Vector DB", "LLMs", "FastAPI"],
    isPrivate: true,
    featured: true,
  },
  {
    icon: Zap,
    accent: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-600",
    number: "03",
    title: "n8n AI-Powered Automation Suite",
    description:
      "Designed and deployed multiple business automation workflows in n8n, integrating REST APIs, webhooks, and OpenAI. One workflow auto-classifies support tickets via LLM, routes them to the right team, and drafts responses — fully autonomous end-to-end.",
    impact: "Automated repetitive operations tasks end-to-end without code",
    tech: ["n8n", "REST APIs", "Webhooks", "OpenAI", "No-code", "Node.js"],
    isPrivate: true,
    featured: false,
  },
  {
    icon: GitBranch,
    accent: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
    number: "04",
    title: "Cloud Infrastructure Automation (IaC)",
    description:
      "Built Terraform-based infrastructure automation for AWS and Azure during the Vcube internship. Covered VM provisioning, networking, storage config, and CI/CD pipeline setup. Also created comprehensive DevOps lab guides for Docker, Kubernetes, and Azure DevOps.",
    impact: "Reduced cloud setup time and mentored 20+ students through hands-on labs",
    tech: ["Terraform", "AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git"],
    isPrivate: false,
    featured: false,
  },
  {
    icon: Cloud,
    accent: "bg-slate-50 border-slate-200",
    iconBg: "bg-slate-100 text-slate-600",
    number: "05",
    title: "IT System Audit & Monitoring",
    description:
      "At RSB Retail, set up and maintained IT system health processes covering hardware, software, and network troubleshooting. Supported audit and stock verification workflows, built process documentation, and ensured smooth operations across infrastructure.",
    impact: "Maintained stable IT operations and improved issue resolution turnaround",
    tech: ["IT Operations", "L1 Support", "System Audit", "Network", "Documentation"],
    isPrivate: false,
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-primary font-mono text-sm font-medium">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground flex items-center gap-1.5 mb-12"
        >
          <Lock className="w-3.5 h-3.5" />
          Some projects are in private repositories — descriptions reflect real work done.
        </motion.p>

        {/* Featured — 2 col */}
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
                className={`border-2 rounded-2xl p-7 flex flex-col ${project.accent} hover:shadow-card-hover transition-all duration-200 group`}
              >
                <div className="flex justify-between items-start mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${project.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.isPrivate && (
                      <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground border border-border bg-white rounded-full px-2.5 py-0.5">
                        <Lock className="w-3 h-3" /> Private
                      </span>
                    )}
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed mb-5">{project.description}</p>

                <div className="mt-auto space-y-3">
                  <div className="flex items-start gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                    <Zap className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    {project.impact}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-primary bg-white border border-primary/20 px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Rest — 3 col */}
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`border rounded-2xl p-6 flex flex-col bg-white hover:shadow-card-hover transition-all duration-200 group`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${project.iconBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {project.isPrivate && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5">
                        <Lock className="w-3 h-3" />
                      </span>
                    )}
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground flex-1 leading-relaxed mb-4">{project.description}</p>

                <div className="mt-auto space-y-2.5">
                  <div className="flex items-start gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-2.5 py-1.5">
                    <Zap className="w-3 h-3 mt-0.5 shrink-0" />
                    {project.impact}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-primary bg-primary/8 border border-primary/15 px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
