import {
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  ClipboardList,
  Clapperboard,
  Compass,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Filter,
  GraduationCap,
  Globe,
  Headphones,
  Layers,
  LineChart,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  MousePointer2,
  PenTool,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Workflow,
  Youtube,
  ShieldCheck,
  Timer,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

/* ───────────────────────── HERO + STATS ───────────────────────── */

export const stats = [
  { value: 10000, suffix: "+", label: "Applications Delivered" },
  { value: 1000, suffix: "+", label: "Domestic Admissions" },
  { value: 2000, suffix: "+", label: "Study Abroad Enrollments" },
  { value: 15, suffix: "+ Cr", prefix: "₹", label: "Ad Spend Managed" }
];

/* ───────────────────────── WHY MARKETING WALLAH ───────────────────────── */

export const whyMarketingWallah = [
  {
    title: "100% Education Focused",
    icon: GraduationCap,
    text: "We don't work with random industries. Every strategy, creative, and funnel is built specifically for colleges, universities, study abroad, and EdTech."
  },
  {
    title: "Built for Student Enrollments",
    icon: Target,
    text: "Our campaigns are engineered for one outcome — verified, counsellor-ready student leads that turn into actual admissions."
  },
  {
    title: "Performance, Not Promises",
    icon: TrendingUp,
    text: "Every rupee is tracked from ad click to enrolled student. You get weekly reports, not vanity dashboards."
  },
  {
    title: "Premium Creative That Converts",
    icon: Sparkles,
    text: "In-house video, graphic, and content team that understands what makes students and parents click, fill, and call."
  },
  {
    title: "AI + Automation Built-in",
    icon: Bot,
    text: "Speed-to-lead automation, WhatsApp follow-ups, and AI-driven nurturing — so leads don't go cold before counsellors call."
  },
  {
    title: "Senior Strategy, Daily Optimization",
    icon: ShieldCheck,
    text: "You work directly with the senior team. No juniors, no handoffs, no excuses."
  }
];

/* ───────────────────────── INDUSTRIES WE SERVE ───────────────────────── */

export const industries = [
  {
    title: "Colleges & Universities",
    icon: Building2,
    text: "Admission funnels for UG, PG, PhD, and online degree programs. Increase application volume, reduce CPL, and improve admission conversion across intakes."
  },
  {
    title: "Study Abroad Consultants",
    icon: Globe,
    text: "Destination-specific lead generation for USA, UK, Canada, Australia, Europe, and Dubai. Counsellor-ready leads filtered by intake, country, and budget."
  },
  {
    title: "MBBS Abroad Consultants",
    icon: Stethoscope,
    text: "High-intent NEET-qualified student leads for Russia, Georgia, Uzbekistan, Kazakhstan, Kyrgyzstan, and Philippines MBBS programs."
  },
  {
    title: "Coaching Institutes",
    icon: Trophy,
    text: "NEET, JEE, UPSC, CAT, GATE, banking, and skill coaching campaigns. Drive demo bookings, free class signups, and enrollment-ready leads."
  },
  {
    title: "EdTech Companies",
    icon: Rocket,
    text: "App installs, course signups, demo classes, and B2B school partnerships. Scalable acquisition built around LTV and unit economics."
  },
  {
    title: "Online Degree Programs",
    icon: GraduationCap,
    text: "Counsellor-ready leads for online MBA, BBA, MCA, and skill-degree programs. Full funnel from awareness to admission counsellor handoff."
  }
];

/* ───────────────────────── SERVICES (15 SERVICES) ───────────────────────── */

export const services = [
  { title: "Meta Ads", icon: Megaphone, text: "Facebook & Instagram lead campaigns engineered for high-intent student inquiries at lowest CPL." },
  { title: "Google Ads", icon: Search, text: "Search, Display & PMax campaigns targeting high-intent admission keywords and competitor queries." },
  { title: "YouTube Ads", icon: Youtube, text: "Video ad funnels that build brand recall among students, parents, and decision-makers." },
  { title: "Lead Generation", icon: Target, text: "End-to-end student lead systems — from creative to counsellor-ready CRM handoff." },
  { title: "SEO", icon: LineChart, text: "Long-term organic rankings for course, university, and program-related search queries." },
  { title: "Website Design & Development", icon: MonitorSmartphone, text: "High-converting university websites and microsites built for SEO, speed, and admissions." },
  { title: "AI Automation", icon: Brain, text: "WhatsApp bots, lead-scoring, AI follow-ups, and instant routing for faster counsellor response." },
  { title: "Video Production & Editing", icon: Clapperboard, text: "Premium campus, testimonial, founder, and ad films shot and edited in-house." },
  { title: "Graphic Design", icon: PenTool, text: "Brochures, hoardings, social creatives, and campaign assets aligned to your brand." },
  { title: "Content Creation", icon: MessageSquare, text: "Ad copies, landing page content, blogs, and lead-magnet content that converts." },
  { title: "Branding", icon: Sparkles, text: "Brand positioning, identity, and storytelling for premium education brands." },
  { title: "Social Media Management", icon: Users, text: "Organic content systems for Instagram, LinkedIn, YouTube, and Facebook — built for trust and reach." },
  { title: "Marketing Strategy", icon: Compass, text: "Full-funnel growth plans covering channel mix, budget allocation, and admission KPIs." },
  { title: "Funnel Building", icon: Filter, text: "Landing pages, lead forms, WhatsApp funnels, and CRM workflows that maximize conversions." },
  { title: "Analytics & Reporting", icon: BarChart3, text: "Weekly performance reports tied to enrollments — not just impressions and clicks." }
];

/* ───────────────────────── OUR PROCESS (6 STEPS) ───────────────────────── */

export const process = [
  {
    step: "01",
    title: "Discovery Call",
    timeline: "Day 1",
    icon: ClipboardList,
    text: "We understand your programs, intake targets, current CPL, and admission goals — then audit exactly where leads are leaking."
  },
  {
    step: "02",
    title: "Strategy & Planning",
    timeline: "Day 2–3",
    icon: Compass,
    text: "A custom 90-day growth roadmap covering channels, budgets, creatives, funnels, and weekly enrollment milestones."
  },
  {
    step: "03",
    title: "Creative & Funnel Build",
    timeline: "Day 4–7",
    icon: Layers,
    text: "Landing pages, ad creatives, videos, and CRM automations built specifically for your programs and intake cycle."
  },
  {
    step: "04",
    title: "Campaign Kickoff",
    timeline: "Week 2",
    icon: Rocket,
    text: "Multi-platform campaigns go live with full tracking, pixel events, and instant counsellor handoff systems in place."
  },
  {
    step: "05",
    title: "Execution & Optimization",
    timeline: "Ongoing",
    icon: TrendingUp,
    text: "Daily monitoring, weekly creative refresh, and A/B testing to push CPL down and lead quality up."
  },
  {
    step: "06",
    title: "Growth & Reporting",
    timeline: "Weekly",
    icon: BarChart3,
    text: "Weekly review calls with transparent reports tied to leads, applications, and enrollments — not vanity metrics."
  }
];

/* ───────────────────────── SOCIAL LINKS ───────────────────────── */

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/marketingwallah", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/marketingwallah", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com/company/marketingwallah", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/@marketingwallah", icon: Youtube },
  { label: "X (Twitter)", href: "https://x.com/marketingwallah", icon: Twitter }
];

