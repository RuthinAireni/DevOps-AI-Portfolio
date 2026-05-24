import { motion } from "framer-motion";
import { Code2, Server, Workflow, Bot } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Roles & Internships", value: "3", icon: <Workflow className="w-5 h-5 text-primary" /> },
    { label: "Cloud Platforms", value: "AWS / Azure", icon: <Server className="w-5 h-5 text-primary" /> },
    { label: "AI Focus Areas", value: "LLM · RAG · n8n", icon: <Bot className="w-5 h-5 text-primary" /> },
    { label: "Automation Workflows", value: "Private Repos", icon: <Code2 className="w-5 h-5 text-primary" /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight">
            <span className="text-primary font-mono text-2xl mr-2">01.</span> About Me
          </h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am <strong className="text-foreground">Ruthin Aireni</strong>, an AI Developer and DevOps practitioner
              based in Hyderabad, India. I currently work as an{" "}
              <strong className="text-foreground">EDP Executive &amp; System Auditor</strong> at RSB Retail India
              Limited, where I handle IT operations, L1 support, and system audit processes.
            </p>
            <p>
              Alongside my professional role, I have developed strong hands-on experience in{" "}
              <strong className="text-foreground">Artificial Intelligence</strong> — particularly LLM-based chatbot
              development, Retrieval-Augmented Generation (RAG), prompt engineering, and no-code/low-code automation
              using <strong className="text-foreground">n8n</strong>. I have independently built AI-driven applications
              and automation workflows hosted in private repositories.
            </p>
            <p>
              At <strong className="text-foreground">VISWAM.AI</strong>, I contribute to building real-world AI
              solutions with Python and Transformer models, including work on the{" "}
              <strong className="text-foreground">Telugu LLM</strong> — India's foundational language model. My
              internship at Vcube Software Solutions gave me deep hands-on experience with cloud infrastructure on{" "}
              <strong className="text-foreground">AWS and Azure</strong>, Terraform, CI/CD pipelines, Docker, and
              Kubernetes, along with mentoring students through cloud labs.
            </p>

            {/* Key areas */}
            <div className="pt-2">
              <p className="text-sm font-mono text-primary mb-3">&gt; Key Areas of Interest</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "AI Tools & Chatbot Development",
                  "Prompt Engineering & LLM Applications",
                  "Automation Workflows (API / No-code)",
                  "IT Support & System Operations",
                  "Cloud & DevOps (Azure, Docker, K8s)",
                  "RAG Pipelines & Vector Databases",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div className="mb-4 p-3 bg-secondary rounded-md inline-block group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1 font-mono leading-tight">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}

            {/* Education card */}
            <div className="col-span-2 bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors">
              <p className="text-xs font-mono text-primary mb-2">&gt; Education</p>
              <p className="font-semibold text-foreground">B.Tech — Mechanical Engineering</p>
              <p className="text-sm text-muted-foreground">JNTUH College of Engineering, Hyderabad</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">July 2019 – January 2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
