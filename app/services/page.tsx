import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Services",
  description: "Full 360° marketing services for education brands — Meta Ads, Google Ads, YouTube Ads, SEO, websites, AI automation, video production, branding, and lead generation."
};

export default function ServicesPage() {
  return (
    <>
      <Section
        className="pt-32"
        eyebrow="Our Services"
        title="A complete 360° growth system for education brands."
        text="Performance media, creatives, websites, automation, and reporting — all built and run by one accountable in-house team. You don&apos;t need five vendors. You need one team that understands education."
      >
        <ServiceCards />
      </Section>

      <Section id="process">
        <ProcessSteps />
      </Section>

      <Section eyebrow="Engagement Model" title="Built for education brands that want scale and accountability.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div data-glow-card className="glass-panel h-full p-7 sm:p-9">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">From first audit to scaled enrollments</h2>
              <p className="mt-5 leading-8 text-graphite">
                We audit your current funnel, define channel roles, build conversion assets, implement tracking, connect CRM automation, and optimize weekly. Engagements are designed for 6+ months because education funnels compound over intake cycles.
              </p>
              <Link
                href="/contact"
                data-magnetic
                data-magnetic-strength="0.18"
                className="magnetic-button mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-obsidian transition hover:bg-plasma"
              >
                Start with a free audit <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <LeadForm compact />
        </div>
      </Section>
    </>
  );
}