/* ───────────────────────── RESULTS / CASE STUDIES ───────────────────────── */

export const caseStudies = [
  {
    title: "Domestic University Admissions",
    category: "Colleges & Universities",
    metric: "10,000+",
    label: "Applications delivered",
    text: "Across LPU, Chandigarh University, Sharda, Amity, Bennett, UPES, Ganpat and more — we&apos;ve delivered 10,000+ applications and 1,000+ confirmed admissions through performance campaigns, intake-aligned funnels, and CRM follow-up systems."
  },
  {
    title: "Study Abroad Enrollment Engine",
    category: "Study Abroad",
    metric: "2,000+",
    label: "Verified enrollments",
    text: "From counsellor-ready leads to confirmed enrollments — we&apos;ve helped India&apos;s top study abroad consultancies place 2,000+ students into universities across USA, UK, Canada, Australia, and Europe."
  },
  {
    title: "MBBS Abroad & India Pipeline",
    category: "MBBS Abroad",
    metric: "2 Lakh+",
    label: "MBBS leads generated",
    text: "Generated 2,00,000+ MBBS abroad and India leads and delivered 400+ confirmed admissions — through NEET-targeted creatives, parent-focused video funnels, and instant WhatsApp callback for high-intent inquiries."
  },
  {
    title: "Online MBA Enrollment Engine",
    category: "Online University",
    metric: "3.8x",
    label: "Lead-to-admission lift",
    text: "Rebuilt the full funnel — search, Meta, landing pages, WhatsApp automation — around program intent. Counsellor conversion jumped from 4% to 15% in one intake cycle."
  },
  {
    title: "NEET Coaching Demo Bookings",
    category: "Coaching Institute",
    metric: "2.6x",
    label: "Demo class signups",
    text: "Parent + student dual-funnel strategy with location-targeted Meta and YouTube creatives during the pre-NEET window."
  },
  {
    title: "EdTech App Installs",
    category: "EdTech",
    metric: "₹38",
    label: "Average CPI achieved",
    text: "PMax + Meta installs + creator-led video ads brought app install cost down 61% while maintaining day-7 retention."
  }
];

