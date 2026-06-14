"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="MarketingWallah home">
          <span className="grid size-9 place-items-center rounded-xl border border-plasma/30 bg-plasma/10 shadow-glow">
            <span className="text-sm font-black text-white">MW</span>
          </span>
          <span className="text-base font-semibold tracking-tight text-white">MarketingWallah</span>
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${pathname === item.href ? "bg-white text-obsidian" : "text-graphite hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="hidden rounded-full border border-plasma/30 bg-plasma/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-plasma hover:text-obsidian lg:inline-flex">
          Book Growth Audit
        </Link>
        <button type="button" className="grid size-10 place-items-center rounded-full border border-white/10 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-obsidian/95 px-4 py-4 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
