import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "System Auditor (EDP Executive)",
      company: "RSB Retail India Limited",
      period: "Oct 2025 – Present",
      duration: "8 months",
      location: "Hyderabad",
      description: [
        "Handling day-to-day IT operations, system maintenance, and Level 1 (L1) support — troubleshooting hardware, software, and network-related issues.",
        "Conducting system and stock audits, including verification, data management, and compliance documentation.",
        "Ensuring smooth IT operations across the organisation with a focus on continuous improvement and process standardisation.",
        "Resolving network and user support issues efficiently, maintaining uptime and minimising disruption to business operations.",
      ],
      tags: ["IT Operations", "L1 Support", "System Audit", "Network Troubleshooting", "Data Management"],
    },
    {
      role: "AI Developer Intern",
      company: "VISWAM.AI",
      period: "Jul 2025 – May 2026",
      duration: "11 months",
      location: "Hyderabad, Telangana",
      description: [
        "Building real-world AI solutions using Python, DevOps practices, and Transformer models including GPT and BERT.",
        "Hands-on implementation of RAG (Retrieval-Augmented Generation) pipelines for knowledge-grounded AI applications.",
        "Contributing to the Telugu LLM — India's foundational regional language model — through collaborative model development and evaluation workflows.",
        "Following structured workflows for deploying, fine-tuning, and evaluating impactful AI systems at production scale.",
      ],
      tags: ["Python", "LLMs", "RAG", "GPT / BERT", "Telugu LLM", "AI Deployment"],
    },
    {
      role: "Cloud & DevOps Intern",
      company: "Vcube Software Solutions",
      period: "Nov 2024 – Jun 2025",
      duration: "8 months",
      location: "KPHB, Hyderabad, Telangana",
      description: [
        "Worked on real-time cloud infrastructure projects using AWS and Azure, including Terraform-based automation, VM provisioning, and CI/CD pipeline setup.",
        "Delivered in-lab training and technical support to students, guiding them through hands-on cloud labs covering Docker, Azure DevOps, and Kubernetes.",
        "Explained complex topics such as Infrastructure as Code (IaC), Azure networking, and pipeline stages in a clear, student-friendly manner.",
        "Created and distributed custom learning materials including PDF notes, tool usage guides, and step-by-step lab tutorials.",
        "Collaborated with senior engineers to troubleshoot infrastructure issues and monitor systems using Prometheus and Grafana.",
        "Practiced version control with Git and contributed to team-based workflows using agile methodology.",
      ],
      tags: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight">
            <span className="text-primary font-mono text-2xl mr-2">03.</span> Experience
          </h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-[2px] bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-14 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-[10px] md:left-[13px] top-6 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-[0_0_8px_hsl(189_100%_50%/0.6)]" />

                <div className="bg-card border border-border p-6 md:p-8 rounded-xl hover:border-primary/30 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-5 gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <div className="text-primary font-semibold mt-0.5">{exp.company}</div>
                      <div className="text-xs text-muted-foreground mt-1">{exp.location}</div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground/60">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
