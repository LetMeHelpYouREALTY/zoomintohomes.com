import PageHero from "@/components/site/PageHero";
import { resolvePageHero, type PageHeroOverrides } from "@/content/page-heroes";

type RoutePageHeroProps = PageHeroOverrides & {
  path: string;
  showWidgets?: boolean;
  calendlyId?: string;
  tourHref?: string;
  tourLabel?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/**
 * Looks up the split-hero copy for a route. Pass overrides for dynamic
 * glossary, listing, and feature pages.
 */
export default function RoutePageHero({
  path,
  showWidgets,
  calendlyId,
  tourHref,
  tourLabel,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  ...overrides
}: RoutePageHeroProps) {
  const spec = resolvePageHero(path, overrides);
  return (
    <PageHero
      image={spec.image}
      headline={spec.headline}
      support={spec.support}
      explanation={spec.explanation}
      servicePoints={spec.servicePoints}
      showWidgets={showWidgets}
      calendlyId={calendlyId}
      tourHref={tourHref}
      tourLabel={tourLabel}
      primaryHref={primaryHref}
      primaryLabel={primaryLabel}
      secondaryHref={secondaryHref}
      secondaryLabel={secondaryLabel}
    />
  );
}
