"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { searchIndex } from "@/lib/search";

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    return searchIndex.filter((i) => `${i.title} ${i.text} ${i.type}`.toLowerCase().includes(t)).slice(0, 8);
  }, [q]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Search" className="fixed inset-0 z-50 bg-navy/90 p-4 pt-[12vh] backdrop-blur-sm" onClick={onClose}>
      <div className="mx-auto max-w-[640px] bg-white text-ink shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-[#e3e8ee] px-4">
          <Search size={18} className="text-muted" />
          <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search services, industries, solutions, insights..." className="h-14 w-full text-[15px] outline-none" />
          <button onClick={onClose} aria-label="Close search"><X size={18} /></button>
        </div>
        <ul className="max-h-[50vh] overflow-auto">
          {results.map((r) => (
            <li key={r.href}>
              <Link href={r.href} onClick={onClose} className="block border-b border-[#f0f3f6] px-4 py-3 hover:bg-soft">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand">{r.type}</span>
                <div className="font-semibold">{r.title}</div>
              </Link>
            </li>
          ))}
          {q.trim().length >= 2 && results.length === 0 && <li className="px-4 py-6 text-sm text-muted">No results for “{q}”.</li>}
          {q.trim().length < 2 && <li className="px-4 py-6 text-sm text-muted">Type at least 2 characters.</li>}
        </ul>
      </div>
    </div>
  );
}
