"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 -translate-x-[2px] text-primary/50 animate-pulse" 
        aria-hidden="true"
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 translate-x-[2px] text-secondary/50 animate-pulse" 
        style={{ animationDelay: "0.1s" }}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}
