import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsappButton } from "@/components/WhatsappButton";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollEffects } from "@/components/ScrollEffects";
import { InteractiveEffects } from "@/components/InteractiveEffects";

export const metadata: Metadata = {
  metadataBase: new URL("https://marketingwallah.com"),
  title: {
    default: "MarketingWallah | India's Leading Performance Marketing & Growth Partner",
    template: "%s | MarketingWallah"
  },
  description:
    "MarketingWallah is a full-service 360 degree growth marketing agency for Education, Study Abroad, Real Estate, CRM Automation, SEO, and Lead Generation.",
  keywords: [
    "MarketingWallah",
    "performance marketing agency India",
    "education marketing agency",
    "study abroad lead generation",
    "real estate digital marketing",
    "Meta Ads agency",
    "Google Ads agency",
    "CRM automation"
  ],
  openGraph: {
    title: "MarketingWallah",
    description: "India's Leading Performance Marketing & Growth Partner",
    url: "https://marketingwallah.com",
    siteName: "MarketingWallah",
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#050609",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className="font-sans antialiased">
        <LoadingScreen />
        <ScrollEffects />
        <InteractiveEffects />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <WhatsappButton />
      </body>
    </html>
  );
}
