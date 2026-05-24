import { Terminal, Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Terminal className="text-primary w-4 h-4" />
            </div>
            <span className="font-mono font-bold tracking-tight text-foreground">
              Ruthin<span className="text-primary">.dev</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="mailto:ruthinaireni5@gmail.com"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="tel:9640748902"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <a
              href="https://linkedin.com/in/ruthinaireni5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ruthinaireni5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          <p className="text-xs text-muted-foreground font-mono text-center md:text-right">
            Built by Ruthin Aireni &mdash; &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Open to{" "}
            <span className="text-primary">AI Development · DevOps · Cloud Engineering · Automation</span>
            {" "}roles — Full-time, Contract, or Remote
          </p>
        </div>
      </div>
    </footer>
  );
}
