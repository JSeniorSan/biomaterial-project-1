"use client";

import * as React from "react";
import Moon from "@/shared/assets/Moon.svg";
import Sun from "@/shared/assets/Sun.svg";
import { useTheme } from "next-themes";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:rotate-45 transition-all">
        <Button variant="ghost" className="hover:bg-transparent">
          <MoonIcon
            className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            size={40}
          />
          <SunIcon
            className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            size={40}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
