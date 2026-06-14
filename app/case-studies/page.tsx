import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description: "Real results from Marketing Wallah education campaigns — student enrollments, lower CPL, higher counsellor conversion across universities, study abroad, MBBS abroad, coaching, and EdTech."
};

export default function CaseStudiesPage() {
  return (
    <Section
      className="pt-32"
      eyebrow="Results & Impact"
      title="Real campaigns. Real numbers. Real enrollments."
      text="Selected anonymized snapshots from education campaigns where smarter media, sharper funnels, and disciplined optimization moved the enrollment needle."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 0.06}>
            <article data-glow-card className="premium-card h-full p-7 sm:p-8">
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.22em] text-aurora sm:text-sm">{study.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{study.title}</h2>
                <div className="my-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-5xl font-semibold text-white sm:text-6xl">{study.metric}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-graphite">{study.label}</p>
                </div>
                <p className="text-sm leading-7 text-graphite sm:text-base sm:leading-8">{study.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
