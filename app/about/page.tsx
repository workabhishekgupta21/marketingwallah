import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { team, whyUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MarketingWallah, a full-service 360 degree growth marketing agency led by specialists in paid media, search, sales, and automation."
};

export default function AboutPage() {
  return (
    <>
      <Section
        className="pt-32"
        eyebrow="About MarketingWallah"
        title="A full-service growth agency for businesses that need performance, not presentation."
        text="MarketingWallah specializes in Education, Study Abroad, Real Estate, and Lead Generation, with expertise across Meta Ads, Google Ads, YouTube Ads, CRM Automation, SEO, and conversion infrastructure."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {["₹15+ Crore Ad Spend", "10+ Lakh Leads", "100+ Campaigns Scaled", "50+ Clients Served"].map((item) => (
            <div key={item} data-glow-card className="glass-panel p-6 text-xl font-semibold text-white">{item}</div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Team" title="Leadership with hands-on performance accountability.">
        <div className="grid gap-5 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05}>
              <div data-glow-card className="team-card glass-panel h-full p-7">
                <h2 className="text-3xl font-semibold text-white">{member.name}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-aurora">{member.role}</p>
                <p className="mt-6 leading-8 text-graphite">{member.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Operating Principles" title="How we think about growth.">
        <div className="grid gap-4 md:grid-cols-2">
          {whyUs.map((item) => (
            <div key={item} data-glow-card className="mini-glass flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <CheckCircle2 className="mt-1 shrink-0 text-aurora" size={22} />
              <p className="leading-7 text-graphite">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
