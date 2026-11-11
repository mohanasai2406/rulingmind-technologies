import type { Metadata } from "next";
import { Cards, Intro, PageHero, Photo } from "@/components/ui";
import { img, leadership, values } from "@/lib/content";

export const metadata: Metadata = { title: "About Us" };

export default function About() {
  return (
    <>
      <PageHero crumb="About us" eyebrow="About RulingMindTech" title="We believe technology should make progress possible." text="We bring curious minds, practical engineering and a commitment to outcomes to every customer relationship." />
      <section id="who-we-are" className="block"><div className="wrap split">
        <Intro eyebrow="Who we are" title="A partner for your next chapter." text="RulingMindTech is a technology services company helping organisations plan, build and operate digital solutions. We connect business understanding with engineering discipline to make complex technology feel clear and useful." />
        <Photo src={img("photo-1524758631624-e2822e304c36")} />
      </div></section>
      <section id="mission-vision" className="block bg-soft"><div className="wrap grid gap-[18px] md:grid-cols-2">
        <div className="border border-[#e4e9ef] bg-white p-8"><div className="eyebrow">Mission</div><p className="mt-3 font-display text-2xl font-bold leading-snug">To make technology feel clear, useful and dependable for every organisation we work with.</p></div>
        <div className="border border-[#e4e9ef] bg-white p-8"><div className="eyebrow">Vision</div><p className="mt-3 font-display text-2xl font-bold leading-snug">To be the trusted engineering partner organisations turn to for what comes next.</p></div>
      </div></section>
      <section id="values" className="block"><div className="wrap">
        <Intro eyebrow="Values" title="Purpose in the way we work." />
        <Cards items={values} />
      </div></section>
      <section id="leadership" className="block bg-soft"><div className="wrap">
        <Intro eyebrow="Leadership" title="The people guiding RulingMindTech." text="TODO: add leadership names, photos and short bios." />
        <Cards items={leadership} />
      </div></section>
    </>
  );
}
