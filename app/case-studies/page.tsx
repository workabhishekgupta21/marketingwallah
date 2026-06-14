import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore MarketingWallah growth case studies across education enrollment, study abroad demand, and real estate launch campaigns."
};

export default function CaseStudiesPage() {
  return (
    <Section
      className="pt-32"
      eyebrow="Case Studies"
      title="Growth stories shaped by better acquisition architecture, sharper conversion paths, and disciplined optimization."
      text="Selected anonymized examples from high-competition campaigns where media, landing pages, and CRM execution moved together."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 0.06}>
            <article data-glow-card className="premium-card h-full p-8">
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.22em] text-aurora">{study.category}</p>
                <h2 className="mt-5 text-3xl font-semibold text-white">{study.title}</h2>
                <div className="my-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-6xl font-semibold text-white">{study.metric}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-graphite">{study.label}</p>
                </div>
                <p className="leading-8 text-graphite">{study.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
