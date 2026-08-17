/**
 * Resolve Follow Up Boss credentials from Vercel / local env aliases.
 * Prefer FUB_* names; accept FOLLOW_UP_BOSS_* mirrors used in some projects.
 */

const DEFAULT_FUB_BASE_URL = "https://api.followupboss.com/v1";

function firstDefined(...values: Array<string | undefined>): string | undefined {
  for (const value of values) {
    const trimmed = value?.trim();
    if (trimmed) return trimmed;
  }
  return undefined;
}

export type ResolvedFubEnv = {
  apiKey: string;
  systemKey?: string;
  baseUrl: string;
};

export function resolveFubEnv(): ResolvedFubEnv {
  const apiKey =
    firstDefined(
      process.env.FUB_API_KEY,
      process.env.FOLLOW_UP_BOSS_API_KEY,
      process.env.FOLLOW_UP_BOSS_KEY,
    ) || "";

  const systemKey = firstDefined(
    process.env.FUB_SYSTEM_KEY,
    process.env.FOLLOW_UP_BOSS_SYSTEM_KEY,
  );

  const rawBase =
    firstDefined(
      process.env.FOLLOW_UP_BOSS_BASE_URL,
      process.env.FUB_BASE_URL,
    ) || DEFAULT_FUB_BASE_URL;

  const baseUrl = rawBase.replace(/\/$/, "");

  return { apiKey, systemKey, baseUrl };
}

export function createFubClientFromEnv() {
  const { apiKey, systemKey, baseUrl } = resolveFubEnv();
  // Lazy import avoided — callers import FollowUpBossClient directly with this config.
  return { apiKey, systemKey, baseUrl };
}
