import PageHero from "@/components/site/PageHero";
import { resolvePageHero, type PageHeroOverrides } from "@/content/page-heroes";

type RoutePageHeroProps = PageHeroOverrides & {
  path: string;
  showWidgets?: boolean;
  showCalendly?: boolean;
  calendlyId?: string;
  tourHref?: string;
  tourLabel?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  singleCta?: boolean;
  listingDensity?: "default" | "three";
};

/**
 * Looks up the split-hero copy for a route. Pass overrides for dynamic
 * glossary, listing, and feature pages.
 */
export default function RoutePageHero({
  path,
  showWidgets,
  showCalendly,
  calendlyId,
  tourHref,
  tourLabel,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  singleCta,
  listingDensity,
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
      showCalendly={showCalendly}
      calendlyId={calendlyId}
      tourHref={tourHref}
      tourLabel={tourLabel}
      primaryHref={primaryHref}
      primaryLabel={primaryLabel}
      secondaryHref={secondaryHref}
      secondaryLabel={secondaryLabel}
      singleCta={singleCta}
      listingDensity={listingDensity}
    />
  );
}
