import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-border py-3 shadow-lg"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center border border-primary/30 group-hover:border-primary transition-colors">
            <Terminal className="text-primary w-4 h-4" />
          </div>
          <span className="font-mono font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors">
            Srinu<span className="text-primary">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  <span className="text-primary/50 mr-1">#</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="sm"
            className="gap-2 font-mono border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border"
            variant="outline"
          >
            <a href="#contact">
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono border-b border-border/50"
                >
                  <span className="text-primary/50 mr-2">&gt;</span>
                  {link.name}
                </a>
              ))}
              <Button asChild className="w-full mt-3 gap-2 font-mono">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
