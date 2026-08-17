import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/site/JsonLd";
import { clarkCountyVeteranExemptions } from "@/content/exemptions";
import { pageMeta } from "@/content/site";
import { buildBreadcrumbList, buildFaqPage } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.clarkCountyExemption.title,
  description: pageMeta.clarkCountyExemption.description,
  path: "/clark-county-disabled-veteran-property-tax-exemption",
});

const faqs = [
  {
    question: "What are the Clark County disabled-veteran exemption tiers?",
    answer:
      "As published by the Clark County Assessor on the retrieval date shown in the table, assessed-value reductions are $3,640 (Veteran), $18,200 (60–79% Disabled Veteran), $27,300 (80–99%), and $36,400 (100%). Amounts change with CPI—confirm on the Assessor site before relying on them.",
  },
  {
    question: "Is the exemption automatic?",
    answer:
      "No. You must apply through the Clark County Assessor with the documents listed on the Assessor exemptions page (including DD214 and disability documentation for the disabled-veteran tiers).",
  },
  {
    question: "Does Zoom Into Homes decide eligibility?",
    answer:
      "No. This page republishes Assessor figures for local planning context. Eligibility decisions stay with the Assessor and, for VA grants, with the VA.",
  },
];

export default function ClarkCountyExemptionPage() {
  const data = clarkCountyVeteranExemptions;

  return (
    <article>
      <JsonLd
        data={[
          buildBreadcrumbList([
            { name: "Home", path: "/" },
            {
              name: "Clark County veteran exemptions",
              path: "/clark-county-disabled-veteran-property-tax-exemption",
            },
          ]),
          buildFaqPage(faqs),
        ]}
      />
      <h1 className="page-title">
        Clark County disabled-veteran property tax exemption tiers
      </h1>
      <p className="lede">
        Assessed-value exemption amounts published by the Clark County Assessor.
        These are local tax figures—not VA SAH/SHA grant amounts.
      </p>
      <section className="answer-block" aria-label="Direct answer">
        <h2 className="answer-block-title">Direct answer</h2>
        <p className="answer-block-body">
          Clark County publishes tiered assessed-value exemptions for veterans
          and disabled veterans under NRS 361.090 and NRS 361.091. The table below
          matches the Assessor site as retrieved on {data.retrievedOn}. Re-check
          before filing—CPI adjustments move the numbers.
        </p>
      </section>
      <table className="data-table">
        <caption>
          Clark County Assessor exemption tiers (assessed value). Retrieved{" "}
          {data.retrievedOn}.
        </caption>
        <thead>
          <tr>
            <th scope="col">Exemption type</th>
            <th scope="col">Assessed value</th>
            <th scope="col">Statute</th>
          </tr>
        </thead>
        <tbody>
          {data.tiers.map((tier) => (
            <tr key={tier.label}>
              <th scope="row">{tier.label}</th>
              <td>${tier.assessedValueUsd.toLocaleString("en-US")}</td>
              <td>{tier.statute}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Source:{" "}
        <a href={data.sourceUrl} rel="noopener noreferrer">
          {data.sourceLabel}
        </a>
        .
      </p>
      <h2>How does this relate to a home purchase?</h2>
      <p>
        Exemption planning is separate from VA adaptive housing grants. For
        purchase sequencing with SAH/SHA, see{" "}
        <Link href="/va-sah-grant-nevada">VA SAH grant Nevada</Link> and{" "}
        <Link href="/va-sha-grant-nevada">VA SHA grant Nevada</Link>.
      </p>
      <section className="faq-section" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently asked questions</h2>
        <div className="stack">
          {faqs.map((item) => (
            <article key={item.question} className="card faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
