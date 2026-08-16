type KeyFactsProps = {
  title?: string;
  facts: string[];
};

export default function KeyFacts({
  title = "Key facts",
  facts,
}: KeyFactsProps) {
  return (
    <section className="key-facts" aria-labelledby="key-facts-heading">
      <h2 id="key-facts-heading">{title}</h2>
      <ul>
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </section>
  );
}
