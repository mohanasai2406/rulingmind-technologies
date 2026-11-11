"use client";

import { FormEvent, useState } from "react";
import { SERVICES } from "@/lib/validate";

const field = "w-full border border-[#dce2e8] bg-white p-3.5 text-sm";
const label = "mb-[7px] block text-xs font-bold";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ defaultService = "", defaultMessage = "" }: { defaultService?: string; defaultMessage?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid gap-3.5 sm:grid-cols-2">
        <div><label className={label}>FULL NAME *</label><input name="name" required maxLength={100} placeholder="Your name" className={field} /></div>
        <div><label className={label}>WORK EMAIL *</label><input name="email" type="email" required placeholder="name@company.com" className={field} /></div>
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <div><label className={label}>COMPANY</label><input name="company" maxLength={150} placeholder="Company name" className={field} /></div>
        <div>
          <label className={label}>HOW CAN WE HELP? *</label>
          <select name="service" required defaultValue={defaultService} className={field}>
            <option value="">Choose a service</option>
            {SERVICES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div><label className={label}>YOUR MESSAGE *</label><textarea name="message" defaultValue={defaultMessage} required minLength={5} maxLength={4000} placeholder="Tell us about your goals or requirements..." className={`${field} min-h-[135px]`} /></div>
      <button type="submit" disabled={status === "sending"} className="btn justify-self-start disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send enquiry ↗"}
      </button>
      {status === "sent" && <div className="bg-[#e7f6ed] p-3.5 text-[13px] text-[#176b3a]">Thank you! We have received your enquiry and will get back to you soon.</div>}
      {status === "error" && <div className="bg-[#fdecee] p-3.5 text-[13px] text-[#a1182b]">{error}</div>}
      <p className="text-xs leading-relaxed text-[#7c8996]">Add the approved privacy notice before launch.</p>
    </form>
  );
}
