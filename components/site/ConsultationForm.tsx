"use client";

import { useId, useState, type FormEvent } from "react";
import {
  consultationRoles,
  type ConsultationRequest,
} from "@/content/consultation";
import { contactCopy } from "@/content/pages";
import { submitConsultation } from "@/lib/consultation";

type FieldErrors = Partial<Record<keyof ConsultationRequest, string>>;

function validate(values: ConsultationRequest): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Enter your name (at least 2 characters).";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter an email address with an @ and a domain.";
  }
  if (values.phone.trim().length < 7) {
    errors.phone = "Enter a phone number we can call back.";
  }
  if (!consultationRoles.includes(values.role)) {
    errors.role = "Choose a role from the list.";
  }
  if (values.message.trim().length < 10) {
    errors.message =
      "Add a short note about the search or the referral (at least 10 characters).";
  }
  return errors;
}

const empty: ConsultationRequest = {
  name: "",
  email: "",
  phone: "",
  role: "Buyer",
  message: "",
};

export default function ConsultationForm() {
  const id = useId();
  const [values, setValues] = useState<ConsultationRequest>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [formMessage, setFormMessage] = useState(contactCopy.stubNotice);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormMessage(
        "The form has errors. Fix the fields listed below, then submit again.",
      );
      return;
    }
    setStatus("submitting");
    const result = await submitConsultation(values);
    setStatus("done");
    if (result.ok) {
      setFormMessage("Request recorded.");
      setValues(empty);
    } else {
      setFormMessage(result.error);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="consult-form">
      <p className="form-status" role="status" aria-live="polite">
        {formMessage}
      </p>

      <div className="field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input
          id={`${id}-name`}
          name="name"
          autoComplete="name"
          value={values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={
            errors.name ? `${id}-name-hint ${id}-name-error` : `${id}-name-hint`
          }
          onChange={(event) =>
            setValues({ ...values, name: event.target.value })
          }
        />
        <p id={`${id}-name-hint`} className="hint">
          As you would like it written back to you.
        </p>
        {errors.name ? (
          <p id={`${id}-name-error`} className="field-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={
            errors.email
              ? `${id}-email-hint ${id}-email-error`
              : `${id}-email-hint`
          }
          onChange={(event) =>
            setValues({ ...values, email: event.target.value })
          }
        />
        <p id={`${id}-email-hint`} className="hint">
          We use this to send the feature brief.
        </p>
        {errors.email ? (
          <p id={`${id}-email-error`} className="field-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor={`${id}-phone`}>Phone</label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={
            errors.phone
              ? `${id}-phone-hint ${id}-phone-error`
              : `${id}-phone-hint`
          }
          onChange={(event) =>
            setValues({ ...values, phone: event.target.value })
          }
        />
        <p id={`${id}-phone-hint`} className="hint">
          Include area code.
        </p>
        {errors.phone ? (
          <p id={`${id}-phone-error`} className="field-error">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor={`${id}-role`}>I am a</label>
        <select
          id={`${id}-role`}
          name="role"
          value={values.role}
          aria-invalid={Boolean(errors.role)}
          aria-describedby={errors.role ? `${id}-role-error` : undefined}
          onChange={(event) =>
            setValues({
              ...values,
              role: event.target.value as ConsultationRequest["role"],
            })
          }
        >
          {consultationRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        {errors.role ? (
          <p id={`${id}-role-error`} className="field-error">
            {errors.role}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor={`${id}-message`}>How can we help?</label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message
              ? `${id}-message-hint ${id}-message-error`
              : `${id}-message-hint`
          }
          onChange={(event) =>
            setValues({ ...values, message: event.target.value })
          }
        />
        <p id={`${id}-message-hint`} className="hint">
          Required features, timeline, and whether this is a referral.
        </p>
        {errors.message ? (
          <p id={`${id}-message-error`} className="field-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="button"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting…" : "Submit request"}
      </button>
    </form>
  );
}
