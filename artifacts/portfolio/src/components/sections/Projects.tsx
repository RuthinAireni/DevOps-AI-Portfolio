import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Zap, Brain, Cloud, GitBranch, Lock } from "lucide-react";

const projects = [
  {
    icon: Brain,
    number: "01",
    title: "Telugu LLM — India's Foundational Language Model",
    description:
      "Collaborative contribution to VISWAM.AI's Telugu LLM project — building India's foundational regional language model. Involved in data preprocessing, model evaluation workflows, and structured deployment pipelines using Python and Transformer architectures (GPT/BERT). This is one of the most impactful AI efforts in Indian regional language NLP.",
    impact: "Contributing to India's first large-scale Telugu language AI model",
    tech: ["Python", "Transformers (GPT/BERT)", "LLM", "NLP", "AI Evaluation", "DevOps"],
    github: null,
    link: "#",
    featured: true,
    isPrivate: false,
  },
  {
    icon: Brain,
    number: "02",
    title: "RAG-Based AI Knowledge Assistant",
    description:
      "Built a Retrieval-Augmented Generation (RAG) pipeline that allows users to query documents and knowledge bases using natural language. Ingests PDFs and structured data into a vector store, retrieves semantically relevant chunks, and generates grounded answers via LLMs. Includes confidence scoring to reduce hallucinations.",
    impact: "Dramatically reduces manual search time in knowledge-heavy workflows",
    tech: ["Python", "LangChain", "RAG", "Vector DB", "LLMs", "FastAPI"],
    github: null,
    link: "#",
    featured: true,
    isPrivate: true,
  },
  {
    icon: Zap,
    number: "03",
    title: "n8n AI-Powered Automation Workflows",
    description:
      "Designed and deployed multiple business automation workflows using n8n, integrating REST APIs, webhooks, and AI tools. One workflow auto-classifies and routes support requests using an LLM, drafts responses, and notifies the right team — fully autonomous. Reduced manual overhead significantly in tested scenarios.",
    impact: "Automated repetitive operations tasks end-to-end without code",
    tech: ["n8n", "REST APIs", "Webhooks", "OpenAI", "No-code / Low-code", "Node.js"],
    github: null,
    link: "#",
    featured: false,
    isPrivate: true,
  },
  {
    icon: GitBranch,
    number: "04",
    title: "Cloud Infrastructure Automation (IaC)",
    description:
      "Built Terraform-based infrastructure automation for AWS and Azure environments during the Vcube internship. Covered VM provisioning, networking, storage configuration, and CI/CD pipeline setup. Also created comprehensive student lab guides and step-by-step DevOps tutorials covering Docker, Kubernetes, and Azure DevOps.",
    impact: "Reduced cloud setup time and mentored 20+ students through hands-on labs",
    tech: ["Terraform", "AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git"],
    github: null,
    link: "#",
    featured: false,
    isPrivate: false,
  },
  {
    icon: Cloud,
    number: "05",
    title: "IT System Audit & Monitoring Setup",
    description:
      "At RSB Retail India Limited, set up and maintained IT system health processes covering hardware, software, and network troubleshooting. Supported audit and stock verification workflows, built process documentation, and ensured smooth day-to-day IT operations across the organisation's infrastructure.",
    impact: "Maintained stable IT operations and improved issue resolution turnaround",
    tech: ["IT Operations", "L1 Support", "System Audit", "Network", "Documentation"],
    github: null,
    link: "#",
    featured: false,
    isPrivate: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-primary font-mono text-2xl mr-2">04.</span> Featured Projects
          </h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm font-mono mb-12 flex items-center gap-2"
        >
          <Lock className="w-3.5 h-3.5 text-primary" />
          Some projects are hosted in private repositories — descriptions reflect real work done.
        </motion.p>

        {/* Featured cards */}
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
                  <div className="flex items-center gap-2">
                    {project.isPrivate && (
                      <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground border border-border rounded-full px-2 py-0.5">
                        <Lock className="w-3 h-3" /> Private
                      </span>
                    )}
                    <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Details">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

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

        {/* Remaining cards */}
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
                  <div className="flex items-center gap-2">
                    {project.isPrivate && (
                      <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground border border-border rounded-full px-2 py-0.5">
                        <Lock className="w-3 h-3" /> Private
                      </span>
                    )}
                    <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Details">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ruthinaireni5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm border border-border rounded-lg px-6 py-3 hover:border-primary/50 bg-card"
          >
            <FolderGit2 className="w-4 h-4" />
            View GitHub Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
