type RelatedQuestionsProps = {
  title?: string;
  questions: { href: string; label: string }[];
};

/** Internal question links for topical entity reinforcement. */
export default function RelatedQuestions({
  title = "Related questions on this site",
  questions,
}: RelatedQuestionsProps) {
  return (
    <nav className="related-questions" aria-labelledby="related-q-heading">
      <h2 id="related-q-heading">{title}</h2>
      <ul>
        {questions.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
