import Link from "next/link";
import AgentPortrait from "@/components/site/AgentPortrait";
import { siteIdentity } from "@/content/site";

type SiteLogoProps = {
  withPhoto?: boolean;
};

/**
 * Visible brand is one phrase: "Zoom Into Homes".
 * Gold "Zoom" is styled inside the wordmark so flex layout cannot
 * collapse the space into "ZoomInto Homes".
 */
export default function SiteLogo({ withPhoto = true }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className="site-logo"
      aria-label={`${siteIdentity.siteName} home`}
    >
      {withPhoto ? <AgentPortrait person="gene" variant="header" /> : null}
      <span className="site-logo-wordmark" translate="no">
        <span className="site-logo-mark">Zoom</span>
        <span className="site-logo-rest"> Into Homes</span>
      </span>
    </Link>
  );
}
