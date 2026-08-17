export const consultationRoles = [
  "Buyer",
  "Seller",
  "I'm introducing a client",
  "Other",
] as const;

export type ConsultationRole = (typeof consultationRoles)[number];

export type ConsultationRequest = {
  name: string;
  email: string;
  phone: string;
  role: ConsultationRole;
  message: string;
};
