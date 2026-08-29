import AgentPortrait from "@/components/site/AgentPortrait";
import { practicePortraits } from "@/content/agent";

type PracticeTeamProps = {
  heading?: string;
};

export default function PracticeTeam({
  heading = "Who you work with",
}: PracticeTeamProps) {
  return (
    <section className="practice-team" aria-labelledby="practice-team-heading">
      <h2 id="practice-team-heading">{heading}</h2>
      <ul className="practice-team-list">
        {practicePortraits.map((person) => (
          <li key={person.name} className="practice-team-card">
            <AgentPortrait person={person.id} variant="card" />
            <h3>{person.name}</h3>
            <p className="meta">{person.license}</p>
            <p>{person.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
