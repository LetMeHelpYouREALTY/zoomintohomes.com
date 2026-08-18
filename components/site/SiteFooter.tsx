import Link from "next/link";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { brandCopy } from "@/content/brand";
import { helpNav, siteIdentity } from "@/content/site";

function EqualHousingMark() {
  return (
    <svg
      width="40"
      height="32"
      viewBox="0 0 40 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M20 2 2 16h6v14h24V16h6L20 2zm-8 26V15.2L20 8.4l8 6.8V28H12z"
      />
      <path fill="currentColor" d="M16 20h8v2h-8zm0 4h8v2h-8z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-schedule-row" id="schedule-footer">
          <CalendlyButton className="button" text="Schedule a call" />
          <a
            className="button button-secondary"
            href={`tel:${siteIdentity.phoneTel}`}
          >
            Call {siteIdentity.phoneDisplay}
          </a>
        </div>
        <div className="compliance-block" id="nevada-advertising">
          <p>
            <strong>{siteIdentity.agentName}</strong>
            <br />
            {siteIdentity.agentLicense}
          </p>
          <p>
            <strong>{siteIdentity.brokerageName}</strong>
            <br />
            {siteIdentity.brokerageLicense}
          </p>
          <p>{brandCopy.franchiseDisclaimer}</p>
          <p>
            {siteIdentity.phoneTel ? (
              <a href={`tel:${siteIdentity.phoneTel}`}>
                {siteIdentity.phoneDisplay}
              </a>
            ) : (
              siteIdentity.phoneDisplay
            )}
            {siteIdentity.email ? (
              <>
                <br />
                <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>
              </>
            ) : null}
          </p>
          <p>
            Service areas: {siteIdentity.serviceArea}.{" "}
            {siteIdentity.officeAddress}
          </p>
        </div>

        <p className="footer-help" id="site-help">
          Help:{" "}
          {helpNav.map((item, index) => (
            <span key={item.href}>
              {index > 0 ? " · " : null}
              <Link href={item.href}>{item.label}</Link>
            </span>
          ))}
          {" · "}
          <a href="#schedule">Schedule</a>
        </p>

        <p className="eho">
          <EqualHousingMark />
          <span>Equal Housing Opportunity. REALTOR®.</span>
        </p>
      </div>
    </footer>
  );
}
