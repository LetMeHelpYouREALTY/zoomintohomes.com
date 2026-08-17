import PageHero, { type PageHeroProps } from "@/components/site/PageHero";

type TourHeroProps = Omit<PageHeroProps, "calendlyId"> & {
  servicePoints: readonly string[];
};

/**
 * Homepage split hero. Shares markup with PageHero so inner pages match.
 */
export default function TourHero(props: TourHeroProps) {
  return <PageHero {...props} calendlyId="schedule-home" />;
}
