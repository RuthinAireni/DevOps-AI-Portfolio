import { motion } from "framer-motion";
import { Code2, Server, Workflow, Bot } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "2+", icon: <Workflow className="w-5 h-5 text-primary" /> },
    { label: "Cloud Platforms", value: "AWS/Azure", icon: <Server className="w-5 h-5 text-primary" /> },
    { label: "AI Models Built", value: "5+", icon: <Bot className="w-5 h-5 text-primary" /> },
    { label: "Automation Workflows", value: "50+", icon: <Code2 className="w-5 h-5 text-primary" /> },
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
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a passionate <strong className="text-foreground">DevOps Engineer and AI Developer</strong> with ~2 years of experience bridging the gap between traditional IT infrastructure and modern Artificial Intelligence. 
            </p>
            <p>
              My journey started in IT operations and system auditing, where I developed a keen eye for system health, compliance, and process optimization. I soon realized that automation is the key to scaling, which led me into Cloud deployments, CI/CD pipelines, and Infrastructure as Code.
            </p>
            <p>
              Today, I specialize in <strong className="text-foreground">automating the un-automatable</strong>. Whether it's building complex n8n workflows, deploying Kubernetes clusters, or integrating advanced LLM-powered chatbots into enterprise applications, I build systems that are robust, intelligent, and highly available.
            </p>
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
                <div className="text-3xl font-bold text-foreground mb-1 font-mono">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
