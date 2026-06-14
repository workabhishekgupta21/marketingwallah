import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { FounderPhoto } from "@/components/FounderPhoto";
import { founder, stats, whyMarketingWallah } from "@/lib/data";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us",
  description: "Marketing Wallah is a 360° marketing agency built exclusively for the education industry. Founded by Abhishek Gupta, we help universities, study abroad, MBBS abroad, coaching, and EdTech brands scale enrollments."
};

export default function AboutPage() {
  return (
    <>
      <Section
        className="pt-32"
        eyebrow="About Marketing Wallah"
        title="A 360° marketing agency built only for education brands."
        text="We don&apos;t serve five industries badly. We serve one industry exceptionally — education. Every campaign we run, every funnel we build, every creative we ship is shaped by what actually drives student enrollments."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <AnimatedCounter key={item.label} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Founder" title="Led by an education growth specialist.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div data-glow-card className="glass-panel h-full p-7 sm:p-9">
              <FounderPhoto
                src="/founder.jpg"
                alt={`${founder.name}, ${founder.role} of ${founder.company}`}
                initials="AG"
              />
              <h2 className="mt-7 text-3xl font-semibold text-white sm:text-4xl">{founder.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-aurora">
                {founder.role} · {founder.company}
              </p>
              <p className="mt-6 leading-8 text-graphite">{founder.bio}</p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-obsidian transition hover:bg-plasma"
              >
                Talk to Abhishek <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div data-glow-card className="glass-panel h-full p-7 sm:p-9">
              <p className="text-sm uppercase tracking-[0.24em] text-aurora">Founder&apos;s Note</p>
              <p className="mt-5 text-xl font-medium leading-9 text-white sm:text-2xl">
                &ldquo;Education marketing isn&apos;t a side category for us — it&apos;s the only thing we do. That focus is why our clients see better leads, lower costs, and higher admissions.&rdquo;
              </p>
              <p className="mt-7 leading-8 text-graphite">
                Marketing Wallah was built to solve a specific problem: education brands were being treated like e-commerce businesses by generic agencies that didn&apos;t understand admission funnels, parent psychology, or intake-based campaigning. We fixed that.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Why Marketing Wallah" title="The principles that shape every engagement.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyMarketingWallah.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} data-glow-card className="mini-glass h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <div className="flex items-center gap-3">
                  <Icon className="text-aurora" size={22} />
                  <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Our Promise" title="What every education brand should expect from us.">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Senior-level strategy on every account — no juniors filtering decisions.",
            "Weekly performance reports tied to leads, applications, and enrollments.",
            "Premium in-house creative team — videos, graphics, landing pages.",
            "Transparent budgets, no hidden margins, no campaign black boxes.",
            "AI + WhatsApp automation built into every lead system.",
            "Exclusive focus on education — never split attention with unrelated industries."
          ].map((line) => (
            <div key={line} data-glow-card className="mini-glass flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
              <CheckCircle2 className="mt-1 shrink-0 text-aurora" size={22} />
              <p className="leading-7 text-graphite">{line}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
