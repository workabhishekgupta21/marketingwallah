import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { navItems, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-obsidian/70 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Marketing Wallah home">
              <span className="grid size-10 place-items-center rounded-xl border border-plasma/30 bg-plasma/10 shadow-glow">
                <span className="text-sm font-black text-white">MW</span>
              </span>
              <span className="text-base font-semibold tracking-tight text-white">Marketing Wallah</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-graphite">
              India&apos;s #1 marketing agency built exclusively for the education industry. We generate student leads that actually enroll.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-graphite transition hover:border-plasma/40 hover:bg-plasma/10 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aurora">Explore</p>
            <ul className="mt-5 grid gap-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-graphite transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aurora">Get in touch</p>
            <ul className="mt-5 grid gap-3 text-sm">
              <li>
                <a href="https://wa.me/919919111115" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-graphite transition hover:text-white">
                  <MessageCircle size={15} className="text-aurora" /> +91 99191 11115
                </a>
              </li>
              <li>
                <a href="tel:+919919111115" className="flex items-center gap-2.5 text-graphite transition hover:text-white">
                  <Phone size={15} className="text-aurora" /> Call us
                </a>
              </li>
              <li>
                <a href="mailto:hello@marketingwallah.com" className="flex items-center gap-2.5 text-graphite transition hover:text-white">
                  <Mail size={15} className="text-aurora" /> hello@marketingwallah.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-graphite sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Marketing Wallah. All rights reserved.</p>
          <p>Built for the education industry.</p>
        </div>
      </div>
    </footer>
  );
}
