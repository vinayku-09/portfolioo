"use client";

import { motion } from "framer-motion";

export function HolographicSphere() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
      
      {/* Main sphere */}
      <motion.div
        animate={{ 
          rotateY: 360,
          rotateX: [0, 10, 0, -10, 0],
        }}
        transition={{ 
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Grid sphere effect */}
        <div className="absolute inset-4 rounded-full border-2 border-primary/30 shadow-[0_0_30px_rgba(0,243,255,0.3),inset_0_0_30px_rgba(0,243,255,0.1)]">
          {/* Horizontal rings */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 border-t border-primary/20"
              style={{ 
                top: `${(i + 1) * 12.5}%`,
                transform: `scaleX(${Math.sin((i + 1) * Math.PI / 9)})`,
              }}
            />
          ))}
          
          {/* Vertical rings */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-full border-l border-primary/20"
              style={{ 
                left: '50%',
                transform: `rotateY(${i * 30}deg) translateX(-50%)`,
                transformOrigin: 'center',
              }}
            />
          ))}
        </div>
        
        {/* Inner glow */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        {/* Core */}
        <div className="absolute inset-[35%] rounded-full bg-primary/20 blur-md animate-pulse" />
      </motion.div>

      {/* Orbiting particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 10 + i * 2, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 0.5,
          }}
          className="absolute inset-0"
          style={{ transformOrigin: "center" }}
        >
          <div 
            className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]"
            style={{ 
              top: `${10 + i * 10}%`,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
