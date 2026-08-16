import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import SkipLink from "@/components/site/SkipLink";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { pageMeta, siteIdentity } from "@/content/site";
import { SITE_ORIGIN, absoluteUrl } from "@/lib/site-url";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: pageMeta.home.title,
    template: "%s | Zoom Into Homes",
  },
  description: pageMeta.home.description,
  applicationName: siteIdentity.siteName,
  authors: [{ name: siteIdentity.agentName }],
  creator: siteIdentity.agentName,
  publisher: siteIdentity.brokerageName,
  category: "real estate",
  keywords: [
    "Las Vegas accessible home search",
    "virtual home tours Las Vegas",
    "aging in place Henderson",
    "VA SAH SHA housing Nevada",
    "zero-step entry homes Las Vegas",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: siteIdentity.siteName,
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: [
      {
        url: absoluteUrl("/images/pages/home/hero.jpg"),
        width: 1600,
        height: 900,
        alt: "Laptop playing a Las Vegas home walkthrough with a doorway measurement on screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: [absoluteUrl("/images/pages/home/hero.jpg")],
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
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
          Required for richer Google results after GSC verification.
        */}
        <SkipLink />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
