"use client";

import { Button } from "@/components/ui/button";
import {
  REALSCOUT_PORTAL_URL,
  realScoutOfficeListingsHtml,
} from "@/content/widgets";

export default function RealScoutListings() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-600 text-lg">
              Discover exceptional homes in Las Vegas and Henderson
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <a
              href={REALSCOUT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Properties
            </a>
          </Button>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: realScoutOfficeListingsHtml(),
          }}
        />
      </div>
    </section>
  );
}
