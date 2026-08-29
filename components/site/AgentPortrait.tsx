import Image from "next/image";
import {
  geneBoylePortrait,
  janDuffyPortrait,
  type PracticePortrait,
} from "@/content/agent";

type AgentPerson = "gene" | "jan";

type AgentPortraitProps = {
  person?: AgentPerson;
  variant?: "card" | "header" | "footer";
};

function portraitFor(person: AgentPerson): PracticePortrait {
  return person === "jan" ? janDuffyPortrait : geneBoylePortrait;
}

/**
 * Agent headshot. Header/footer sit next to the name, so those alts stay short.
 * Jan's file is already a circular gold-ring badge with transparent corners.
 */
export default function AgentPortrait({
  person = "gene",
  variant = "card",
}: AgentPortraitProps) {
  const portrait = portraitFor(person);
  const roundClass =
    person === "jan" ? "agent-photo-badge" : "agent-photo-crop";

  if (variant === "header") {
    return (
      <Image
        src={portrait.avatarSrc}
        alt={portrait.shortAlt}
        width={40}
        height={40}
        className={`site-logo-photo ${roundClass}`}
        priority
      />
    );
  }

  if (variant === "footer") {
    return (
      <Image
        src={portrait.avatarSrc}
        alt=""
        width={56}
        height={56}
        className={`footer-agent-photo ${roundClass}`}
      />
    );
  }

  return (
    <figure className="agent-portrait-card">
      <Image
        src={portrait.squareSrc}
        alt={portrait.alt}
        width={portrait.square}
        height={portrait.square}
        sizes="(max-width: 40rem) 10rem, 12rem"
        className={roundClass}
      />
    </figure>
  );
}
