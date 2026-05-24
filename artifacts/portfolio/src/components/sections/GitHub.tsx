import { motion } from "framer-motion";
import { Github, GitCommit, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GitHub() {
  const grid: number[][] = [];
  for (let i = 0; i < 52; i++) {
    const col: number[] = [];
    for (let j = 0; j < 7; j++) {
      col.push(Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0);
    }
    grid.push(col);
  }

  const getColor = (intensity: number) => {
    switch (intensity) {
      case 1: return "bg-primary/20";
      case 2: return "bg-primary/40";
      case 3: return "bg-primary/65";
      case 4: return "bg-primary";
      default: return "bg-border";
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-primary font-mono text-sm font-medium">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Open Source &amp; Activity</h2>
          <div className="h-[1px] flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl bg-background border border-border rounded-2xl p-7 shadow-card"
        >
          <div className="flex items-center justify-between mb-7 pb-5 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center">
                <Github className="w-5 h-5 text-background" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">ruthinaireni5</p>
                <p className="text-xs text-muted-foreground">github.com/ruthinaireni5</p>
              </div>
            </div>
            <div className="hidden sm:flex gap-5 text-xs text-muted-foreground">
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

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1 min-w-[800px]">
              {grid.map((week, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {week.map((day, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`w-3 h-3 rounded-sm ${getColor(day)} hover:ring-2 hover:ring-primary/30 transition-all`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
            <span className="font-mono">Activity (representative)</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((v) => (
                  <div key={v} className={`w-3 h-3 rounded-sm ${getColor(v)}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="mt-7 flex justify-center">
            <Button asChild variant="outline" className="gap-2 rounded-full border-border hover:border-primary hover:text-primary">
              <a href="https://github.com/ruthinaireni5" target="_blank" rel="noopener noreferrer">
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
