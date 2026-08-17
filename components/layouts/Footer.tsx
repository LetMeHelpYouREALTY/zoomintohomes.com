import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { CALENDLY_URL } from "@/content/widgets";
import { siteIdentity } from "@/content/site";

/**
 * Legacy marketing footer (unused by primary Zoom shell).
 * Kept for any remaining import; prefer SiteFooter for production pages.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8 flex flex-wrap gap-3">
          <CalendlyButton
            className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            text="Schedule on Calendly"
          />
          <a
            href={CALENDLY_URL}
            className="inline-flex rounded-md border border-slate-600 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Calendly in a new tab
          </a>
          <a
            href={`tel:${siteIdentity.phoneTel}`}
            className="inline-flex rounded-md border border-slate-600 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Call {siteIdentity.phoneDisplay}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-bold text-xl mb-4">Berkshire Hathaway HomeServices</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Nevada Properties — partner practice for Zoom Into Homes virtual-first touring in
              Las Vegas, Henderson, and Summerlin.
            </p>
            <div className="flex space-x-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Schedule on Calendly"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Search listings on RealScout"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Open RealScout portal"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/listings" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/buyers" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Buyers
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Sellers
                </Link>
              </li>
              <li>
                <Link href="/virtual-tour-process" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Virtual tours
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Home valuation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">{siteIdentity.officeAddress}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${siteIdentity.phoneTel}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {siteIdentity.phoneDisplay}
                </a>
              </li>
              {siteIdentity.email ? (
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                  <a
                    href={`mailto:${siteIdentity.email}`}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {siteIdentity.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {siteIdentity.brokerageName}. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            {siteIdentity.agentName} | {siteIdentity.agentLicense} | Partner: Dr. Jan Duffy,
            S.0197614.LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
