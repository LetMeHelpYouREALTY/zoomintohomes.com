import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.walkthroughExample.title,
  description: pageMeta.walkthroughExample.description,
  path: "/examples/walkthrough",
});

const walkthroughUrl = process.env.NEXT_PUBLIC_SAMPLE_WALKTHROUGH_URL?.trim();

export default function WalkthroughExamplePage() {
  return (
    <article>
      <h1 className="page-title">Example virtual walkthrough</h1>
      <p className="lede">
        The practice name promises a tour. Below is either an embedded sample
        (when configured) or a written room-by-room equivalent—the durable
        product for this audience.
      </p>
      <div className="video-frame">
        {walkthroughUrl ? (
          <iframe
            title="Sample accessibility walkthrough"
            src={walkthroughUrl}
            allow="fullscreen; picture-in-picture"
            loading="lazy"
          />
        ) : (
          <p>
            Sample video URL not configured yet (
            <code>NEXT_PUBLIC_SAMPLE_WALKTHROUGH_URL</code>). Until then, use
            the written equivalent below—never autoplay embeds.
          </p>
        )}
      </div>
      <h2>Written walkthrough equivalent</h2>
      <ol>
        <li>
          Arrival: covered zero-step entry; note threshold height at the primary
          door.
        </li>
        <li>
          Circulation: measure clear width on the route to the primary bedroom
          and bath.
        </li>
        <li>
          Primary bath: shower curb height, turning space, and door clear width.
        </li>
        <li>
          Kitchen: aisle clearances and control heights on range and sink.
        </li>
      </ol>
      <p>
        <Link href="/examples/feature-sheet">Example feature sheet</Link>
        {" · "}
        <Link href="/virtual-tour-process">Process</Link>
      </p>
    </article>
  );
}
