"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
  stagger?: number;
  as?: keyof typeof motion;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = true,
  stagger,
  as = "div",
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  const offsets = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
    none: { x: 0, y: 0 },
  };

  const variants: Variants = reducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          ...offsets[direction],
          filter: blur ? "blur(8px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.65,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={
        stagger
          ? {
              staggerChildren: stagger,
            }
          : undefined
      }
    >
      {children}
    </Component>
  );
}

export function ScrollRevealText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn("inline-block overflow-hidden", className)}>
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}
