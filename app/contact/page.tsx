import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MarketingWallah to book a growth audit for performance marketing, lead generation, CRM automation, SEO, and landing page development."
};

export default function ContactPage() {
  return (
    <Section
      className="pt-32"
      eyebrow="Contact"
      title="Let&apos;s design your next performance growth system."
      text="Share your current targets, channels, and bottlenecks. MarketingWallah will help map the path from traffic to qualified pipeline."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
        <Reveal>
          <div data-glow-card className="glass-panel p-8">
            <h2 className="text-3xl font-semibold text-white">Book a growth audit</h2>
            <p className="mt-5 leading-8 text-graphite">
              Ideal for universities, study abroad companies, real estate brands, EdTech companies, healthcare businesses, and lead generation teams ready to scale.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-graphite">
              <p>Response focus: performance media, funnel diagnostics, landing page opportunities, CRM automation, and reporting clarity.</p>
              <p>Core platforms: Meta Ads, Google Ads, YouTube Ads, SEO, and marketing automation.</p>
            </div>
          </div>
        </Reveal>
        <LeadForm compact />
      </div>
    </Section>
  );
}
