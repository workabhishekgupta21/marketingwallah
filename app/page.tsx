import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ClientMarquee } from "@/components/ClientMarquee";
import { FounderPhoto } from "@/components/FounderPhoto";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceCards } from "@/components/ServiceCards";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SpaceAtmosphere } from "@/components/SpaceAtmosphere";
import { ThreeGlobe } from "@/components/ThreeGlobe";
import {
  caseStudies,
  clientBenefits,
  faqs,
  founder,
  industries,
  stats,
  testimonials,
  whyMarketingWallah,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-radial-grid px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <SpaceAtmosphere />
        <ThreeGlobe />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,6,9,0.08)_35%,rgba(5,6,9,0.84)_82%)]" />
        <div className="absolute left-1/2 top-24 z-[1] h-80 w-80 -translate-x-1/2 rounded-full bg-plasma/10 blur-3xl" data-parallax="-18" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-graphite backdrop-blur-xl sm:text-sm">
                <GraduationCap size={16} className="text-aurora" />
                India&apos;s #1 Marketing Agency for Education Brands
              </div>

              <h1 className="mt-7 max-w-4xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[0.96]">
                We Generate <span className="text-gradient">Student Leads</span> That Actually Enroll.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-graphite sm:text-lg sm:leading-8">
                Marketing Wallah is a 360° performance marketing agency built only for the education industry. Universities, study abroad, MBBS abroad, coaching institutes, and EdTech brands choose us because we don&apos;t deliver clicks — we deliver enrollments.
              </p>

              {/* Trust bar */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-graphite sm:text-sm">
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-aurora" />10,000+ Applications</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-aurora" />1,000+ Domestic Admissions</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-aurora" />2,000+ Study Abroad Enrollments</span>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  data-magnetic
                  data-magnetic-strength="0.18"
                  className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-obsidian transition hover:bg-plasma"
                >
                  Book Free Growth Audit <ArrowRight size={16} />
                </Link>
                <Link
                  href="/case-studies"
                  data-magnetic
                  data-magnetic-strength="0.16"
                  className="magnetic-button magnetic-button-dark inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-plasma/50 hover:bg-plasma/10"
                >
                  See Real Results
                </Link>
              </div>
            </Reveal>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* ───────────────── STATS ───────────────── */}
      <Section
        eyebrow="Proof of Scale"
        title="The numbers we&apos;ve delivered for education brands."
        text="Verified results from active education campaigns — not vanity metrics."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <AnimatedCounter key={item.label} {...item} />
          ))}
        </div>
      </Section>

      {/* ───────────────── CLIENT MARQUEE ───────────────── */}
      <Section>
        <ClientMarquee />
      </Section>

      {/* ───────────────── WHY MARKETING WALLAH ───────────────── */}
      <Section
        id="why"
        eyebrow="Why Marketing Wallah"
        title="Built only for education. Built only for enrollments."
        text="Generic agencies treat your university like an e-commerce brand. We don&apos;t. Every strategy is shaped by 100+ education campaigns and what actually moves admissions."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyMarketingWallah.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div data-glow-card className="premium-card h-full p-6 sm:p-7">
                  <div className="relative z-10">
                    <div className="grid size-12 place-items-center rounded-2xl border border-plasma/20 bg-plasma/10 text-plasma">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite sm:text-base">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ───────────────── INDUSTRIES WE SERVE ───────────────── */}
      <Section
        id="industries"
        eyebrow="Industries We Serve"
        title="Education-only. Across every category that matters."
        text="Deep specialization across the funnels, sales cycles, and parent-student dynamics that define each education vertical."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.05}>
                <div data-glow-card className="glass-panel h-full p-6 sm:p-7">
                  <Icon className="text-aurora" size={26} />
                  <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite sm:text-base">{industry.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ───────────────── OUR SERVICES ───────────────── */}
      <Section
        id="services"
        eyebrow="Our Services"
        title="A complete 360° growth system, in one team."
        text="Performance media, creatives, websites, automation, and reporting — built and run by one accountable in-house team."
      >
        <ServiceCards />
      </Section>

      {/* ───────────────── OUR PROCESS ───────────────── */}
      <Section id="process">
        <ProcessSteps />
      </Section>

      {/* ───────────────── RESULTS & IMPACT ───────────────── */}
      <Section
        id="results"
        eyebrow="Results & Impact"
        title="10,000+ applications. 1,000+ admissions. 2,000+ study abroad enrollments."
        text="We&apos;ve helped India&apos;s top universities and consultancies deliver real outcomes — not just leads, but verified admissions and enrollments."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <Reveal key={study.title} delay={index * 0.06}>
              <article
                data-glow-card
                className="results-card premium-card group/results h-full p-7 sm:p-8"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.22em] text-aurora">{study.category}</p>
                    <span className="text-xs font-semibold text-graphite/60">0{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">{study.title}</h3>

                  <div className="my-7">
                    <p className="results-metric text-5xl font-semibold tracking-tight sm:text-6xl">
                      {study.metric}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-graphite">{study.label}</p>
                  </div>

                  <p className="text-sm leading-7 text-graphite">{study.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-plasma/50 hover:bg-plasma/10"
          >
            View all case studies <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* ───────────────── CLIENT BENEFITS ───────────────── */}
      <Section
        eyebrow="Client Benefits"
        title="What you actually get when you work with us."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clientBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <div data-glow-card className="mini-glass flex h-full gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-aurora/10 text-aurora">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-graphite">{benefit.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ───────────────── TESTIMONIALS ───────────────── */}
      <Section eyebrow="Client Voices" title="What education leaders say about working with us.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.05}>
              <figure data-glow-card className="glass-panel h-full p-7">
                <div className="flex gap-1 text-aurora">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-7 text-white sm:text-lg sm:leading-8">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-graphite">{testimonial.company}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────────────── FOUNDER ───────────────── */}
      <Section eyebrow="Leadership" title="Meet the founder behind Marketing Wallah.">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div data-glow-card className="glass-panel relative flex h-full flex-col items-center overflow-hidden p-7 text-center sm:p-9">
              <FounderPhoto
                src="/founder.jpg"
                alt={`${founder.name}, ${founder.role} of ${founder.company}`}
                initials="AG"
              />
              <h3 className="mt-7 text-3xl font-semibold text-white sm:text-4xl">{founder.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-aurora">{founder.role}</p>
              <p className="mt-1 text-sm text-graphite">{founder.company}</p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-obsidian transition hover:bg-plasma"
              >
                Talk to Abhishek <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div data-glow-card className="glass-panel h-full p-7 sm:p-9">
              <p className="text-sm uppercase tracking-[0.24em] text-aurora">Founder&apos;s Note</p>
              <p className="mt-5 text-xl font-medium leading-9 text-white sm:text-2xl">
                &ldquo;Education marketing isn&apos;t about clever creatives. It&apos;s about building the trust a parent needs to invest in their child&apos;s future — and the discipline to track every rupee from ad to admission.&rdquo;
              </p>
              <p className="mt-6 leading-8 text-graphite">{founder.bio}</p>
              <p className="mt-5 leading-8 text-graphite">
                That belief shapes how we work — premium creatives, transparent reporting, senior strategy, and an obsession with enrollment outcomes, not vanity metrics.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
                <div>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">₹15Cr+</p>
                  <p className="mt-1 text-xs text-graphite">Ad spend led</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">2L+</p>
                  <p className="mt-1 text-xs text-graphite">Leads generated</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">50+</p>
                  <p className="mt-1 text-xs text-graphite">Education brands</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ───────────────── FAQ ───────────────── */}
      <Section id="faq" eyebrow="FAQs" title="Answers for education leaders evaluating us.">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.03}>
              <div data-glow-card className="glass-panel h-full p-6">
                <h3 className="text-base font-semibold text-white sm:text-lg">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────────────── CONTACT ───────────────── */}
      <Section id="contact" eyebrow="Contact" title="Ready to scale your admissions?">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div data-glow-card className="glass-panel h-full p-7 sm:p-9">
              <p className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Book a free 30-minute growth audit with our team.
              </p>
              <p className="mt-5 leading-8 text-graphite">
                Bring your current campaign metrics, intake targets, and admission bottlenecks. We&apos;ll map the exact channel mix, funnel changes, and CRM automations needed to scale your enrollments.
              </p>
              <ul className="mt-8 grid gap-4 text-sm text-white">
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aurora" />Personalized 30-minute strategy call</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aurora" />Audit of current campaigns and CPL</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aurora" />Custom channel mix & budget roadmap</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aurora" />No commitment, no pressure, no spam</li>
              </ul>
            </div>
          </Reveal>
          <LeadForm compact />
        </div>
      </Section>
    </>
  );
}
