import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import RoutePageHero from "@/components/site/RoutePageHero";
import TourStage from "@/components/site/TourStage";
import { pageImages } from "@/content/page-images";
import { pageMeta, siteIdentity } from "@/content/site";
import { buildBreadcrumbList } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import {
  buildSampleWalkthroughVideoObject,
  withoutAutoplay,
} from "@/lib/walkthrough-video";

const walkthroughUrl = process.env.NEXT_PUBLIC_SAMPLE_WALKTHROUGH_URL?.trim();
const sampleVideo = buildSampleWalkthroughVideoObject();
const embedSrc = walkthroughUrl ? withoutAutoplay(walkthroughUrl) : "";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.walkthroughExample.title,
  description: pageMeta.walkthroughExample.description,
  path: "/examples/walkthrough",
  imagePath: pageImages.howItWorks.hero.src,
  imageAlt: pageImages.howItWorks.hero.alt,
});

export default function WalkthroughExamplePage() {
  return (
    <article>
      <RoutePageHero path="/examples/walkthrough" />
      <JsonLd
        data={[
          buildBreadcrumbList([
            { name: "Home", path: "/" },
            { name: "Example walkthrough", path: "/examples/walkthrough" },
          ]),
          ...(sampleVideo ? [sampleVideo] : []),
        ]}
      />
      <TourStage
        title="Sample virtual tour · click to start"
        caption="Highlight sequence: zero-step entry → doorway width → primary bath → kitchen clearances."
      >
        <div className="video-frame tour-stage-video">
          {embedSrc ? (
            <iframe
              title="Sample Zoom Into Homes walkthrough"
              src={embedSrc}
              allow="fullscreen; picture-in-picture"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <p>
              Sample video URL not configured yet. Set{" "}
              <code>NEXT_PUBLIC_SAMPLE_WALKTHROUGH_URL</code> in Vercel, then
              redeploy. Until then, use the written equivalent below.
            </p>
          )}
        </div>
      </TourStage>
      <h2>Written walkthrough equivalent</h2>
      <ol className="process-steps">
        <li>
          <h3>Arrival</h3>
          <p>
            Covered zero-step entry; note threshold height at the primary door.
          </p>
        </li>
        <li>
          <h3>Circulation</h3>
          <p>
            Measure clear width on the route to the primary bedroom and bath.
          </p>
        </li>
        <li>
          <h3>Primary bath</h3>
          <p>Shower curb height, turning space, and door clear width.</p>
        </li>
        <li>
          <h3>Kitchen</h3>
          <p>Aisle clearances and control heights on range and sink.</p>
        </li>
      </ol>
      <div className="cta-row">
        <Link href="/contact" className="button">
          Book a virtual tour consultation
        </Link>
        <a href={`tel:${siteIdentity.phoneTel}`} className="button button-secondary">
          Call {siteIdentity.phoneDisplay}
        </a>
        <Link href="/examples/feature-sheet" className="button button-secondary">
          Example access checklist
        </Link>
      </div>
    </article>
  );
}
