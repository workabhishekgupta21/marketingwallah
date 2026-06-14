"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";

export function ProcessSteps() {
  return (
    <div className="relative">
      <div className="mb-14 max-w-3xl">
        <p className="eyebrow">Our Process</p>
        <h2 className="section-title">6 easy steps to get started.</h2>
        <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
          Our six-step method blends strategy and creativity while keeping you in the loop — from first discovery call to scaled student enrollments.
        </p>
      </div>

      <div className="timeline">
        <div className="timeline-spine" aria-hidden="true" />

        <div className="space-y-8 md:space-y-2">
          {process.map((step, index) => {
            const Icon = step.icon;
            const side = index % 2 === 0 ? "is-right" : "is-left";
            return (
              <div key={step.step} className={`timeline-row ${side}`}>
                {/* Node */}
                <span className="timeline-node">{index + 1}</span>
                <span className="timeline-connector" aria-hidden="true" />

                {/* Card */}
                <motion.div
                  className="timeline-card"
                  initial={{ opacity: 0, y: 28, x: index % 2 === 0 ? 24 : -24 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div data-glow-card className="step-card group relative overflow-hidden p-6 sm:p-7">
                    <span className="step-number pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-plasma/[0.07]">
                      {step.step}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-3">
                        <div className="grid size-12 place-items-center rounded-2xl border border-plasma/20 bg-plasma/10 text-plasma transition-transform duration-300 group-hover:scale-110">
                          <Icon size={22} />
                        </div>
                        <span className="rounded-full border border-aurora/20 bg-aurora/10 px-3 py-1 text-xs font-medium text-aurora">
                          {step.timeline}
                        </span>
                      </div>

                      <h3 className="mt-6 flex items-baseline gap-2 text-xl font-semibold text-white sm:text-2xl">
                        <span className="text-aurora/90">{step.step}.</span>
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-graphite sm:text-base">{step.text}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
