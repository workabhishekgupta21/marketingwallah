"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export function ServiceCards({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div data-glow-card className="service-card group relative h-full overflow-hidden p-6 sm:p-7">
              {/* diagonal shine sweep on hover */}
              <span className="service-shine" aria-hidden="true" />

              {/* watermark index */}
              <span className="pointer-events-none absolute right-5 top-5 select-none text-sm font-semibold text-white/15 transition-colors duration-300 group-hover:text-plasma/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex h-full flex-col">
                <div className="service-icon">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-plasma sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-graphite">{service.text}</p>

                {/* hover reveal: learn-more row */}
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-plasma opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
                  Learn more
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
