import type { ReactNode } from "react";

type TourStageProps = {
  title: string;
  children: ReactNode;
  caption?: string;
};

/** Cinematic frame used for sample tours and measurement stills. */
export default function TourStage({ title, children, caption }: TourStageProps) {
  return (
    <figure className="tour-stage">
      <div className="tour-stage-chrome">
        <span className="tour-stage-dot" aria-hidden="true" />
        <span className="tour-stage-dot" aria-hidden="true" />
        <span className="tour-stage-dot" aria-hidden="true" />
        <span className="tour-stage-label">{title}</span>
      </div>
      <div className="tour-stage-viewport">{children}</div>
      {caption ? <figcaption className="tour-stage-caption">{caption}</figcaption> : null}
    </figure>
  );
}
