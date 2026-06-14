import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollEffects } from "@/components/ScrollEffects";
import { InteractiveEffects } from "@/components/InteractiveEffects";

export const metadata: Metadata = {
  metadataBase: new URL("https://marketingwallah.com"),
  title: {
    default: "Marketing Wallah | India's #1 Marketing Agency for Education Brands",
    template: "%s | Marketing Wallah"
  },
  description:
    "Marketing Wallah is a 360° marketing agency built exclusively for the education industry. We help colleges, universities, study abroad consultants, MBBS abroad consultants, coaching institutes, and EdTech companies generate student leads that actually enroll.",
  keywords: [
    "Marketing Wallah",
    "education marketing agency India",
    "university marketing agency",
    "student lead generation",
    "study abroad lead generation",
    "MBBS abroad lead generation",
    "EdTech marketing agency",
    "coaching institute marketing",
    "Meta Ads for education",
    "Google Ads for universities",
    "education funnel building",
    "admission marketing agency"
  ],
  openGraph: {
    title: "Marketing Wallah",
    description: "India's #1 Marketing Agency for Education Brands. We generate student leads that actually enroll.",
    url: "https://marketingwallah.com",
    siteName: "Marketing Wallah",
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
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
