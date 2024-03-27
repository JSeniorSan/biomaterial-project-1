"use client";

import { useTheme } from "next-themes";
import { Button } from "@/shared/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button variant="ghost" className="hover:bg-transparent">
      <MoonIcon
        className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[var(--text-header)]"
        size={40}
        onClick={() => setTheme("dark")}
      />
      <SunIcon
        className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[var(--text-header)]"
        size={40}
        onClick={() => setTheme("light")}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
