import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  const message = encodeURIComponent("Hi MarketingWallah, I want to discuss performance marketing for my business.");
  return (
    <a
      href={`https://wa.me/?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full border border-aurora/30 bg-aurora text-obsidian shadow-[0_0_40px_rgba(182,255,104,0.35)] transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
