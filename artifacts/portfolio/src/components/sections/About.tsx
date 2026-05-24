import { motion } from "framer-motion";
import { Code2, Server, Workflow, Bot, GraduationCap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Roles & Internships", value: "3", icon: <Workflow className="w-5 h-5 text-primary" /> },
    { label: "Cloud Platforms", value: "AWS + Azure", icon: <Server className="w-5 h-5 text-primary" /> },
    { label: "AI Focus", value: "LLM · RAG · n8n", icon: <Bot className="w-5 h-5 text-primary" /> },
    { label: "Private AI Projects", value: "Built & Shipped", icon: <Code2 className="w-5 h-5 text-primary" /> },
  ];

  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-primary font-mono text-sm font-medium">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">About Me</h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-[17px] text-muted-foreground leading-relaxed"
          >
            <p>
              I am <strong className="text-foreground">Ruthin Aireni</strong>, an AI Developer and DevOps practitioner
              based in Hyderabad, India. I currently work as an{" "}
              <strong className="text-foreground">EDP Executive &amp; System Auditor</strong> at RSB Retail India
              Limited, where I manage IT operations, L1 support, and system audit workflows.
            </p>
            <p>
              Alongside my professional role, I have strong hands-on experience in{" "}
              <strong className="text-foreground">Artificial Intelligence</strong> — building LLM-powered chatbots,
              Retrieval-Augmented Generation (RAG) systems, and no-code/low-code automation pipelines using{" "}
              <strong className="text-foreground">n8n</strong>. I have independently built AI-driven applications
              hosted in private repositories.
            </p>
            <p>
              At <strong className="text-foreground">VISWAM.AI</strong>, I contribute to the{" "}
              <strong className="text-foreground">Telugu LLM</strong> — India's foundational regional language model —
              working with Python, Transformer models (GPT/BERT), and RAG pipelines. My cloud internship at
              Vcube gave me deep hands-on experience across <strong className="text-foreground">AWS, Azure,
              Terraform, Docker, and Kubernetes</strong>, plus mentoring students through live labs.
            </p>

            {/* Areas */}
            <div className="pt-2">
              <p className="text-sm font-mono text-primary font-medium mb-3">— Key Areas of Expertise</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "AI Tools & Chatbot Development",
                  "Prompt Engineering & LLMs",
                  "Automation Workflows (n8n / API)",
                  "IT Support & System Operations",
                  "Cloud DevOps (Azure, Docker, K8s)",
                  "RAG Pipelines & Vector Databases",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats + Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-background border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-card-hover transition-all duration-200 group"
                >
                  <div className="mb-3 p-2.5 bg-primary/8 rounded-lg inline-block group-hover:bg-primary/15 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-foreground mb-0.5 leading-tight">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/8 rounded-lg shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">B.Tech — Mechanical Engineering</p>
                  <p className="text-sm text-muted-foreground mt-0.5">JNTUH College of Engineering, Hyderabad</p>
                  <p className="text-xs font-mono text-muted-foreground/70 mt-1">July 2019 – January 2024</p>
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "I am continuously expanding my skills in AI, cloud technologies, and DevOps practices,
                with a focus on building scalable and efficient solutions that align with modern industry needs."
              </p>
              <p className="text-xs font-mono text-primary mt-3">— Ruthin Aireni</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
