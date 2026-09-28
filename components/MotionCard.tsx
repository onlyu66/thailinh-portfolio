"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  hoverY?: number;
  hoverScale?: number;
  className?: string;
}

export default function MotionCard({
  children,
  delay = 0,
  direction = "up",
  hoverY = -6,
  hoverScale = 1,
  className = "",
}: MotionCardProps) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: hoverY, scale: hoverScale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
