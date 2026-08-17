import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { resolveFubEnv } from "./env";

const keys = [
  "FUB_API_KEY",
  "FOLLOW_UP_BOSS_API_KEY",
  "FOLLOW_UP_BOSS_KEY",
  "FUB_SYSTEM_KEY",
  "FOLLOW_UP_BOSS_SYSTEM_KEY",
  "FOLLOW_UP_BOSS_BASE_URL",
  "FUB_BASE_URL",
] as const;

describe("resolveFubEnv", () => {
  const snapshot: Partial<Record<(typeof keys)[number], string | undefined>> =
    {};

  beforeEach(() => {
    for (const key of keys) {
      snapshot[key] = process.env[key];
      delete process.env[key];
    }
  });

  afterEach(() => {
    for (const key of keys) {
      const value = snapshot[key];
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  });

  it("prefers FUB_API_KEY and default base URL", () => {
    process.env.FUB_API_KEY = "fub-key";
    const resolved = resolveFubEnv();
    expect(resolved.apiKey).toBe("fub-key");
    expect(resolved.baseUrl).toBe("https://api.followupboss.com/v1");
  });

  it("accepts FOLLOW_UP_BOSS_* aliases and strips trailing slash", () => {
    process.env.FOLLOW_UP_BOSS_API_KEY = "alias-key";
    process.env.FOLLOW_UP_BOSS_SYSTEM_KEY = "sys";
    process.env.FOLLOW_UP_BOSS_BASE_URL = "https://api.followupboss.com/v1/";
    const resolved = resolveFubEnv();
    expect(resolved.apiKey).toBe("alias-key");
    expect(resolved.systemKey).toBe("sys");
    expect(resolved.baseUrl).toBe("https://api.followupboss.com/v1");
  });
});
