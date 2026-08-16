import type { ConsultationRequest } from "@/content/consultation";

/**
 * Submission destination is a Claude-side decision.
 * This stub is typed so the form can be built and validated without a live backend.
 */
export async function submitConsultation(
  _request: ConsultationRequest,
): Promise<{ ok: true } | { ok: false; error: string }> {
  return {
    ok: false,
    error: "PLACEHOLDER: submission endpoint is not connected.",
  };
}
