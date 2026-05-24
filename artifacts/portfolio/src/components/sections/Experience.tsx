import { motion } from "framer-motion";

const experiences = [
  {
    role: "System Auditor (EDP Executive)",
    company: "RSB Retail India Limited",
    period: "Oct 2025 – Present",
    duration: "8 months",
    location: "Hyderabad",
    color: "border-l-blue-500",
    dotColor: "bg-blue-500",
    description: [
      "Handling day-to-day IT operations, system maintenance, and Level 1 (L1) support — troubleshooting hardware, software, and network-related issues.",
      "Conducting system and stock audits including verification, data management, and compliance documentation.",
      "Ensuring smooth IT operations with a focus on continuous improvement and process standardisation.",
      "Resolving network and user support issues efficiently, maintaining uptime and minimising disruption.",
    ],
    tags: ["IT Operations", "L1 Support", "System Audit", "Network", "Data Management"],
  },
  {
    role: "AI Developer Intern",
    company: "VISWAM.AI",
    period: "Jul 2025 – May 2026",
    duration: "11 months",
    location: "Hyderabad, Telangana",
    color: "border-l-violet-500",
    dotColor: "bg-violet-500",
    description: [
      "Building real-world AI solutions using Python, DevOps practices, and Transformer models including GPT and BERT.",
      "Hands-on implementation of RAG (Retrieval-Augmented Generation) pipelines for knowledge-grounded AI applications.",
      "Contributing to the Telugu LLM — India's foundational regional language model — through model development and evaluation workflows.",
      "Following structured workflows for deploying, fine-tuning, and evaluating impactful AI systems at production scale.",
    ],
    tags: ["Python", "LLMs", "RAG", "GPT / BERT", "Telugu LLM", "AI Deployment"],
  },
  {
    role: "Cloud & DevOps Intern",
    company: "Vcube Software Solutions",
    period: "Nov 2024 – Jun 2025",
    duration: "8 months",
    location: "KPHB, Hyderabad",
    color: "border-l-emerald-500",
    dotColor: "bg-emerald-500",
    description: [
      "Worked on real-time cloud infrastructure projects using AWS and Azure — Terraform automation, VM provisioning, CI/CD pipeline setup.",
      "Delivered hands-on cloud lab training to students covering Docker, Azure DevOps, and Kubernetes.",
      "Created custom learning materials including PDF notes, tool usage guides, and step-by-step lab tutorials.",
      "Collaborated with senior engineers to troubleshoot infrastructure issues using Prometheus and Grafana.",
      "Practised version control with Git and contributed to team workflows using agile methodology.",
    ],
    tags: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-primary font-mono text-sm font-medium">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Experience</h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-background border border-border border-l-4 ${exp.color} rounded-2xl p-7 hover:shadow-card-hover transition-shadow duration-200`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-semibold text-sm mt-0.5">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span className="text-xs font-mono font-medium text-foreground bg-secondary border border-border px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <span className="text-xs text-muted-foreground">{exp.duration}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-5">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className={`w-1.5 h-1.5 rounded-full ${exp.dotColor} mt-2 shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-primary bg-primary/8 border border-primary/15 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
