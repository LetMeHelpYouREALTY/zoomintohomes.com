import Link from "next/link";
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
        fill="#1a1a1a"
        d="M20 2 2 16h6v14h24V16h6L20 2zm-8 26V15.2L20 8.4l8 6.8V28H12z"
      />
      <path fill="#1a1a1a" d="M16 20h8v2h-8zm0 4h8v2h-8z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-help" id="site-help">
          Help:{" "}
          {helpNav.map((item, index) => (
            <span key={item.href}>
              {index > 0 ? " · " : null}
              <Link href={item.href}>{item.label}</Link>
            </span>
          ))}
        </p>
        <p>
          {siteIdentity.agentName}
          <br />
          License {siteIdentity.agentLicense}
        </p>
        <p>
          {siteIdentity.brokerageName}
          <br />
          Brokerage license {siteIdentity.brokerageLicense}
        </p>
        <p>
          {siteIdentity.officeAddress}
          <br />
          {siteIdentity.serviceArea}
        </p>
        <p>
          {siteIdentity.phoneDisplay}
          <br />
          {siteIdentity.email}
        </p>
        <p className="eho">
          <EqualHousingMark />
          <span>Equal Housing Opportunity. REALTOR®.</span>
        </p>
        <p className="footer-note">
          Advertising identification required by Nevada real estate law.
          PLACEHOLDER fields are visible until licensing data is sourced.
        </p>
      </div>
    </footer>
  );
}
