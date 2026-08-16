import type { FaqItem } from "@/content/seo-enhance";

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
};

export default function FaqSection({
  title = "Frequently asked questions",
  items,
}: FaqSectionProps) {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">{title}</h2>
      <div className="stack">
        {items.map((item) => (
          <article key={item.question} className="card faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
