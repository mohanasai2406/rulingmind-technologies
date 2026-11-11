import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Cards, Cta, Intro, Photo } from "@/components/ui";
import Icon from "@/components/Icon";
import { articles, caseStudies, img, industries, services, solutions } from "@/lib/content";

const featuredSlugs = ["cloud-computing-infrastructure", "aws-cloud-services", "devops-automation", "ai-machine-learning", "software-development", "cybersecurity"];
const featured = featuredSlugs.map((slug) => services.find((s) => s.slug === slug)!).map((s) => ({ icon: s.icon, title: s.title, text: s.summary, href: `/services/${s.slug}` }));
const tech = ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Python", "TypeScript", "PostgreSQL", "React & Next.js", "GitHub Actions"];
const steps = [["Assess", "Understand goals, systems and constraints."], ["Design", "Shape architecture, roadmap and success measures."], ["Build", "Deliver in small, testable increments."], ["Operate", "Monitor, support and keep improving."]];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="flex min-h-[640px] items-center bg-cover bg-center text-white md:min-h-[720px]"
        style={{ backgroundImage: "linear-gradient(90deg,#061522f2,#061522b0 45%,#06152233),url('/assets/hero-innovation.png')" }}>
        <div className="wrap py-24">
          <Reveal className="max-w-[760px]">
            <div className="eyebrow !text-[#8ab8ff]">Enterprise IT services</div>
            <h1 className="my-6 font-display text-[clamp(42px,6.2vw,80px)] font-bold leading-[1.04] tracking-[-2px] md:tracking-[-3px]">Engineering the digital core of modern enterprises.</h1>
            <p className="max-w-[620px] text-[18px] leading-[1.8] text-[#d4dce5]">Cloud, AI, software and security, delivered by teams who care about outcomes as much as technology.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn">Explore Services</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Company introduction */}
      <section className="block"><div className="wrap split">
        <Reveal><Intro eyebrow="Who we are" title="People-first thinking. Engineering-led delivery." text="RulingMindTech helps organisations plan, build and run digital solutions. We connect business understanding with engineering discipline so complex technology feels clear and useful.">
          <Link href="/about" className="more">About RulingMindTech <ArrowRight className="inline" size={14} /></Link>
        </Intro></Reveal>
        <Reveal delay={0.1}><Photo src={img("photo-1521737711867-e3b97375f902")} /></Reveal>
      </div></section>

      {/* 3. Technology capabilities */}
      <section className="bg-soft py-14"><div className="wrap">
        <div className="eyebrow mb-5">Technologies we work with</div>
        <div className="flex flex-wrap gap-3">{tech.map((t) => <span key={t} className="border border-[#dce2e8] bg-white px-4 py-2 text-[13px] font-bold">{t}</span>)}</div>
      </div></section>

      {/* 4. Featured services */}
      <section className="block"><div className="wrap">
        <Reveal><Intro eyebrow="Featured services" title="Capabilities that move your business forward." text="From cloud foundations to intelligent applications and the security around them." /></Reveal>
        <Reveal><Cards items={featured} /></Reveal>
        <Link href="/services" className="more">View all 14 services <ArrowRight className="inline" size={14} /></Link>
      </div></section>

      {/* 5. Industries */}
      <section className="block bg-navy text-white"><div className="wrap">
        <Reveal><Intro dark eyebrow="Industries we serve" title="We understand the world your business works in." text="Technology shaped around your customers, operations and regulations." /></Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="flex items-center gap-4 border border-white/15 p-5 transition hover:border-brand hover:bg-white/5">
              <span className="text-[#8ab8ff]"><Icon name={i.icon} size={26} /></span><span className="font-semibold">{i.title}</span>
            </Link>
          ))}
        </div>
      </div></section>

      {/* 6. Digital transformation */}
      <section className="block"><div className="wrap split">
        <Reveal><Photo src={img("photo-1451187580459-43490279c0fa")} /></Reveal>
        <Reveal delay={0.1}><Intro eyebrow="Digital transformation" title="A clear path from strategy to delivery." text="We work in four connected stages so progress is visible at every step.">
          <ol className="mt-6 grid gap-4">
            {steps.map(([t, d], i) => <li key={t} className="flex gap-4"><span className="font-display text-2xl font-bold text-brand">0{i + 1}</span><div><b>{t}</b><div className="text-sm text-muted">{d}</div></div></li>)}
          </ol>
          <Link href="/solutions/enterprise-digital-transformation" className="more">Enterprise digital transformation <ArrowRight className="inline" size={14} /></Link>
        </Intro></Reveal>
      </div></section>

      {/* 7. Cloud and AI innovation */}
      <section className="block bg-soft"><div className="wrap">
        <Reveal><Intro eyebrow="Cloud & AI innovation" title="Build on cloud. Apply AI where it counts." /></Reveal>
        <div className="grid gap-[18px] md:grid-cols-2">
          {[["Cloud modernisation", "Re-architect applications for scale, resilience and speed.", "/solutions/cloud-modernization", "photo-1518770660439-4636190af475"],
            ["AI-powered business solutions", "Practical AI on your data, with people in control.", "/solutions/ai-powered-business-solutions", "photo-1460925895917-afdab827c52f"]].map(([t, d, h, p]) => (
            <Link key={t} href={h} className="flex min-h-[340px] items-end bg-cover bg-center p-8 text-white"
              style={{ backgroundImage: `linear-gradient(0deg,#081725ee,#08172533),url('${img(p)}')` }}>
              <div><h3 className="font-display text-2xl font-bold">{t}</h3><p className="mt-2 text-[#d4dce5]">{d}</p><span className="more !text-[#8ab8ff]">Learn more</span></div>
            </Link>
          ))}
        </div>
      </div></section>

      {/* 8. Featured case studies */}
      <section className="block"><div className="wrap">
        <Reveal><Intro eyebrow="Featured case studies" title="Results our customers can point to." text="Sample case studies: replace with approved client work before launch." /></Reveal>
        <Cards items={caseStudies.slice(0, 3).map((c) => ({ num: c.tag.toUpperCase(), title: c.title, text: c.summary, href: `/our-work/${c.slug}` }))} />
        <Link href="/our-work" className="more">All case studies <ArrowRight className="inline" size={14} /></Link>
      </div></section>

      {/* 9. Testimonials (sample until approved quotes exist) + 10. At a glance */}
      <section className="block bg-soft"><div className="wrap grid gap-10 md:grid-cols-2">
        <div>
          <div className="eyebrow">Client testimonials</div>
          <blockquote className="mt-4 border-l-4 border-brand bg-white p-6">
            <span className="mb-2 inline-block bg-[#fff1c9] px-2 py-1 text-[11px] font-bold text-[#8a6100]">SAMPLE CONTENT</span>
            <p className="text-[15px] italic text-muted">Placeholder: add a genuine, approved client testimonial here. No quotes are shown until one is provided.</p>
          </blockquote>
        </div>
        <div>
          <div className="eyebrow">At a glance</div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {[[services.length, "Services"], [industries.length, "Industries"], [solutions.length, "Solutions"]].map(([n, l]) => (
              <div key={l} className="bg-white p-5"><b className="block font-display text-4xl font-extrabold text-brand">{n}</b><span className="text-xs text-muted">{l}</span></div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#7c8996]">Verified company achievements will be added here once provided.</p>
        </div>
      </div></section>

      {/* 11. Latest insights */}
      <section className="block"><div className="wrap">
        <Reveal><Intro eyebrow="Latest insights" title="Ideas and practical guidance." /></Reveal>
        <Cards items={articles.slice(0, 3).map((a) => ({ num: a.category.toUpperCase(), title: a.title, text: a.summary, href: `/insights/${a.slug}` }))} />
        <Link href="/insights" className="more">All insights <ArrowRight className="inline" size={14} /></Link>
      </div></section>

      {/* 12. Careers */}
      <section className="block bg-soft"><div className="wrap split">
        <Reveal><Intro eyebrow="Careers" title="Bring your curiosity. Build what’s next." text="Join a team where learning, collaboration and ownership are part of the work.">
          <Link href="/careers" className="btn mt-4">View open roles</Link>
        </Intro></Reveal>
        <Reveal delay={0.1}><Photo src={img("photo-1522071820081-009f0129c71c")} /></Reveal>
      </div></section>

      <Cta title="Let’s build what’s next, together." text="Tell us about your goals and we will get back to you." />
    </>
  );
}