/* ───────────────────────── CLIENT LOGOS ───────────────────────── */

export const collegeClients = [
  { name: "LPU", domain: "lpu.in" },
  { name: "Chandigarh University", domain: "cuchd.in" },
  { name: "Ganpat University", domain: "ganpatuniversity.ac.in" },
  { name: "Sharda University", domain: "sharda.ac.in" },
  { name: "Amity University", domain: "amity.edu" },
  { name: "Bennett University", domain: "bennett.edu.in" },
  { name: "UPES", domain: "upes.ac.in" },
  { name: "Chitkara University", domain: "chitkara.edu.in" },
  { name: "Manipal University", domain: "manipal.edu" },
  { name: "OP Jindal", domain: "jgu.edu.in" },
  { name: "CGC Landran", domain: "cgc.edu.in" },
  { name: "GLA University", domain: "gla.ac.in" }
];

export const studyAbroadClients = [
  { name: "Y-Axis", domain: "y-axis.com" },
  { name: "AECC Global", domain: "aeccglobal.com" },
  { name: "IDP Education", domain: "idp.com" },
  { name: "Leverage Edu", domain: "leverageedu.com" },
  { name: "Edwise International", domain: "edwiseinternational.com" },
  { name: "Global Tree", domain: "globaltree.in" },
  { name: "Edvoy", domain: "edvoy.com" },
  { name: "ApplyBoard", domain: "applyboard.com" },
  { name: "GeeBee Education", domain: "geebeeworld.com" },
  { name: "Career Mosaic", domain: "careermosaic.in" },
  { name: "Gradding", domain: "gradding.com" },
  { name: "Santamonica", domain: "santamonicaedu.com" }
];

/* ───────────────────────── CLIENT BENEFITS ───────────────────────── */

export const clientBenefits = [
  { title: "Predictable Pipeline", icon: TrendingUp, text: "A steady flow of qualified student leads every single month — not just during intake season." },
  { title: "Lower Cost Per Admission", icon: Target, text: "Better targeting, smarter funnels, and stronger creatives bring CPA down without compromising lead quality." },
  { title: "Faster Lead Response", icon: Timer, text: "AI + WhatsApp automation means your counsellors call leads while intent is still hot — not 48 hours later." },
  { title: "Higher Brand Trust", icon: ShieldCheck, text: "Premium creatives, testimonials, and reputation systems build the trust parents need to write that fee cheque." },
  { title: "Senior-Level Account Handling", icon: Headphones, text: "You talk to the founder and senior strategists directly. No account-manager runaround." },
  { title: "Transparent Weekly Reporting", icon: BarChart3, text: "Clear dashboards showing leads, cost, conversion, and admission impact every Monday." }
];

