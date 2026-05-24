import { Terminal, Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Terminal className="text-primary w-4 h-4" />
            </div>
            <span className="font-mono font-bold tracking-tight text-foreground">
              Srinu<span className="text-primary">.dev</span>
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:srinivasuludevops@gmail.com"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="tel:+918106252799"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <a
              href="https://linkedin.com/in/srinivasulu-maddula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/srinivasulumaddula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono text-center md:text-right">
            Built by Srinivasulu Maddula &mdash; &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Recruiter note */}
        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Available for{" "}
            <span className="text-primary">DevOps · Cloud Engineering · AI Development</span>
            {" "}roles &mdash; Full-time, Contract, or Remote
          </p>
        </div>
      </div>
    </footer>
  );
}
