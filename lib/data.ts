import {
  BarChart3,
  Bot,
  Building2,
  Clapperboard,
  GraduationCap,
  Landmark,
  LineChart,
  Megaphone,
  MousePointer2,
  Rocket,
  Search,
  Workflow
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { value: 15, suffix: "+ Crore", prefix: "₹", label: "Ad Spend Managed" },
  { value: 10, suffix: "+ Lakh", label: "Leads Generated" },
  { value: 100, suffix: "+", label: "Campaigns Managed" },
  { value: 50, suffix: "+", label: "Clients Served" }
];

export const services = [
  { title: "Meta Ads", icon: Megaphone, text: "Full-funnel paid social systems built for qualified lead velocity." },
  { title: "Google Ads", icon: Search, text: "High-intent search, PMax, display, and YouTube ecosystems." },
  { title: "YouTube Ads", icon: Clapperboard, text: "Video funnels that convert attention into measurable demand." },
  { title: "SEO", icon: LineChart, text: "Technical, content, and authority engines for durable acquisition." },
  { title: "CRM Automation", icon: Workflow, text: "Lead routing, nurture, scoring, and sales enablement workflows." },
  { title: "Landing Page Development", icon: MousePointer2, text: "Conversion-focused pages engineered for paid traffic." },
  { title: "Lead Generation", icon: BarChart3, text: "Predictable pipeline systems for education, real estate, and services." },
  { title: "Marketing Automation", icon: Bot, text: "Lifecycle journeys that improve speed-to-lead and revenue capture." }
];

export const industries = [
  { title: "EdTech", icon: Rocket, text: "Performance campaigns for enrollment, app installs, demo bookings, and program discovery." },
  { title: "Study Abroad", icon: GraduationCap, text: "Country, course, and intake-led funnels for aspirational student demand." },
  { title: "Real Estate", icon: Building2, text: "Project launches, site visit pipelines, and premium inventory demand generation." },
  { title: "Higher Education", icon: Landmark, text: "University, college, PGDM, MBBS abroad, and online degree growth programs." },
  { title: "Healthcare", icon: Workflow, text: "Compliant lead journeys for high-trust healthcare and wellness categories." },
  { title: "Lead Generation Businesses", icon: BarChart3, text: "Scale-ready acquisition engines for businesses built around qualified leads." }
];

export const brandExperience = [
  "LPU",
  "Chandigarh University",
  "Amity University",
  "Sharda University",
  "Bennett University",
  "UPES",
  "Chandigarh Group of Colleges",
  "Study Abroad Campaigns",
  "MBBS Abroad Campaigns",
  "Online Degree Programs",
  "PGDM Institutions"
];

export const caseStudies = [
  {
    title: "Online Degree Enrollment Engine",
    category: "Higher Education",
    metric: "3.8x",
    label: "lead-to-application lift",
    text: "Rebuilt search, Meta, landing pages, and CRM nurture around program intent and admission-stage velocity."
  },
  {
    title: "Study Abroad Intake Acceleration",
    category: "Study Abroad",
    metric: "42%",
    label: "lower CPL at scale",
    text: "Segmented campaigns by destination, intake, and course clusters to improve counseling-ready lead quality."
  },
  {
    title: "Premium Real Estate Launch",
    category: "Real Estate",
    metric: "11k+",
    label: "qualified inquiries",
    text: "Created a launch funnel spanning video awareness, search intent, remarketing, and sales-qualified routing."
  }
];

export const team = [
  { name: "Abhishek Gupta", role: "Founder & CMO", text: "Growth strategist focused on paid acquisition, education funnels, and full-stack performance systems." },
  { name: "Ehtashamuddin", role: "Head of Search Engine Advertising", text: "Search, YouTube, and performance media specialist for intent-led acquisition." },
  { name: "Rahul Singh Dhanwal", role: "Head of Sales", text: "Sales operations leader focused on speed-to-lead, conversion discipline, and revenue follow-through." }
];

export const testimonials = [
  {
    quote: "MarketingWallah helped us turn scattered campaign activity into a measurable admission pipeline with clearer reporting and stronger lead quality.",
    author: "Admissions Director",
    company: "Leading Private University"
  },
  {
    quote: "The team understands education funnels deeply. Their media, landing page, and CRM thinking gave our counselors a much better pipeline.",
    author: "Growth Head",
    company: "Study Abroad Brand"
  },
  {
    quote: "They bring enterprise-level performance discipline while moving with founder-level speed. That combination is rare.",
    author: "Marketing Lead",
    company: "Real Estate Developer"
  }
];

export const faqs = [
  {
    question: "Which industries does MarketingWallah specialize in?",
    answer: "We specialize in Education, EdTech, Study Abroad, Real Estate, Higher Education, Online Universities, Healthcare, and lead generation-heavy businesses."
  },
  {
    question: "Can you manage both ads and landing pages?",
    answer: "Yes. We build the full acquisition system: paid media, landing pages, CRM automation, reporting, and ongoing conversion optimization."
  },
  {
    question: "What ad platforms do you work with?",
    answer: "Our core channels include Meta Ads, Google Ads, YouTube Ads, SEO, CRM automation, and marketing automation workflows."
  },
  {
    question: "Do you work with universities and education brands?",
    answer: "Yes. We have experience across leading universities, online degrees, PGDM institutions, MBBS abroad, and study abroad campaigns."
  }
];

export const whyUs = [
  "Deep category expertise across education, study abroad, real estate, and high-ticket lead generation.",
  "Performance media paired with CRM, speed-to-lead, and sales conversion systems.",
  "Premium reporting rhythm with boardroom-ready insight, not vanity dashboards.",
  "Creative testing, landing page experiments, and automation designed around revenue outcomes."
];
