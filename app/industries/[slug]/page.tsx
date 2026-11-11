import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { industries } from "@/lib/content";

type P = { params: { slug: string } };
const find = (slug: string) => industries.find((s) => s.slug === slug);

export function generateStaticParams() {
  return industries.map((s) => ({ slug: s.slug }));
}
export function generateMetadata({ params }: P): Metadata {
  const s = find(params.slug);
  return { title: s?.title ?? "Industries", description: s?.summary };
}

export default function Page({ params }: P) {
  const s = find(params.slug);
  if (!s) notFound();
  return <DetailPage kind="Industries" base="/industries" item={s} all={industries} prefillService={false} />;
}
