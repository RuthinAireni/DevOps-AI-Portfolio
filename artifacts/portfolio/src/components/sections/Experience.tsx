import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "System Auditor",
      company: "RSB Retail India Limited",
      period: "2023 - Present",
      description: [
        "Conducted comprehensive IT systems auditing and health checks to ensure 99.9% uptime across operations.",
        "Implemented infrastructure monitoring solutions and maintained strict compliance standards.",
        "Authored detailed process documentation to streamline onboarding and operational workflows."
      ],
    },
    {
      role: "AI Developer Intern",
      company: "VISWAM.AI",
      period: "2023",
      description: [
        "Developed and deployed advanced AI chatbots using Large Language Models (LLMs).",
        "Built robust conversational workflows and integrated OpenAI APIs for natural language processing.",
        "Architected Retrieval-Augmented Generation (RAG) pipelines to improve AI response accuracy by 40%."
      ],
    },
    {
      role: "Cloud & DevOps Intern",
      company: "Vcube Software Solutions",
      period: "2022 - 2023",
      description: [
        "Managed cloud deployments on Azure and AWS environments.",
        "Set up robust CI/CD pipelines to automate testing and deployment processes.",
        "Implemented Docker containerization for applications and developed infrastructure automation scripts."
      ],
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

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 md:left-[-2rem] top-2 bottom-[-3rem] w-[2px] bg-border last:bottom-0">
                <div className="absolute top-0 left-[-4px] w-[10px] h-[10px] rounded-full bg-primary border-2 border-background" />
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-xl hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="text-primary font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
