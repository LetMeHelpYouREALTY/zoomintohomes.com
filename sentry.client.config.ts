// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Marketing pages: keep error capture, skip Session Replay JS (~100KB+).
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.05,

  debug: false,
});
