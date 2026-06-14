import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore MarketingWallah services across Meta Ads, Google Ads, YouTube Ads, SEO, CRM Automation, Landing Pages, Lead Generation, and Marketing Automation."
};

export default function ServicesPage() {
  return (
    <>
      <Section
        className="pt-32"
        eyebrow="Services"
        title="Performance marketing services engineered as one connected growth machine."
        text="MarketingWallah combines acquisition, conversion, automation, and sales feedback so every rupee spent has a clearer path to revenue."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <div data-glow-card className="premium-card h-full p-7">
                  <div className="relative z-10">
                    <Icon className="text-plasma" size={30} />
                    <h2 className="mt-6 text-3xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-4 leading-8 text-graphite">{service.text}</p>
                    <div className="mt-7 flex items-center gap-3 text-sm font-medium text-white">
                      <CheckCircle2 size={18} className="text-aurora" />
                      Strategy, execution, optimization, and reporting
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Section eyebrow="Engagement Model" title="Built for companies that need scale and accountability.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div data-glow-card className="glass-panel p-8">
              <h2 className="text-3xl font-semibold text-white">From media buying to revenue operations</h2>
              <p className="mt-5 leading-8 text-graphite">
                We audit your funnel, define channel roles, build conversion assets, implement tracking, connect CRM automation, and optimize with a weekly growth cadence.
              </p>
              <Link href="/contact" data-magnetic data-magnetic-strength="0.18" className="magnetic-button mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-obsidian transition hover:bg-plasma">
                Start with a growth audit <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <LeadForm compact />
        </div>
      </Section>
    </>
  );
}
