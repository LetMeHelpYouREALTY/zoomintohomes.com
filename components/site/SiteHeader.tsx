"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { primaryNav, siteIdentity } from "@/content/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-logo">
          <span className="site-logo-mark">Zoom</span>
          <span className="site-logo-rest"> Into Homes</span>
        </Link>
        <nav aria-label="Primary" className="site-header-nav">
          <ul className="nav-desktop">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/examples/walkthrough" className="header-text-link">
            Virtual tour
          </Link>
          <CalendlyButton className="header-tour-link" text="Book a call" />
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close menu" : "Open menu"}
        </button>
      </div>
      <nav id="mobile-nav" aria-label="Primary mobile" hidden={!open}>
        <ul className="nav-mobile">
          <li>
            <Link href="/examples/walkthrough" onClick={() => setOpen(false)}>
              Virtual tour
            </Link>
          </li>
          <li>
            <CalendlyButton
              className="nav-mobile-calendly"
              text="Book a call"
            />
          </li>
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={`tel:${siteIdentity.phoneTel}`}>
              Call {siteIdentity.phoneDisplay}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
