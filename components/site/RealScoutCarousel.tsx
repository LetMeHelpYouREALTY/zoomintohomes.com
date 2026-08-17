import Link from "next/link";
import {
  REALSCOUT_AGENT_ENCODED_ID,
  REALSCOUT_PORTAL_URL,
} from "@/content/widgets";

type RealScoutCarouselProps = {
  title?: string;
  intro?: string;
};

/**
 * RealScout office listings carousel/grid.
 * Script loads once in root layout. Do not re-load script or use React state
 * to mount the custom element.
 */
export default function RealScoutCarousel({
  title = "Homes you can tour virtually first",
  intro = "Browse live Las Vegas and Henderson listings, then we pre-verify access features on video before any drive-out.",
}: RealScoutCarouselProps) {
  return (
    <section
      className="realscout-carousel"
      aria-labelledby="realscout-carousel-heading"
    >
      <div className="realscout-carousel-inner">
        <div className="realscout-carousel-header">
          <div>
            <h2 id="realscout-carousel-heading">{title}</h2>
            <p>{intro}</p>
          </div>
          <a
            className="button button-secondary"
            href={REALSCOUT_PORTAL_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open full search
          </a>
        </div>
        <div
          className="realscout-carousel-widget"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC"></realscout-office-listings>`,
          }}
        />
        <p className="meta realscout-carousel-note">
          Prefer a guided remote tour?{" "}
          <Link href="/virtual-tour-process">See how virtual-first touring works</Link>
          {" · "}
          <Link href="/contact">Request a consultation</Link>
        </p>
      </div>
    </section>
  );
}
