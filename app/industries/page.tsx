import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { brandExperience, industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description: "MarketingWallah specializes in EdTech, Study Abroad, Real Estate, Higher Education, Online Universities, Healthcare, and lead generation businesses."
};

export default function IndustriesPage() {
  return (
    <>
      <Section
        className="pt-32"
        eyebrow="Industries"
        title="Category-specific performance systems for education, property, healthcare, and lead generation."
        text="Each industry has different sales cycles, trust barriers, buying triggers, and CRM realities. We design campaigns around those realities."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.05}>
                <div data-glow-card className="glass-panel h-full p-7">
                  <Icon className="text-aurora" size={30} />
                  <h2 className="mt-6 text-3xl font-semibold text-white">{industry.title}</h2>
                  <p className="mt-4 leading-8 text-graphite">{industry.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Section eyebrow="Experience" title="Education and university campaign exposure across major Indian brands.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brandExperience.map((brand) => (
            <div key={brand} data-glow-card className="brand-chip rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white">
              {brand}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
