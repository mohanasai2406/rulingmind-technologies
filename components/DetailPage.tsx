import Link from "next/link";
import { Check } from "lucide-react";
import { Cta, PageHero } from "@/components/ui";
import Icon from "@/components/Icon";
import type { Offering } from "@/lib/content";

type Props = { kind: string; base: string; item: Offering; all: Offering[]; prefillService?: boolean };

export default function DetailPage({ kind, base, item, all, prefillService }: Props) {
  return (
    <>
      <PageHero crumb={`${kind} / ${item.title}`} eyebrow={kind} title={item.title} text={item.summary} />
      <section className="block"><div className="wrap">
        <div className="mb-10 text-brand"><Icon name={item.icon} size={40} /></div>
        <div className={`grid gap-[18px] ${item.points.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
          {item.points.map((p) => (
            <div key={p.heading} className="border border-[#e3e8ee] bg-white p-7">
              <div className="eyebrow mb-4">{p.heading}</div>
              <ul className="grid gap-3">
                {p.items.map((i) => <li key={i} className="flex gap-3 text-[15px]"><Check size={18} className="mt-0.5 shrink-0 text-teal" />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <div className="eyebrow mb-4">Explore more {kind.toLowerCase()}</div>
          <div className="flex flex-wrap gap-3">
            {all.filter((x) => x.slug !== item.slug).map((x) => (
              <Link key={x.slug} href={`${base}/${x.slug}`} className="border border-[#dce2e8] bg-white px-4 py-2 text-[13px] font-bold hover:border-brand hover:text-brand">{x.title}</Link>
            ))}
          </div>
        </div>
      </div></section>
      <Cta title="Ready to talk?" text={`Tell us about your ${item.title.toLowerCase()} goals.`} service={prefillService ? item.title : undefined} />
    </>
  );
}
