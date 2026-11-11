import type { Metadata } from "next";
import { Cards, Cta, Intro, PageHero } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  const groups = Array.from(new Set(services.map((s) => s.group)));
  return (
    <>
      <PageHero crumb="Services" eyebrow="Our capabilities" title="Engineering the foundations of what’s next." text="Fourteen connected services to help you modernise, innovate and operate with confidence." />
      {groups.map((g, i) => (
        <section key={g} className={`block ${i % 2 ? "bg-soft" : ""}`}><div className="wrap">
          <Intro eyebrow="Services" title={g!} />
          <Cards items={services.filter((s) => s.group === g).map((s) => ({ icon: s.icon, title: s.title, text: s.summary, href: `/services/${s.slug}` }))} />
        </div></section>
      ))}
      <Cta title="Not sure where to start?" text="Tell us your goals and we will recommend a path." />
    </>
  );
}
