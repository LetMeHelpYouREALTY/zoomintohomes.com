import type { Metadata } from "next";
import Link from "next/link";
import { sampleFeatureSheet } from "@/content/exemptions";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.featureSheetExample.title,
  description: pageMeta.featureSheetExample.description,
  path: "/examples/feature-sheet",
});

export default function FeatureSheetExamplePage() {
  const sheet = sampleFeatureSheet;

  return (
    <article>
      <h1 className="page-title">{sheet.title}</h1>
      <p className="lede">
        {sheet.listingLabel}. Measured {sheet.measuredOn} by {sheet.measuredBy}.
      </p>
      <div className="provenance-panel">
        <p>{sheet.disclaimer}</p>
        <p className="meta">Evidence level: {sheet.evidence}</p>
      </div>
      <table className="data-table">
        <caption>Redacted sample measurements</caption>
        <thead>
          <tr>
            <th scope="col">Attribute</th>
            <th scope="col">Value</th>
            <th scope="col">RESO enum</th>
          </tr>
        </thead>
        <tbody>
          {sheet.rows.map((row) => (
            <tr key={row.attribute}>
              <th scope="row">{row.attribute}</th>
              <td>
                {row.value}
                {row.unit ? ` ${row.unit}` : ""}
              </td>
              <td>{row.reso}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <Link href="/what-we-measure">What we measure</Link>
        {" · "}
        <Link href="/examples/walkthrough">Example walkthrough</Link>
        {" · "}
        <Link href="/contact">Request a consultation</Link>
      </p>
    </article>
  );
}
