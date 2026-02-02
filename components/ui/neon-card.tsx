"use client";

import React from "react"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function NeonCard({ children, className, delay = 0 }: NeonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn(
        "group relative bg-background/40 border border-foreground/10 p-6 rounded-xl backdrop-blur-md",
        "hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
