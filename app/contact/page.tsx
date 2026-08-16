import type { Metadata } from "next";
import ConsultationForm from "@/components/site/ConsultationForm";
import { contactCopy } from "@/content/pages";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Request a consultation",
  description: pageMeta.contact.description,
};

export default function ContactPage() {
  return (
    <article>
      <h1 className="page-title">{contactCopy.h1}</h1>
      <p className="lede">{contactCopy.lede}</p>
      <ConsultationForm />
    </article>
  );
}
