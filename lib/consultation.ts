import type { ConsultationRequest } from "@/content/consultation";

/**
 * Posts to the existing Follow Up Boss lead capture route when FUB is configured.
 */
export async function submitConsultation(
  request: ConsultationRequest,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const response = await fetch("/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: request.name,
        email: request.email,
        phone: request.phone,
        message: request.message,
        source: "zoomintohomes-consultation",
        tags: [
          "zoom-into-homes",
          "video-first",
          `role:${request.role.toLowerCase().replace(/\s+/g, "-")}`,
        ],
        customFields: {
          consultationRole: request.role,
          site: "zoomintohomes.com",
        },
      }),
    });

    const payload = (await response.json().catch(() => ({}))) as {
      error?: string;
      success?: boolean;
    };

    if (!response.ok) {
      return {
        ok: false,
        error:
          payload.error ||
          "We could not send that request. Call (702) 222-1964 and we will take it by phone.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Network error. Call (702) 222-1964 or try again in a moment.",
    };
  }
}
