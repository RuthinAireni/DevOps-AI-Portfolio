import { motion } from "framer-motion";
import { Cloud, Server, Cpu, Workflow, BrainCircuit } from "lucide-react";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiLinux,
  SiPython,
  SiOpenai,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
  SiGit,
  SiHelm,
  SiPostgresql,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", icon: <Cloud className="w-[1.1em] h-[1.1em]" /> },
        { name: "Azure", icon: <Server className="w-[1.1em] h-[1.1em]" /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Helm", icon: <SiHelm /> },
      ],
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Ansible", icon: <SiAnsible /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "OpenAI API", icon: <SiOpenai /> },
        { name: "LangChain", icon: <BrainCircuit className="w-[1.1em] h-[1.1em]" /> },
        { name: "LLMs / RAG", icon: <Cpu className="w-[1.1em] h-[1.1em]" /> },
        { name: "n8n Automation", icon: <Workflow className="w-[1.1em] h-[1.1em]" /> },
        { name: "Prompt Eng.", icon: <SiOpenai /> },
      ],
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", icon: <SiPrometheus /> },
        { name: "Grafana", icon: <SiGrafana /> },
        { name: "Ansible", icon: <SiAnsible /> },
        { name: "Linux SysAdmin", icon: <SiLinux /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight">
            <span className="text-primary font-mono text-2xl mr-2">02.</span> Tech Stack
          </h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                <span className="text-primary mr-2 font-mono text-sm">&gt;</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-md hover:border-primary hover:text-primary transition-all duration-300 cursor-default text-base"
                  >
                    <span className="leading-none">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
