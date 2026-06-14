"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-obsidian"
    >
      <div className="relative grid place-items-center">
        <div className="absolute size-32 animate-orbit rounded-full border border-plasma/20 border-t-plasma" />
        <div className="absolute size-48 animate-orbit rounded-full border border-aurora/10 border-b-aurora/70 [animation-duration:14s]" />
        <div className="text-center">
          <p className="text-lg font-semibold text-white">MarketingWallah</p>
          <p className="mt-2 text-xs uppercase tracking-[0.32em] text-graphite">Initializing growth systems</p>
        </div>
      </div>
    </motion.div>
  );
}
