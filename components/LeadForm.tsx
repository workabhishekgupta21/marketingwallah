"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = ["Education", "Study Abroad", "Real Estate", "Healthcare", "Lead Generation", "Other"];
const spends = ["Under ₹5L", "₹5L - ₹15L", "₹15L - ₹50L", "₹50L+", "Not running ads"];
const services = ["Meta Ads", "Google Ads", "SEO", "CRM Automation", "Landing Pages", "Full Growth System"];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, delay: compact ? 0.12 : 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel form-panel relative overflow-hidden ${compact ? "p-6" : "p-5 sm:p-6"}`}
      data-glow-card
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent" />
      <div className="mb-5">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-aurora">Growth Audit</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Get your performance roadmap</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="field" name="name" placeholder="Name" aria-label="Name" />
        <input className="field" name="phone" placeholder="Phone" aria-label="Phone" />
        <input className="field sm:col-span-2" name="company" placeholder="Company Name" aria-label="Company Name" />
        <select className="field" name="industry" aria-label="Industry" defaultValue="">
          <option value="" disabled>Industry</option>
          {industries.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="field" name="adSpend" aria-label="Monthly Ad Spend" defaultValue="">
          <option value="" disabled>Monthly Ad Spend</option>
          {spends.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="field sm:col-span-2" name="service" aria-label="Services Required" defaultValue="">
          <option value="" disabled>Services Required</option>
          {services.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <button type="button" data-magnetic data-magnetic-strength="0.16" className="magnetic-button mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-obsidian transition hover:bg-plasma">
        Request Strategy Call <ArrowRight size={16} />
      </button>
      <p className="mt-3 text-center text-xs text-graphite">No spam. Just a serious growth conversation.</p>
    </motion.form>
  );
}
