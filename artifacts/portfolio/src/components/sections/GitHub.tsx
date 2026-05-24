import { motion } from "framer-motion";
import { Github, GitCommit, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GitHub() {
  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < 52; i++) {
      const col = [];
      for (let j = 0; j < 7; j++) {
        const intensity = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
        col.push(intensity);
      }
      grid.push(col);
    }
    return grid;
  };

  const contributionGrid = generateGrid();

  const getColor = (intensity: number) => {
    switch (intensity) {
      case 1: return "bg-primary/30";
      case 2: return "bg-primary/50";
      case 3: return "bg-primary/80";
      case 4: return "bg-primary";
      default: return "bg-secondary";
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-primary opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-4">
            <span className="text-primary font-mono text-2xl mr-2">05.</span> Open Source &amp; Activity
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Ongoing commitment to building AI applications, automation workflows, and cloud infrastructure.
            Many projects are in private repositories due to the nature of the work — available to discuss on request.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-foreground" />
              <span className="font-mono font-semibold text-foreground">ruthinaireni5</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Private repos (AI &amp; automation)
              </span>
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5" />
                Active contributor
              </span>
            </div>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-1 min-w-[800px]">
              {contributionGrid.map((week, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {week.map((day, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`w-3 h-3 rounded-sm ${getColor(day)} transition-colors duration-300 hover:ring-1 hover:ring-white/30`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
            <span className="font-mono">Contribution activity (representative)</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-secondary" />
                <div className="w-3 h-3 rounded-sm bg-primary/30" />
                <div className="w-3 h-3 rounded-sm bg-primary/50" />
                <div className="w-3 h-3 rounded-sm bg-primary/80" />
                <div className="w-3 h-3 rounded-sm bg-primary" />
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild className="gap-2">
              <a
                href="https://github.com/ruthinaireni5"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github-profile"
              >
                <Github className="w-4 h-4" />
                View GitHub Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
