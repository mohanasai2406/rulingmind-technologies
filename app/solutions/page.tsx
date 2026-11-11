import type { Metadata } from "next";
import { Cards, Cta, Intro, PageHero } from "@/components/ui";
import { solutions } from "@/lib/content";

export const metadata: Metadata = { title: "Solutions" };

export default function Page() {
  return (
    <>
      <PageHero crumb="Solutions" eyebrow="Solutions" title="Turn complex challenges into clear opportunities." text="Ten solution areas that combine our services around your goals." />
      <section className="block"><div className="wrap">
        <Intro eyebrow="Explore" title="Choose an area to learn more." />
        <Cards items={solutions.map((s) => ({ icon: s.icon, title: s.title, text: s.summary, href: `/solutions/${s.slug}` }))} />
      </div></section>
      <Cta title="Let’s talk about your goals." text="Our team will respond to your enquiry." />
    </>
  );
}
