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

const categories = [
  {
    title: "Cloud & Infrastructure",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600 bg-blue-100",
    skills: [
      { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
      { name: "Azure", icon: <Server className="w-4 h-4" /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Helm", icon: <SiHelm /> },
    ],
  },
  {
    title: "DevOps & CI/CD",
    color: "bg-violet-50 border-violet-100",
    iconColor: "text-violet-600 bg-violet-100",
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
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600 bg-emerald-100",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "OpenAI API", icon: <SiOpenai /> },
      { name: "LangChain", icon: <BrainCircuit className="w-4 h-4" /> },
      { name: "LLMs / RAG", icon: <Cpu className="w-4 h-4" /> },
      { name: "n8n Automation", icon: <Workflow className="w-4 h-4" /> },
      { name: "Prompt Eng.", icon: <SiOpenai /> },
    ],
  },
  {
    title: "Monitoring & Observability",
    color: "bg-orange-50 border-orange-100",
    iconColor: "text-orange-600 bg-orange-100",
    skills: [
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Linux SysAdmin", icon: <SiLinux /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-primary font-mono text-sm font-medium">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Tech Stack</h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`border rounded-2xl p-7 ${category.color} hover:shadow-card transition-shadow duration-200`}
            >
              <h3 className="text-base font-bold text-foreground mb-5">{category.title}</h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 bg-white border border-border rounded-lg shadow-sm hover:border-primary/40 hover:shadow-card-hover transition-all duration-150 text-sm font-medium text-foreground"
                  >
                    <span className="text-base leading-none text-muted-foreground">{skill.icon}</span>
                    {skill.name}
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
