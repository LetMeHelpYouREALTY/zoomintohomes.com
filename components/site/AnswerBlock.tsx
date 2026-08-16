type AnswerBlockProps = {
  title?: string;
  children: string;
};

/** Direct-answer block for AEO/GEO extraction (first-screen HTML). */
export default function AnswerBlock({
  title = "Direct answer",
  children,
}: AnswerBlockProps) {
  return (
    <section className="answer-block" aria-label={title}>
      <h2 className="answer-block-title">{title}</h2>
      <p className="answer-block-body">{children}</p>
    </section>
  );
}
