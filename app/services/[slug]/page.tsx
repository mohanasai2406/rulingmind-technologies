import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { services } from "@/lib/content";

type P = { params: { slug: string } };
const find = (slug: string) => services.find((s) => s.slug === slug);

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export function generateMetadata({ params }: P): Metadata {
  const s = find(params.slug);
  return { title: s?.title ?? "Services", description: s?.summary };
}

export default function Page({ params }: P) {
  const s = find(params.slug);
  if (!s) notFound();
  return <DetailPage kind="Services" base="/services" item={s} all={services} prefillService={true} />;
}
