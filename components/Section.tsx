"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  text?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, text, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 54 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18% 0px -12% 0px" }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className={`section-shell relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${className}`}
    >
      {(eyebrow || title || text) && (
        <motion.div
          initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2 className="section-title">{title}</h2>}
          {text && <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">{text}</p>}
        </motion.div>
      )}
      {children}
    </motion.section>
  );
}
