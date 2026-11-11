import { services } from "@/lib/content";
export const SERVICES: string[] = [...services.map((s) => s.title), "Careers", "Other"];

export type ContactInput = {
  name: string; email: string; company?: string; service: string; message: string;
};

type Result = { ok: true; spam: boolean; data: ContactInput } | { ok: false; error: string };

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export function parseContact(body: unknown): Result {
  const b = (body ?? {}) as Record<string, unknown>;
  const data: ContactInput = {
    name: str(b.name), email: str(b.email).toLowerCase(),
    company: str(b.company) || undefined, service: str(b.service), message: str(b.message),
  };

  if (!data.name || data.name.length > 100) return { ok: false, error: "Please enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254) return { ok: false, error: "Please enter a valid email." };
  if (data.company && data.company.length > 150) return { ok: false, error: "Company name is too long." };
  if (!SERVICES.includes(data.service)) return { ok: false, error: "Please choose a service." };
  if (data.message.length < 5 || data.message.length > 4000) return { ok: false, error: "Message must be 5 to 4000 characters." };

  // Honeypot: real users never fill this hidden field.
  return { ok: true, spam: str(b.website) !== "", data };
}
