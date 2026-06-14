import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SpaceAtmosphere } from "@/components/SpaceAtmosphere";
import { ThreeGlobe } from "@/components/ThreeGlobe";
import { brandExperience, caseStudies, faqs, industries, services, stats, team, testimonials, whyUs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-radial-grid px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <SpaceAtmosphere />
        <ThreeGlobe />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,6,9,0.08)_35%,rgba(5,6,9,0.84)_82%)]" />
        <div className="absolute left-1/2 top-24 z-[1] h-80 w-80 -translate-x-1/2 rounded-full bg-plasma/10 blur-3xl" data-parallax="-18" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-graphite backdrop-blur-xl">
                <Sparkles size={16} className="text-aurora" />
                Built for serious enrollment, pipeline, and revenue growth
              </div>
              <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
                India&apos;s Leading <span className="text-gradient">Performance Marketing</span> & Growth Partner
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
                MarketingWallah is a full-service 360 degree growth marketing agency specializing in Education, Study Abroad, Real Estate, and high-intent lead generation.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" data-magnetic data-magnetic-strength="0.18" className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-obsidian transition hover:bg-plasma">
                  Book Growth Audit <ArrowRight size={16} />
                </Link>
                <Link href="/case-studies" data-magnetic data-magnetic-strength="0.16" className="magnetic-button magnetic-button-dark inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-plasma/50 hover:bg-plasma/10">
                  View Case Studies
                </Link>
              </div>
            </Reveal>
          </div>
          <LeadForm />
        </div>
      </section>

      <Section eyebrow="Proof of scale" title="A performance command center for brands that need measurable growth.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <AnimatedCounter key={item.label} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="Acquisition, conversion, automation, and reporting under one growth architecture."
        text="Every channel is designed to compound: paid media feeds better landing pages, CRM improves sales velocity, and reporting keeps capital allocation sharp."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <div data-glow-card className="premium-card h-full p-6">
                  <div className="relative z-10">
                    <div className="grid size-12 place-items-center rounded-2xl border border-plasma/20 bg-plasma/10 text-plasma">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite">{service.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        id="industries"
        eyebrow="Industries"
        title="Specialized growth systems for categories where lead quality decides everything."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.05}>
                <div data-glow-card className="glass-panel h-full p-6">
                  <Icon className="text-aurora" size={26} />
                  <h3 className="mt-5 text-2xl font-semibold text-white">{industry.title}</h3>
                  <p className="mt-3 leading-7 text-graphite">{industry.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="University and brand experience" title="Battle-tested across India&apos;s most competitive education funnels.">
        <div data-glow-card className="glass-panel p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {brandExperience.map((brand) => (
              <div key={brand} data-glow-card className="brand-chip rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-medium text-white transition hover:border-plasma/40 hover:bg-plasma/10">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="case-studies" eyebrow="Case Studies" title="Premium growth cards with metrics leadership teams can actually use.">
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.06}>
              <article data-glow-card className="premium-card h-full p-7">
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-aurora">{study.category}</p>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{study.title}</h3>
                  <div className="my-8">
                    <p className="text-6xl font-semibold tracking-tight text-white">{study.metric}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-graphite">{study.label}</p>
                  </div>
                  <p className="leading-7 text-graphite">{study.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Senior operators across media, search, CRM, and sales conversion.">
        <div className="grid gap-5 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05}>
              <div data-glow-card className="team-card glass-panel h-full p-7">
                <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-plasma/25 to-aurora/20 text-xl font-bold text-white">
                  {member.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-aurora">{member.role}</p>
                <p className="mt-5 leading-7 text-graphite">{member.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted thinking for brands where every lead carries business weight.">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.05}>
              <figure data-glow-card className="glass-panel h-full p-7">
                <blockquote className="text-lg leading-8 text-white">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-graphite">{testimonial.company}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why MarketingWallah" title="The difference is the operating system, not just the ad account.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div data-glow-card className="glass-panel p-8">
              <p className="text-7xl font-semibold tracking-tight text-white">360°</p>
              <p className="mt-4 text-xl font-medium text-white">Growth marketing built around revenue conversion.</p>
              <p className="mt-5 leading-8 text-graphite">
                We connect media buying, search intent, landing page experimentation, CRM automation, and sales feedback into one compounding system.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {whyUs.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div data-glow-card className="mini-glass flex gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <CheckCircle2 className="mt-1 shrink-0 text-aurora" size={22} />
                  <p className="leading-7 text-graphite">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Answers for growth teams evaluating MarketingWallah.">
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <div data-glow-card className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 leading-7 text-graphite">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Ready to engineer your next growth curve?">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div data-glow-card className="glass-panel p-8">
              <p className="text-2xl font-semibold text-white">Bring us your pipeline target, current CPL, and sales bottleneck.</p>
              <p className="mt-5 leading-8 text-graphite">
                We will map the acquisition architecture, channel mix, landing page needs, and CRM automation required to scale with discipline.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-graphite">
                <p>Performance Marketing: Meta, Google, YouTube</p>
                <p>Growth Infrastructure: Landing Pages, CRM, Automation</p>
                <p>Core Categories: Education, Study Abroad, Real Estate, Lead Generation</p>
              </div>
            </div>
          </Reveal>
          <LeadForm compact />
        </div>
      </Section>
    </>
  );
}
