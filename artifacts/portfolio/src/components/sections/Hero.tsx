import { motion } from "framer-motion";
import { ArrowRight, Terminal, Download, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      {/* Second accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">

          {/* Open to Work badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Open to Work — Available for Full-Time Roles
          </motion.div>

          {/* Greeting line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center gap-2 mb-4"
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-primary font-medium text-sm">Hello, recruiter. I am</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
          >
            Srinivasulu Maddula.
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-muted-foreground mb-6"
          >
            I engineer cloud infrastructure <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              &amp; build intelligent AI systems.
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-4 leading-relaxed"
          >
            DevOps Engineer &amp; AI Developer with hands-on experience across{" "}
            <span className="text-primary font-medium">AWS, Azure, Kubernetes, Terraform</span>,{" "}
            <span className="text-primary font-medium">CI/CD pipelines</span>, and{" "}
            <span className="text-primary font-medium">LLM-powered applications</span>.
            I automate the un-automatable and deploy with confidence.
          </motion.p>

          {/* Location + role type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              India — Open to Remote &amp; Relocation
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-primary" />
              Full-Time · Contract · Internship
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="h-12 px-7 text-sm font-semibold rounded-md gap-2">
              <a href="#projects">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-7 text-sm font-semibold rounded-md gap-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#contact" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 px-7 text-sm font-semibold rounded-md text-muted-foreground hover:text-primary"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </motion.div>

          {/* Quick stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {[
              { label: "2+ yrs Experience" },
              { label: "AWS · Azure · GCP" },
              { label: "Docker · Kubernetes" },
              { label: "LLMs · RAG · n8n" },
              { label: "Terraform · CI/CD" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="text-xs font-mono px-3 py-1.5 rounded-full border border-border bg-card/60 text-muted-foreground"
              >
                {pill.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative side text */}
      <div className="absolute right-8 bottom-32 hidden lg:flex flex-col items-center gap-4 text-muted-foreground/40">
        <div className="w-[1px] h-24 bg-border" />
        <span className="writing-vertical-rl font-mono text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>
          SCROLL TO EXPLORE
        </span>
      </div>
    </section>
  );
}
