"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ value, prefix = "", suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [isCounting, setIsCounting] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const n = Math.round(latest);
    const formatted = n >= 1000 ? n.toLocaleString("en-IN") : String(n);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    setIsCounting(true);
    const controls = animate(count, value, { duration: 2.65, ease: [0.12, 0.82, 0.24, 1] });
    controls.then(() => setIsCounting(false));
    return controls.stop;
  }, [count, inView, value]);

  return (
    <motion.div
      ref={ref}
      data-glow-card
      className={`counter-card glass-panel group p-6 ${isCounting ? "is-counting" : ""}`}
      whileHover={{ y: -7, scale: 1.015 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <motion.p
        className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        animate={isCounting ? { textShadow: ["0 0 0 rgba(88,246,255,0)", "0 0 34px rgba(88,246,255,0.68)", "0 0 18px rgba(182,255,104,0.34)"] } : { textShadow: "0 0 0 rgba(88,246,255,0)" }}
        transition={{ duration: 1.15, repeat: isCounting ? Infinity : 0, repeatType: "mirror" }}
      >
        {rounded}
      </motion.p>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-graphite">{label}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-plasma/70 via-white/20 to-transparent" />
    </motion.div>
  );
}