/* ───────────────────────── BRAND EXPERIENCE ───────────────────────── */

export const brandExperience = [
  "LPU",
  "Chandigarh University",
  "Ganpat University",
  "Sharda University",
  "Amity University",
  "Bennett University",
  "UPES",
  "Chitkara University",
  "Y-Axis",
  "AECC Global",
  "Leverage Edu",
  "IDP Education"
];

/* ───────────────────────── FOUNDER ───────────────────────── */

export const founder = {
  name: "Abhishek Gupta",
  role: "Founder & CEO",
  company: "Marketing Wallah",
  bio: "Performance marketing specialist focused exclusively on the education industry. Has led ₹15+ Crore in ad spend, generated 10+ lakh student leads, and worked with India's leading universities, study abroad brands, and EdTech companies to scale enrollments through performance media, conversion-focused funnels, and AI automation."
};

/* ───────────────────────── TESTIMONIALS ───────────────────────── */

export const testimonials = [
  {
    quote: "Marketing Wallah turned our scattered admission campaigns into a measurable enrollment engine. CPL dropped, lead quality went up, and counsellors finally had a pipeline they could close.",
    author: "Admissions Director",
    company: "Leading Private University"
  },
  {
    quote: "They understand the education funnel like nobody else. The team knows what makes a parent click, what makes a student fill, and what makes a counsellor close.",
    author: "Growth Head",
    company: "Study Abroad Brand"
  },
  {
    quote: "We tried three agencies before Marketing Wallah. Within 60 days, our NEET demo class bookings doubled at half the previous cost.",
    author: "Founder",
    company: "NEET Coaching Institute"
  }
];

/* ───────────────────────── FAQ ───────────────────────── */

export const faqs = [
  {
    question: "Why should an education brand choose Marketing Wallah?",
    answer: "Because we work only with education brands — colleges, universities, study abroad, MBBS abroad, coaching, and EdTech. Every system, creative, and funnel we build is shaped by what we've already learned across 100+ education campaigns."
  },
  {
    question: "What kind of leads will I get?",
    answer: "Counsellor-ready student leads filtered by program, intake, location, and intent. We focus on lead quality and enrollment conversion — not just lead volume."
  },
  {
    question: "How quickly can we start seeing results?",
    answer: "First leads usually start flowing within 7–10 days of launch. Cost per lead and lead quality typically stabilize and improve significantly by week 3–4 after creative and audience optimization."
  },
  {
    question: "Do you handle creatives, videos, and landing pages too?",
    answer: "Yes. We're a full 360° agency for education brands. Ad creatives, videos, landing pages, websites, WhatsApp automation, CRM setup, and reporting — all handled in-house."
  },
  {
    question: "What is the typical engagement model?",
    answer: "We work on monthly retainers covering strategy, ad management, creative production, funnel building, and reporting. Engagements are designed for 6+ months because education funnels compound."
  },
  {
    question: "Who will I work with directly?",
    answer: "You'll have direct access to the founder and senior strategists. No juniors, no account-manager filtering, no delayed responses."
  },
  {
    question: "Do you work with brands outside India?",
    answer: "Yes — we run campaigns globally for study abroad consultancies, MBBS abroad consultants, and online universities targeting students in India, the Middle East, Africa, and Southeast Asia."
  },
  {
    question: "How do you measure success?",
    answer: "We measure what matters — cost per lead, lead-to-counsellor connect rate, lead-to-admission conversion, and revenue per spend. Reporting is sent weekly with full transparency."
  }
];
