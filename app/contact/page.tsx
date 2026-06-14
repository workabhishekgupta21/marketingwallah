import type { Metadata } from "next";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Marketing Wallah. Book a free 30-minute growth audit for your university, study abroad consultancy, MBBS abroad business, coaching institute, or EdTech brand."
};

export default function ContactPage() {
  return (
    <Section
      className="pt-32"
      eyebrow="Contact"
      title="Let&apos;s scale your admissions."
      text="Share your current campaigns, intake targets, and conversion bottlenecks. We&apos;ll map the exact path from ad spend to enrolled students."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div data-glow-card className="glass-panel h-full p-7 sm:p-9">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Book a free 30-minute growth audit</h2>
            <p className="mt-5 leading-8 text-graphite">
              For colleges, universities, study abroad consultants, MBBS abroad consultants, coaching institutes, EdTech companies, and online degree programs ready to scale enrollments.
            </p>

            <ul className="mt-7 grid gap-4 text-sm text-white">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aurora" />Personalized 30-minute strategy call</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aurora" />Audit of current campaigns and CPL</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aurora" />Custom channel mix & budget roadmap</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aurora" />No commitment, no pressure, no spam</li>
            </ul>

            <div className="mt-8 grid gap-3 border-t border-white/10 pt-7 text-sm">
              <a href="https://wa.me/919919111115" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white transition hover:text-aurora">
                <MessageCircle size={18} className="text-aurora" /> WhatsApp: +91 99191 11115
              </a>
              <a href="tel:+919919111115" className="flex items-center gap-3 text-white transition hover:text-aurora">
                <Phone size={18} className="text-aurora" /> Call: +91 99191 11115
              </a>
              <a href="mailto:hello@marketingwallah.com" className="flex items-center gap-3 text-white transition hover:text-aurora">
                <Mail size={18} className="text-aurora" /> hello@marketingwallah.com
              </a>
            </div>
          </div>
        </Reveal>
        <LeadForm compact />
      </div>
    </Section>
  );
}
