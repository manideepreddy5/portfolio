import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="
              relative rounded-full w-11 h-11 
              border-2 border-primary/30 bg-background/80 backdrop-blur-md
              hover:border-primary hover:bg-primary/10 hover:scale-110
              hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]
              transition-all duration-500 group overflow-hidden
            "
            aria-label="Toggle theme"
          >
            {/* Pulsing Attraction Effect */}
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20 group-hover:hidden" />

            {/* Sun Icon (Now in Primary Blue) */}
            <Sun className="h-[1.4rem] w-[1.4rem] text-primary transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 group-hover:rotate-45" />
            
            {/* Moon Icon (Primary Blue) */}
            <Moon className="absolute h-[1.4rem] w-[1.4rem] text-primary transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100 group-hover:-rotate-12" />
            
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
          className="bg-primary text-white font-semibold animate-in fade-in zoom-in duration-200"
        >
          <p>{theme === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};