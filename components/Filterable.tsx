"use client";

import Link from "next/link";
import { useState } from "react";

export type Entry = { href: string; title: string; text: string; tag: string; meta?: string };

export default function Filterable({ items }: { items: Entry[] }) {
  const [tag, setTag] = useState("All");
  const tags = ["All", ...Array.from(new Set(items.map((i) => i.tag)))];
  const shown = tag === "All" ? items : items.filter((i) => i.tag === tag);
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button key={t} onClick={() => setTag(t)} className={`border px-4 py-2 text-[13px] font-bold ${tag === t ? "border-brand bg-brand text-white" : "border-[#dce2e8] bg-white"}`}>{t}</button>
        ))}
      </div>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((i) => (
          <Link key={i.href} href={i.href} className="block min-h-[200px] border border-[#e3e8ee] bg-white p-7 transition hover:-translate-y-[5px] hover:shadow-[0_18px_45px_#0a1a2b12]">
            <div className="text-[11px] font-extrabold uppercase tracking-[1px] text-brand">{i.tag}{i.meta ? ` · ${i.meta}` : ""}</div>
            <h3 className="my-3 font-display text-xl font-bold">{i.title}</h3>
            <p className="text-sm leading-[1.7] text-muted">{i.text}</p>
            <span className="more">Read more ↗</span>
          </Link>
        ))}
      </div>
    </>
  );
}
