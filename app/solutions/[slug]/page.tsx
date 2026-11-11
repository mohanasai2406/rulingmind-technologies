import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { solutions } from "@/lib/content";

type P = { params: { slug: string } };
const find = (slug: string) => solutions.find((s) => s.slug === slug);

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export function generateMetadata({ params }: P): Metadata {
  const s = find(params.slug);
  return { title: s?.title ?? "Solutions", description: s?.summary };
}

export default function Page({ params }: P) {
  const s = find(params.slug);
  if (!s) notFound();
  return <DetailPage kind="Solutions" base="/solutions" item={s} all={solutions} prefillService={false} />;
}
