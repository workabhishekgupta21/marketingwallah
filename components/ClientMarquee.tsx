"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Globe } from "lucide-react";
import { collegeClients, studyAbroadClients } from "@/lib/data";

type Client = { name: string; domain: string };

type Row = {
  label: string;
  icon: typeof Building2;
  items: Client[];
  direction: "left" | "right";
  accent: "plasma" | "aurora";
};

const rows: Row[] = [
  {
    label: "Colleges & Universities",
    icon: Building2,
    items: collegeClients,
    direction: "left",
    accent: "plasma",
  },
  {
    label: "Study Abroad Consultancies",
    icon: Globe,
    items: studyAbroadClients,
    direction: "right",
    accent: "aurora",
  },
];

function LogoChip({ client, accent }: { client: Client; accent: "plasma" | "aurora" }) {
  const [failed, setFailed] = useState(false);
  const initials = client.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  const accentBg = accent === "plasma" ? "from-plasma/25 to-plasma/5" : "from-aurora/25 to-aurora/5";
  const accentRing = accent === "plasma" ? "ring-plasma/20" : "ring-aurora/20";
  const accentText = accent === "plasma" ? "text-plasma" : "text-aurora";

  return (
    <div className="logo-chip group/chip relative mx-2 flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]">
      {!failed ? (
        <span className="grid size-9 place-items-center overflow-hidden rounded-xl bg-white p-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`}
            alt={`${client.name} logo`}
            width={28}
            height={28}
            loading="lazy"
            className="size-7 object-contain"
            onError={() => setFailed(true)}
          />
        </span>
      ) : (
        <span
          className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br ${accentBg} ring-1 ${accentRing} text-xs font-bold ${accentText}`}
        >
          {initials}
        </span>
      )}
      <span className="whitespace-nowrap text-sm font-medium text-white/90 group-hover/chip:text-white">
        {client.name}
      </span>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <div className="relative">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">Trusted By</p>
        <h2 className="section-title">India&apos;s leading universities and study abroad brands.</h2>
        <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
          From premium universities to top study abroad consultancies — education leaders trust Marketing Wallah to scale their enrollments.
        </p>
      </div>

      <div className="space-y-6">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-3 flex items-center gap-2 px-1">
                <Icon size={14} className={row.accent === "plasma" ? "text-plasma" : "text-aurora"} />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-graphite">
                  {row.label}
                </span>
              </div>

              <div className="marquee-wrap">
                <div className={`marquee-track ${row.direction === "right" ? "marquee-reverse" : ""}`}>
                  {[...row.items, ...row.items].map((client, i) => (
                    <LogoChip key={`${client.name}-${i}`} client={client} accent={row.accent} />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
