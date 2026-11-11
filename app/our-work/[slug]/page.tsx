import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta, PageHero } from "@/components/ui";
import { caseStudies } from "@/lib/content";

type P = { params: { slug: string } };
const find = (slug: string) => caseStudies.find((c) => c.slug === slug);

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}
export function generateMetadata({ params }: P): Metadata {
  const c = find(params.slug);
  return { title: c?.title ?? "Case study", description: c?.summary };
}

export default function CaseStudy({ params }: P) {
  const c = find(params.slug);
  if (!c) notFound();
  return (
    <>
      <PageHero crumb={`Our work / ${c.tag}`} eyebrow={c.client} title={c.title} text={c.summary} />
      <section className="block"><div className="wrap grid max-w-[820px] gap-8">
        <div><div className="eyebrow">Challenge</div><p className="mt-2 leading-[1.8] text-muted">{c.challenge}</p></div>
        <div><div className="eyebrow">Solution</div><p className="mt-2 leading-[1.8] text-muted">{c.solution}</p></div>
        <div><div className="eyebrow">Result</div><p className="mt-2 leading-[1.8] text-muted">{c.result}</p></div>
        <Link href="/our-work" className="more">← All work</Link>
      </div></section>
      <Cta title="Have a similar challenge?" text="Let’s explore it together." />
    </>
  );
}
