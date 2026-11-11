import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "600", "700", "800"] });

const description = "Enterprise IT services: cloud, AI, software engineering, data and cybersecurity.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rulingmindtech.com"),
  title: { default: "RulingMindTech | Enterprise IT Services", template: "%s | RulingMindTech" },
  description,
  openGraph: { title: "RulingMindTech | Enterprise IT Services", description, url: "https://rulingmindtech.com", siteName: "RulingMindTech", type: "website" },
};

const orgJsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "RulingMindTech", url: "https://rulingmindtech.com" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dm.variable} ${manrope.variable}`}>
      <body className="font-sans text-ink">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
