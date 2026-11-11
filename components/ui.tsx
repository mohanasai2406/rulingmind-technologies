import Link from "next/link";
import type { ReactNode } from "react";
import type { Item, Status } from "@/lib/content";
import Icon from "./Icon";

const badge: Record<Status, string> = {
  "Available Now": "bg-[#d9f5e5] text-[#12804a]", Pilot: "bg-[#dce9ff] text-[#1f5fd1]", Planned: "bg-[#fff1c9] text-[#9a6a00]",
};
export const Badge = ({ status }: { status: Status }) => (
  <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${badge[status]}`}>{status}</span>
);

export function PageHero({ crumb, eyebrow, title, text }: { crumb: string; eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-cover bg-center py-20 text-white md:py-[105px]"
      style={{ backgroundImage: "linear-gradient(90deg,#081725ed,#08172570),url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85')" }}>
      <div className="wrap">
        <div className="mb-[22px] text-xs text-[#b9c4d0]">Home / {crumb}</div>
        <div className="eyebrow !text-[#8ab8ff]">{eyebrow}</div>
        <h1 className="h1 max-w-[820px]">{title}</h1>
        <p className="max-w-[620px] text-[17px] leading-[1.8] text-[#d4dce5]">{text}</p>
      </div>
    </section>
  );
}

export function Intro({ eyebrow, title, text, dark, children }: { eyebrow: string; title: string; text?: ReactNode; dark?: boolean; children?: ReactNode }) {
  return (
    <div className="mb-10 max-w-[720px]">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="h2">{title}</h2>
      {text && <p className={`leading-[1.8] ${dark ? "text-[#aebdcb]" : "text-muted"}`}>{text}</p>}
      {children}
    </div>
  );
}

export function Cards({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => {
        const card = (
          <div className="h-full min-h-[230px] border border-[#e3e8ee] bg-white p-7 text-ink transition hover:-translate-y-[5px] hover:shadow-[0_18px_45px_#0a1a2b12]">
            {c.num && <div className="text-[11px] font-extrabold tracking-[1px] text-brand">{c.num}</div>}
            <div className="flex items-start justify-between">
              {c.icon ? <div className="my-[22px] text-brand"><Icon name={c.icon} size={26} /></div> : <span />}
              {c.badge && <Badge status={c.badge} />}
            </div>
            <h3 className="mb-2.5 font-display text-xl font-bold">{c.title}</h3>
            <p className="text-sm leading-[1.7] text-muted">{c.text}</p>
            {c.href && <span className="more">Learn more ↗</span>}
          </div>
        );
        return c.href ? <Link key={c.title} href={c.href} className="block">{card}</Link> : <div key={c.title}>{card}</div>;
      })}
    </div>
  );
}

export function Photo({ src }: { src: string }) {
  return <div role="img" aria-label="" className="min-h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />;
}

export function Cta({ title, text, service }: { title: string; text: string; service?: string }) {
  return (
    <section className="bg-brand py-[55px] text-white"><div className="wrap flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div><h2 className="font-display text-[30px] font-bold">{title}</h2><p className="text-[#dbe8ff]">{text}</p></div>
      <Link href={service ? `/contact?service=${encodeURIComponent(service)}` : "/contact"} className="btn-outline self-start">Get a Consultation ↗</Link>
    </div></section>
  );
}
