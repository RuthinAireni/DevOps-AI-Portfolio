import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <span className="font-black text-xl tracking-tight text-foreground">
              Ruthin<span className="text-primary">Aireni</span>
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">AI Developer &amp; DevOps Engineer</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { href: "mailto:ruthinaireni5@gmail.com", icon: <Mail className="w-4 h-4" />, label: "Email" },
              { href: "tel:9640748902", icon: <Phone className="w-4 h-4" />, label: "Phone" },
              { href: "https://linkedin.com/in/ruthinaireni5", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", external: true },
              { href: "https://github.com/ruthinaireni5", icon: <Github className="w-4 h-4" />, label: "GitHub", external: true },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center md:text-right">
            &copy; {new Date().getFullYear()} Ruthin Aireni. All rights reserved.
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-border/60 text-center">
          <p className="text-xs text-muted-foreground">
            Open to{" "}
            <span className="text-primary font-medium">AI Development · DevOps · Cloud Engineering · Automation</span>
            {" "}— Full-time, Contract, or Remote
          </p>
        </div>
      </div>
    </footer>
  );
}
