import type { Metadata } from "next";
import Filterable from "@/components/Filterable";
import { Intro, PageHero } from "@/components/ui";
import { articles } from "@/lib/content";

export const metadata: Metadata = { title: "Insights" };

export default function Insights() {
  const items = articles.map((a) => ({ href: `/insights/${a.slug}`, title: a.title, text: a.summary, tag: a.category, meta: a.date }));
  return (
    <>
      <PageHero crumb="Insights" eyebrow="Insights" title="Ideas and practical guidance." text="Short reads on cloud, AI, security and web." />
      <section className="block"><div className="wrap">
        <Intro eyebrow="Articles" title="Browse by category." />
        <Filterable items={items} />
      </div></section>
    </>
  );
}
