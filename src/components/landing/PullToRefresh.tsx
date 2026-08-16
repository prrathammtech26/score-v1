"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface PullToRefreshProps {
  children: React.ReactNode;
}

export function PullToRefresh({ children }: PullToRefreshProps) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [refreshing, setRefreshing] = useState(false);
  const pullY = useMotionValue(0);
  const rotate = useTransform(pullY, [0, 80], [0, 180]);
  const opacity = useTransform(pullY, [0, 40, 80], [0, 0.5, 1]);
  const startY = useRef(0);
  const isDragging = useRef(false);

  const THRESHOLD = 80;

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setRefreshing(false);
    animate(pullY, 0, { type: "spring", stiffness: 300, damping: 30 });
  }, [pullY]);

  const onTouchStart = (e: React.TouchEvent) => {
    if (reducedMotion || window.scrollY > 0 || refreshing) return;
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || reducedMotion || refreshing) return;
    const delta = e.touches[0].clientY - startY.current;
    if (delta > 0) {
      const resisted = Math.min(delta * 0.4, 120);
      pullY.set(resisted);
    }
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (pullY.get() >= THRESHOLD) {
      handleRefresh();
    } else {
      animate(pullY, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  };

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <div
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative min-h-screen"
    >
      {/* Pull indicator - mobile only */}
      <motion.div
        className="pointer-events-none fixed left-1/2 top-16 z-30 flex -translate-x-1/2 items-center justify-center md:hidden"
        style={{ y: pullY, opacity }}
      >
        <motion.div
          style={{ rotate }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-black/80 backdrop-blur-sm"
        >
          <RefreshCw
            className={`h-4 w-4 text-orange-400 ${refreshing ? "animate-spin" : ""}`}
          />
        </motion.div>
      </motion.div>
      {children}
    </div>
  );
}
