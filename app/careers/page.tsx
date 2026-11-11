import type { Metadata } from "next";
import Link from "next/link";
import { Cards, Intro, PageHero } from "@/components/ui";
import { positions, values } from "@/lib/content";

export const metadata: Metadata = { title: "Careers" };

export default function Careers() {
  return (
    <>
      <PageHero crumb="Careers" eyebrow="Careers" title="Bring your curiosity. Build what’s next." text="Join a team where learning, collaboration and ownership are part of the work." />
      <section id="why-join-us" className="block"><div className="wrap">
        <Intro eyebrow="Why join us" title="Room to learn. Space to contribute." />
        <Cards items={values} />
      </div></section>
      <section id="open-positions" className="block bg-soft"><div className="wrap">
        <Intro eyebrow="Open positions" title="Find your role." />
        <div className="grid gap-3">
          {positions.map((p) => (
            <div key={p.title} className="flex flex-col gap-3 border border-[#e3e8ee] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <div><h3 className="font-display text-lg font-bold">{p.title}</h3><p className="text-sm text-muted">{p.team} · {p.type}</p></div>
              <Link href={`/contact?service=Careers&role=${encodeURIComponent(p.title)}`} className="btn self-start">Apply ↗</Link>
            </div>
          ))}
        </div>
      </div></section>
      <section id="apply" className="block"><div className="wrap">
        <Intro eyebrow="Apply" title="Don’t see the right role today?" text="Introduce yourself and tell us about your interests. We’ll keep your details in mind for suitable opportunities.">
          <Link href="/contact?service=Careers" className="btn mt-4">Share your profile ↗</Link>
        </Intro>
      </div></section>
    </>
  );
}
