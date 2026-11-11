"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { industries, services, solutions } from "@/lib/content";
import SearchOverlay from "./SearchOverlay";

type MenuKey = "services" | "industries" | "solutions" | null;
const groups = Array.from(new Set(services.map((s) => s.group)));
const plain = [["/", "Home"], ["/about", "About Us"]] as const;
const tail = [["/careers", "Careers"], ["/insights", "Insights"]] as const;

export default function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => { setMenu(null); setMobile(false); }, [path]);

  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
  const link = (href: string) => `px-1 py-2 text-[13px] ${active(href) ? "text-white" : "text-[#d8e0e8] hover:text-white"}`;
  const trigger = (key: Exclude<MenuKey, null>, label: string, href: string) => (
    <button
      aria-expanded={menu === key}
      onMouseEnter={() => setMenu(key)}
      onClick={() => setMenu(menu === key ? null : key)}
      className={`flex items-center gap-1 ${link(href)}`}
    >
      {label}<ChevronDown size={14} className={menu === key ? "rotate-180" : ""} />
    </button>
  );
  const dd = "absolute left-0 right-0 top-full border-t border-[#e3e8ee] bg-white text-ink shadow-[0_24px_60px_#08172533]";
  const item = "block px-3 py-2 text-[14px] hover:bg-soft hover:text-brand";

  return (
    <header className="sticky top-0 z-40 bg-navy text-white" onMouseLeave={() => setMenu(null)}>
      <div className="wrap flex h-[78px] items-center justify-between">
        <Link href="/" className="font-display text-[22px] font-extrabold tracking-[-1px]">
          RULING<b className="text-brand">MIND</b>
          <small className="ml-[7px] font-sans text-[10px] font-bold tracking-[3px] text-[#b8c6d4]">TECH</small>
        </Link>

        <nav className="hidden items-center gap-[22px] xl:flex" aria-label="Primary">
          {plain.map(([h, l]) => <Link key={h} href={h} className={link(h)} onMouseEnter={() => setMenu(null)}>{l}</Link>)}
          {trigger("services", "Services", "/services")}
          {trigger("industries", "Industries", "/industries")}
          {trigger("solutions", "Solutions", "/solutions")}
          {tail.map(([h, l]) => <Link key={h} href={h} className={link(h)} onMouseEnter={() => setMenu(null)}>{l}</Link>)}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Search" onClick={() => setSearch(true)} className="p-2 hover:text-brand"><Search size={18} /></button>
          <Link href="/contact" className="btn hidden sm:inline-block">Contact Us</Link>
          <button className="p-2 xl:hidden" aria-label="Toggle menu" onClick={() => setMobile(!mobile)}>{mobile ? <X /> : <Menu />}</button>
        </div>
      </div>

      {/* Desktop menus */}
      {menu === "services" && (
        <div className={`${dd} hidden xl:block`}><div className="wrap grid grid-cols-[repeat(3,1fr)_280px] gap-8 py-8">
          {groups.map((g) => (
            <div key={g}>
              <div className="eyebrow mb-3">{g}</div>
              {services.filter((s) => s.group === g).map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className={item}>{s.title}</Link>)}
            </div>
          ))}
          <div className="bg-soft p-6">
            <div className="font-display text-lg font-bold">Not sure where to start?</div>
            <p className="mb-4 mt-2 text-sm text-muted">Talk to an expert about your goals.</p>
            <Link href="/contact" className="btn">Get a Consultation</Link>
            <Link href="/services" className="more block">All services ↗</Link>
          </div>
        </div></div>
      )}
      {menu === "industries" && (
        <div className={`${dd} hidden xl:block`}><div className="wrap grid grid-cols-3 gap-x-8 py-8">
          {industries.map((s) => <Link key={s.slug} href={`/industries/${s.slug}`} className={item}>{s.title}</Link>)}
        </div></div>
      )}
      {menu === "solutions" && (
        <div className={`${dd} hidden xl:block`}><div className="wrap grid grid-cols-2 gap-x-8 py-8">
          {solutions.map((s) => <Link key={s.slug} href={`/solutions/${s.slug}`} className={item}>{s.title}</Link>)}
        </div></div>
      )}

      {/* Mobile menu */}
      {mobile && (
        <nav className="max-h-[calc(100vh-78px)] overflow-auto bg-navy px-4 pb-6 xl:hidden" aria-label="Mobile">
          {plain.map(([h, l]) => <Link key={h} href={h} className="block border-b border-white/10 py-3 text-sm">{l}</Link>)}
          {([["Services", services, "services"], ["Industries", industries, "industries"], ["Solutions", solutions, "solutions"]] as const).map(([label, list, base]) => (
            <details key={label} className="border-b border-white/10">
              <summary className="cursor-pointer py-3 text-sm">{label}</summary>
              <div className="pb-3 pl-3">
                <Link href={`/${base}`} className="block py-1.5 text-[13px] font-bold text-brand">All {label.toLowerCase()}</Link>
                {list.map((s) => <Link key={s.slug} href={`/${base}/${s.slug}`} className="block py-1.5 text-[13px] text-[#c7d3df]">{s.title}</Link>)}
              </div>
            </details>
          ))}
          {tail.map(([h, l]) => <Link key={h} href={h} className="block border-b border-white/10 py-3 text-sm">{l}</Link>)}
          <Link href="/contact" className="btn mt-5">Contact Us</Link>
        </nav>
      )}
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </header>
  );
}
