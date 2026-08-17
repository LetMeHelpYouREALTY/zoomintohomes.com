import Link from "next/link";
import {
  REALSCOUT_PORTAL_URL,
  realScoutOfficeListingsHtml,
} from "@/content/widgets";

type RealScoutCarouselProps = {
  title?: string;
  intro?: string;
};

/**
 * Office listings widget. Script injects once after first interaction
 * (RealScoutScript). Do not remount this HTML with React state.
 */
export default function RealScoutCarousel({
  title = "Homes you can tour on video first",
  intro = "Browse live Las Vegas and Henderson homes for sale. We check doorway and bathroom access on video before any drive-out.",
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
            Open full home search
          </a>
        </div>
        <div
          className="realscout-carousel-widget"
          dangerouslySetInnerHTML={{
            __html: realScoutOfficeListingsHtml(),
          }}
        />
        <p className="meta realscout-carousel-note">
          Prefer a guided remote tour?{" "}
          <Link href="/virtual-tour-process">See how video-first touring works</Link>
          {" · "}
          <Link href="/contact">Request a call</Link>
        </p>
      </div>
    </section>
  );
}
