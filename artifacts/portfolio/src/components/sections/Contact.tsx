import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Download, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">06. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available for full-time roles in <strong className="text-foreground">AI Development</strong>,{" "}
            <strong className="text-foreground">DevOps</strong>, and{" "}
            <strong className="text-foreground">Cloud Engineering</strong>. If you have an opportunity or just want
            to connect, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-8 space-y-5">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>

              <a
                href="tel:9640748902"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                data-testid="link-phone"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground/60 mb-0.5">Phone</p>
                  <p className="font-medium text-foreground">9640748902</p>
                </div>
              </a>

              <a
                href="mailto:ruthinaireni5@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                data-testid="link-email"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground/60 mb-0.5">Email</p>
                  <p className="font-medium text-foreground">ruthinaireni5@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ruthinaireni5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                data-testid="link-linkedin"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground/60 mb-0.5">LinkedIn</p>
                  <p className="font-medium text-foreground">linkedin.com/in/ruthinaireni5</p>
                </div>
              </a>

              <a
                href="https://github.com/ruthinaireni5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                data-testid="link-github"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground/60 mb-0.5">GitHub</p>
                  <p className="font-medium text-foreground">github.com/ruthinaireni5</p>
                </div>
              </a>

              <div className="pt-4 border-t border-border">
                <Button asChild size="lg" className="w-full gap-2 text-base">
                  <a href="#" download="Ruthin_Aireni_Resume.pdf" data-testid="button-download-resume">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
              <p className="text-emerald-400 font-mono text-sm font-medium">
                Open to Work — Hyderabad &amp; Remote
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                DevOps · AI Development · Cloud Engineering · Automation
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background"
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background"
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">Company (optional)</label>
                <Input
                  id="company"
                  placeholder="Company name"
                  className="bg-background"
                  data-testid="input-company"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  id="message"
                  placeholder="Hi Ruthin, I'd like to discuss a role..."
                  className="min-h-[120px] bg-background"
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" className="w-full gap-2" data-testid="button-send">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
