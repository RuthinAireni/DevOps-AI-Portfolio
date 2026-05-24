import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      {/* Top-right soft blue glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      {/* Bottom-left soft glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Content ── */}
          <div className="order-2 lg:order-1">

            {/* Open to Work badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Full-Time Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.05] mb-4"
            >
              Ruthin<br />
              <span className="gradient-text">Aireni.</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-xl md:text-2xl font-semibold text-muted-foreground mb-5"
            >
              AI Developer &amp; DevOps Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-6"
            >
              I build intelligent AI systems and automate cloud infrastructure.
              Hands-on with <strong className="text-foreground font-semibold">LLMs, RAG pipelines, n8n automation</strong>, and{" "}
              <strong className="text-foreground font-semibold">Azure / AWS / Kubernetes</strong> — bridging
              traditional IT operations with modern AI engineering.
            </motion.p>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Hyderabad, Telangana
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-primary" />
                Full-Time · Remote · Contract
              </span>
              <a
                href="mailto:ruthinaireni5@gmail.com"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                ruthinaireni5@gmail.com
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button asChild size="lg" className="h-12 px-7 rounded-full font-semibold gap-2 shadow-md">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-7 rounded-full font-semibold gap-2 border-border hover:border-primary hover:text-primary"
              >
                <a href="#contact">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Skill pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {["AI / LLMs", "RAG Pipelines", "n8n Automation", "Azure · AWS", "Docker · K8s", "Terraform", "Python"].map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground"
                >
                  {pill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative dot pattern behind */}
              <div className="absolute -inset-8 bg-dot-pattern rounded-3xl opacity-60" />

              {/* Decorative card shapes */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl bg-primary/8 border border-primary/15 -rotate-3" />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-blue-100 border border-blue-200 rotate-2" />

              {/* Photo */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-[340px] lg:h-[420px]">
                <img
                  src="/profile.png"
                  alt="Ruthin Aireni — AI Developer & DevOps Engineer"
                  className="w-full h-full object-cover object-top rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-4 ring-white"
                />
              </div>

              {/* Floating badge — status */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-5 -left-6 bg-white rounded-xl shadow-card border border-border px-4 py-3"
              >
                <p className="text-xs text-muted-foreground font-mono mb-0.5">Status</p>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <p className="text-sm font-bold text-emerald-700">Open to Work</p>
                </div>
              </motion.div>

              {/* Floating badge — location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-5 -right-6 bg-white rounded-xl shadow-card border border-border px-4 py-3"
              >
                <p className="text-xs text-muted-foreground font-mono mb-0.5">Role</p>
                <p className="text-sm font-bold text-foreground">AI + DevOps</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
