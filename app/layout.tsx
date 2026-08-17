import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Atkinson_Hyperlegible, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import SkipLink from "@/components/site/SkipLink";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import JsonLd from "@/components/site/JsonLd";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";
import { buildOrganizationSchemas } from "@/lib/schema";
import { pageMeta, siteIdentity } from "@/content/site";
import { SITE_ORIGIN, absoluteUrl } from "@/lib/site-url";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

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
    "measured accessibility features real estate",
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
  themeColor: "#0F4C4F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${atkinson.variable} ${sourceSerif.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className={atkinson.className}>
        <JsonLd data={buildOrganizationSchemas()} />
        <SkipLink />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <CalendlyBadge />
        <Analytics />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
