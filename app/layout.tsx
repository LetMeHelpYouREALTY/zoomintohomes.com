import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import SkipLink from "@/components/site/SkipLink";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://zoomintohomes.com"),
  title: {
    default: pageMeta.home.title,
    template: "%s | Zoom Into Homes",
  },
  description: pageMeta.home.description,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {/*
          JSON-LD slot: RealEstateAgent, LocalBusiness, FAQPage, Service.
          Inject after schema.org validation and GEO extractability review.
          Do not author schema properties in this file.
        */}
        <SkipLink />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
