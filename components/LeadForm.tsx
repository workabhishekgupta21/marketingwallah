"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA / Canada" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
];

const industries = ["Education", "Study Abroad", "Real Estate", "Healthcare", "Lead Generation", "Other"];
const spends = ["Under ₹5L / month", "₹5L – ₹15L / month", "₹15L – ₹50L / month", "₹50L+ / month", "Not running ads yet"];
const services = ["Meta Ads", "Google Ads", "SEO", "CRM Automation", "Landing Pages", "Full Growth System"];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/[\s\-().+]/g, "");
  return /^\d{7,15}$/.test(digits);
}

type Fields = { name: string; email: string; phone: string };
type Errors = Partial<Record<keyof Fields | "form", string>>;

function validateFields(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Please enter your full name.";
  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(fields.email)) {
    errors.email = "Enter a valid email address containing @.";
  }
  if (!fields.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!isValidPhone(fields.phone)) {
    errors.phone = "Enter a valid phone number (7–15 digits).";
  }
  return errors;
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});

  const getFieldValue = (form: HTMLFormElement, name: string) =>
    (form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? "";

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, form: HTMLFormElement) => {
    const name = e.target.name as keyof Fields;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fields: Fields = {
      name: getFieldValue(form, "name"),
      email: getFieldValue(form, "email"),
      phone: getFieldValue(form, "phone"),
    };
    const fieldErrors = validateFields(fields);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof Fields;
    if (touched[name] && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fields: Fields = {
      name: getFieldValue(form, "name"),
      email: getFieldValue(form, "email"),
      phone: getFieldValue(form, "phone"),
    };

    setTouched({ name: true, email: true, phone: true });
    const fieldErrors = validateFields(fields);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    const payload = {
      name: fields.name,
      email: fields.email,
      phone: `${countryCode} ${fields.phone}`,
      company: getFieldValue(form, "company"),
      industry: getFieldValue(form, "industry"),
      adSpend: getFieldValue(form, "adSpend"),
      service: getFieldValue(form, "service"),
    };

    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxqxZef_zMu5E7Y2NaDUYuWVo33korP0CTR1sjgjtbf4KOLcD3fQofOkjQy0Angh4eNAQ/exec",
        { method: "POST", body: JSON.stringify(payload) }
      );
      setSuccess(true);
      window.open(
        "https://wa.me/919919111115?text=Hi%20MarketingWallah%2C%20I%20just%20submitted%20the%20growth%20audit%20form.",
        "_blank"
      );
    } catch {
      setErrors({ form: "Something went wrong. Please try again or WhatsApp us directly." });
    }
    setLoading(false);
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`glass-panel relative overflow-hidden flex flex-col items-center justify-center text-center ${compact ? "p-8 min-h-[320px]" : "p-10 min-h-[380px]"}`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora to-transparent" />
        <div className="grid size-16 place-items-center rounded-2xl bg-aurora/15 border border-aurora/30 mb-6">
          <CheckCircle className="text-aurora" size={28} />
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-aurora mb-2">Confirmed</p>
        <h3 className="text-2xl font-semibold text-white">You&apos;re on our radar.</h3>
        <p className="mt-3 text-graphite leading-7 max-w-xs">
          Our growth team will reach out within 24 hours with a performance audit tailored to your business.
        </p>
        <p className="mt-5 text-sm text-graphite border border-white/10 rounded-full px-4 py-2">
          📱 Check WhatsApp — we&apos;ve opened a conversation for you.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, delay: compact ? 0.12 : 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel form-panel relative overflow-hidden ${compact ? "p-6" : "p-5 sm:p-7"}`}
      data-glow-card
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent" />

      <div className="mb-5">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-aurora">Free Growth Audit</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Get your performance roadmap</h3>
        <p className="mt-1.5 text-sm text-graphite">Trusted by 50+ brands. Response within 24 hours.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <input
            className={`field${touched.name && errors.name ? " field-error" : ""}`}
            name="name"
            type="text"
            placeholder="Full Name *"
            aria-label="Full Name"
            autoComplete="name"
            onBlur={(e) => handleBlur(e, e.currentTarget.form!)}
            onChange={handleChange}
          />
          {touched.name && errors.name && (
            <p className="form-error" role="alert">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            className={`field${touched.email && errors.email ? " field-error" : ""}`}
            name="email"
            type="email"
            placeholder="Work Email *"
            aria-label="Email Address"
            autoComplete="email"
            onBlur={(e) => handleBlur(e, e.currentTarget.form!)}
            onChange={handleChange}
          />
          {touched.email && errors.email && (
            <p className="form-error" role="alert">{errors.email}</p>
          )}
        </div>

        {/* Phone with country code — full width */}
        <div className="flex flex-col gap-1 sm:col-span-2">
          <div className={`phone-wrap field flex items-stretch gap-0 p-0 overflow-hidden${touched.phone && errors.phone ? " field-error" : ""}`}>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              aria-label="Country dialling code"
              className="country-select shrink-0 bg-transparent border-r border-white/10 pl-3 pr-2 py-[0.875rem] text-white text-sm focus:outline-none cursor-pointer"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={`${c.code}-${c.name}`} value={c.code} className="bg-[#080a10] text-white">
                  {c.flag} {c.code} {c.name}
                </option>
              ))}
            </select>
            <input
              className="flex-1 min-w-0 bg-transparent px-3 py-[0.875rem] text-white placeholder-[rgba(167,176,192,0.92)] focus:outline-none"
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              aria-label="Phone Number"
              autoComplete="tel-national"
              onBlur={(e) => handleBlur(e, e.currentTarget.form!)}
              onChange={handleChange}
            />
          </div>
          {touched.phone && errors.phone && (
            <p className="form-error" role="alert">{errors.phone}</p>
          )}
        </div>

        {/* Company */}
        <input
          className="field sm:col-span-2"
          name="company"
          type="text"
          placeholder="Company / Brand Name"
          aria-label="Company Name"
          autoComplete="organization"
        />

        {/* Industry */}
        <select className="field" name="industry" aria-label="Industry" defaultValue="">
          <option value="" disabled>Select Industry</option>
          {industries.map((item) => <option key={item}>{item}</option>)}
        </select>

        {/* Ad Spend */}
        <select className="field" name="adSpend" aria-label="Monthly Ad Spend" defaultValue="">
          <option value="" disabled>Monthly Ad Spend</option>
          {spends.map((item) => <option key={item}>{item}</option>)}
        </select>

        {/* Service */}
        <select className="field sm:col-span-2" name="service" aria-label="Services Required" defaultValue="">
          <option value="" disabled>What do you need help with?</option>
          {services.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      {errors.form && (
        <p className="mt-3 form-error text-center" role="alert">{errors.form}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        data-magnetic
        data-magnetic-strength="0.16"
        className="magnetic-button mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-obsidian transition hover:bg-plasma disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2.5">
            <span className="size-4 animate-spin rounded-full border-2 border-obsidian/25 border-t-obsidian" />
            Submitting…
          </span>
        ) : (
          <>
            Claim My Free Growth Audit <ArrowRight size={16} />
          </>
        )}
      </button>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-graphite">
        <span className="flex items-center gap-1.5"><Shield size={11} className="text-aurora" />100% confidential</span>
        <span aria-hidden="true">·</span>
        <span className="flex items-center gap-1.5"><Clock size={11} className="text-aurora" />Response in 24h</span>
        <span aria-hidden="true">·</span>
        <span>No spam, ever</span>
      </div>
    </motion.form>
  );
}
