import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Download, Send } from "lucide-react";
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
            Available for full-time roles in DevOps, Cloud Engineering, and AI Development. 
            Whether you have a question or just want to say hi, my inbox is always open. 
            Let's build something great.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+918106252799" className="text-lg">+91-8106252799</a>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:srinivasuludevops@gmail.com" className="text-lg">srinivasuludevops@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <a href="https://linkedin.com/in/srinivasulu-maddula" target="_blank" rel="noopener noreferrer" className="text-lg">
                  linkedin.com/in/srinivasulu-maddula
                </a>
              </div>

              <div className="pt-6 border-t border-border">
                <Button asChild size="lg" className="w-full gap-2 text-base">
                  <a href="#" download="Srinivasulu_Maddula_Resume.pdf">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <Input id="name" placeholder="John Doe" className="bg-background" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Hello, I'd like to talk about a role..." 
                  className="min-h-[120px] bg-background"
                />
              </div>
              
              <Button type="submit" className="w-full gap-2">
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
