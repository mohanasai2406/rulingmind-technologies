import type { Metadata } from "next";
import Filterable from "@/components/Filterable";
import { Intro, PageHero } from "@/components/ui";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = { title: "Our Work" };

export default function OurWork() {
  const items = caseStudies.map((c) => ({ href: `/our-work/${c.slug}`, title: c.title, text: c.summary, tag: c.tag, meta: c.client }));
  return (
    <>
      <PageHero crumb="Our work" eyebrow="Our work" title="Results our customers can point to." text="A selection of projects across cloud, AI and web." />
      <section className="block"><div className="wrap">
        <Intro eyebrow="Case studies" title="Filter by capability." />
        <Filterable items={items} />
      </div></section>
    </>
  );
}
