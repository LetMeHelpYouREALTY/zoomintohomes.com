import AnswerBlock from "@/components/site/AnswerBlock";
import FaqSection from "@/components/site/FaqSection";
import JsonLd from "@/components/site/JsonLd";
import KeyFacts from "@/components/site/KeyFacts";
import RelatedQuestions from "@/components/site/RelatedQuestions";
import { pageSeoEnhance } from "@/content/seo-enhance";
import { buildFaqPage } from "@/lib/schema";

type PageKey = keyof typeof pageSeoEnhance;

type PageSeoSectionsProps = {
  page: PageKey;
  slot: "intro" | "closing";
  related?: { href: string; label: string }[];
};

/**
 * Intro slot: direct answer + entity line (first ~150–200 words for GEO/AEO).
 * Closing slot: key facts, FAQs (+ FAQPage JSON-LD), related questions.
 */
export default function PageSeoSections({
  page,
  slot,
  related,
}: PageSeoSectionsProps) {
  const enhance = pageSeoEnhance[page];

  if (slot === "intro") {
    return (
      <>
        <AnswerBlock>{enhance.answerBlock}</AnswerBlock>
        <p className="entity-line">{enhance.entityPhrases.join(" · ")}</p>
      </>
    );
  }

  return (
    <>
      <JsonLd data={buildFaqPage(enhance.faqs)} />
      <KeyFacts facts={enhance.keyFacts} />
      <FaqSection items={enhance.faqs} />
      {related && related.length > 0 ? (
        <RelatedQuestions questions={related} />
      ) : null}
    </>
  );
}
