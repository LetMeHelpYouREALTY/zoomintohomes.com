import type { Metadata } from "next";
import Link from "next/link";
import HeadingImage from "@/components/site/HeadingImage";
import PageHero from "@/components/site/PageHero";
import { pageImages } from "@/content/page-images";
import { homeCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  path: "/",
  absoluteTitle: true,
  imagePath: pageImages.home.hero.src,
  imageAlt: pageImages.home.hero.alt,
});

const images = pageImages.home;

export default function HomePage() {
  const byHeading = Object.fromEntries(
    images.supporting.map((image) => [image.supportsHeading, image]),
  );

  return (
    <article>
      <PageHero image={images.hero} />
      <h1 className="page-title">{homeCopy.h1}</h1>
      <p className="lede">{homeCopy.lede}</p>
      <p>
        <Link href="/how-it-works" className="button">
          Read the process
        </Link>
      </p>
      <h2>{homeCopy.audienceLabel}</h2>
      {byHeading[homeCopy.audienceLabel] ? (
        <HeadingImage image={byHeading[homeCopy.audienceLabel]} />
      ) : null}
      <div className="stack">
        {homeCopy.audiences.map((item) => (
          <section key={item.title} className="card">
            {byHeading[item.title] ? (
              <HeadingImage image={byHeading[item.title]} />
            ) : null}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </section>
        ))}
      </div>
      <h2>{homeCopy.promiseTitle}</h2>
      {byHeading[homeCopy.promiseTitle] ? (
        <HeadingImage image={byHeading[homeCopy.promiseTitle]} />
      ) : null}
      <p>{homeCopy.promiseBody}</p>
      {byHeading[homeCopy.h1] ? (
        <HeadingImage image={byHeading[homeCopy.h1]} />
      ) : null}
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
