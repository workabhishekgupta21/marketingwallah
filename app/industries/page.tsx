import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { brandExperience, industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Marketing Wallah serves colleges, universities, study abroad consultants, MBBS abroad consultants, coaching institutes, EdTech companies, and online degree programs."
};

export default function IndustriesPage() {
  return (
    <>
      <Section
        className="pt-32"
        eyebrow="Industries We Serve"
        title="Education-only. Across every category that drives admissions."
        text="Each education vertical has different sales cycles, parent-student dynamics, intake calendars, and decision triggers. We design campaigns around those realities."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.05}>
                <div data-glow-card className="glass-panel h-full p-6 sm:p-7">
                  <Icon className="text-aurora" size={28} />
                  <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">{industry.title}</h2>
                  <p className="mt-4 leading-7 text-graphite sm:leading-8">{industry.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Brand Experience" title="Trusted across India&apos;s most competitive education funnels.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brandExperience.map((brand) => (
            <div key={brand} data-glow-card className="brand-chip rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center text-white transition hover:border-plasma/40 hover:bg-plasma/10">
              {brand}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
