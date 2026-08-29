import { verifiedPlatformProfiles } from "@/content/platform-profiles";

/** Official Instagram / TikTok / X / YouTube links when those accounts exist. */
export default function PlatformProfileLinks() {
  const profiles = verifiedPlatformProfiles();
  if (profiles.length === 0) return null;

  return (
    <p className="footer-help" id="platform-profiles">
      Video and social:{" "}
      {profiles.map((profile, index) => (
        <span key={profile.id}>
          {index > 0 ? " · " : null}
          <a href={profile.url} rel="noopener noreferrer">
            {profile.label}
          </a>
        </span>
      ))}
    </p>
  );
}
