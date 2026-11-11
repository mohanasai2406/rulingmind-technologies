import type { Metadata } from "next";
import { Cards, Cta, Intro, PageHero } from "@/components/ui";
import { industries } from "@/lib/content";

export const metadata: Metadata = { title: "Industries" };

export default function Page() {
  return (
    <>
      <PageHero crumb="Industries" eyebrow="Industries" title="Industry insight. Technology with purpose." text="Nine sectors, one shared ambition: move forward with confidence." />
      <section className="block"><div className="wrap">
        <Intro eyebrow="Explore" title="Choose an area to learn more." />
        <Cards items={industries.map((s) => ({ icon: s.icon, title: s.title, text: s.summary, href: `/industries/${s.slug}` }))} />
      </div></section>
      <Cta title="Let’s talk about your goals." text="Our team will respond to your enquiry." />
    </>
  );
}
