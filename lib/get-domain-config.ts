import { getDomainConfig, type DomainConfig } from "./domain-config";

const SITE_HOST = "zoomintohomes.com";

/**
 * This repo ships zoomintohomes.com only. Avoid `headers()` here so the
 * homepage can be statically generated / ISR-cached on Vercel (mobile TTFB).
 */
export async function getPageDomainConfig(): Promise<DomainConfig> {
  return getDomainConfig(SITE_HOST);
}
