"use client";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

interface GlowButtonProps extends ButtonProps {
  glow?: boolean;
}

export function GlowButton({
  className,
  glow = true,
  children,
  ...props
}: GlowButtonProps) {
  return (
    <div className="relative group inline-flex">
      {glow && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-md bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        />
      )}
      <Button
        className={cn(
          "relative border border-orange-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}
