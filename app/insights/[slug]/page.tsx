import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui";
import { articles } from "@/lib/content";

type P = { params: { slug: string } };
const find = (slug: string) => articles.find((a) => a.slug === slug);

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export function generateMetadata({ params }: P): Metadata {
  const a = find(params.slug);
  return { title: a?.title ?? "Article", description: a?.summary };
}

export default function ArticlePage({ params }: P) {
  const a = find(params.slug);
  if (!a) notFound();
  return (
    <>
      <PageHero crumb={`Insights / ${a.category}`} eyebrow={`${a.category} · ${a.date}`} title={a.title} text={a.summary} />
      <article className="block"><div className="wrap max-w-[760px]">
        {a.body.map((p, i) => <p key={i} className="mb-6 text-[17px] leading-[1.9]">{p}</p>)}
        <Link href="/insights" className="more">← Back to insights</Link>
      </div></article>
    </>
  );
}
