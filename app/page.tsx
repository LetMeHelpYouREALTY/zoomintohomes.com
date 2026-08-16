import type { Metadata } from "next";
import Link from "next/link";
import { homeCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.home.title },
  description: pageMeta.home.description,
};

export default function HomePage() {
  return (
    <article>
      <h1 className="page-title">{homeCopy.h1}</h1>
      <p className="lede">{homeCopy.lede}</p>
      <p>
        <Link href="/how-it-works" className="button">
          Read the process
        </Link>
      </p>
      <h2>{homeCopy.audienceLabel}</h2>
      <div className="stack">
        {homeCopy.audiences.map((item) => (
          <section key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </section>
        ))}
      </div>
      <h2>{homeCopy.promiseTitle}</h2>
      <p>{homeCopy.promiseBody}</p>
      <p>
        <Link href="/accessibility-features">Feature glossary</Link>
        {" · "}
        <Link href="/referral-partners">For referral partners</Link>
        {" · "}
        <Link href="/contact">Request a consultation</Link>
      </p>
    </article>
  );
}
