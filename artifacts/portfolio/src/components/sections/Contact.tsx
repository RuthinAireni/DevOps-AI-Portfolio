import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Download, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-2">06. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-5">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Available for full-time roles in <strong className="text-foreground">AI Development</strong>,{" "}
            <strong className="text-foreground">DevOps</strong>, and{" "}
            <strong className="text-foreground">Cloud Engineering</strong>. Let's build something great.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="bg-white border border-border rounded-2xl p-7 shadow-card space-y-5">
              <h3 className="text-lg font-bold text-foreground">Contact Information</h3>

              {[
                { href: "tel:9640748902", icon: <Phone className="w-4 h-4" />, label: "Phone", value: "9640748902" },
                { href: "mailto:ruthinaireni5@gmail.com", icon: <Mail className="w-4 h-4" />, label: "Email", value: "ruthinaireni5@gmail.com" },
                { href: "https://linkedin.com/in/ruthinaireni5", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", value: "linkedin.com/in/ruthinaireni5", external: true },
                { href: "https://github.com/ruthinaireni5", icon: <Github className="w-4 h-4" />, label: "GitHub", value: "github.com/ruthinaireni5", external: true },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}

              <div className="pt-4 border-t border-border">
                <Button asChild size="lg" className="w-full gap-2 rounded-full font-semibold">
                  <a href="#" download="Ruthin_Aireni_Resume.pdf">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <p className="text-emerald-700 font-semibold text-sm">Open to Work — Hyderabad &amp; Remote</p>
              </div>
              <p className="text-emerald-600/80 text-xs">
                DevOps · AI Development · Cloud Engineering · Automation
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-2xl p-7 shadow-card"
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
                  <Input id="company" placeholder="Company (optional)" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  id="message"
                  placeholder="Hi Ruthin, I'd like to discuss a role..."
                  className="min-h-[130px] resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2 rounded-full font-semibold">
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
