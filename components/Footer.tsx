import Link from "next/link";
import { contactInfo, industries, services, socialLinks, solutions } from "@/lib/content";

const col = "grid content-start gap-2 text-[13px] leading-[1.8] text-[#9cabb9]";
const h4 = "mb-3 font-display text-sm font-bold text-white";

export default function Footer() {
  const socials = socialLinks.filter((s) => s.url);
  return (
    <footer className="bg-[#06111b] pb-[22px] pt-[60px] text-white">
      <div className="wrap">
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-[22px] font-extrabold tracking-[-1px]">RULING<b className="text-brand">MIND</b></Link>
            <p className="mt-3 text-[13px] leading-[1.8] text-[#9cabb9]">Technology, people and progress. Enterprise IT services for cloud, AI, software and security.</p>
            <div className="mt-4 grid gap-1 text-[13px] text-[#9cabb9]">
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a><span>{contactInfo.phone}</span>
            </div>
            {socials.length > 0 && <div className="mt-4 flex gap-4 text-[13px]">{socials.map((s) => <a key={s.label} href={s.url} rel="noopener noreferrer" target="_blank">{s.label}</a>)}</div>}
          </div>
          <div><h4 className={h4}>Services</h4><div className={col}>
            {services.slice(0, 6).map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}<Link href="/services" className="text-brand">All services ↗</Link></div></div>
          <div><h4 className={h4}>Industries</h4><div className={col}>
            {industries.slice(0, 6).map((s) => <Link key={s.slug} href={`/industries/${s.slug}`}>{s.title}</Link>)}<Link href="/industries" className="text-brand">All industries ↗</Link></div></div>
          <div><h4 className={h4}>Solutions</h4><div className={col}>
            {solutions.slice(0, 6).map((s) => <Link key={s.slug} href={`/solutions/${s.slug}`}>{s.title}</Link>)}<Link href="/solutions" className="text-brand">All solutions ↗</Link></div></div>
          <div><h4 className={h4}>Company</h4><div className={col}>
            <Link href="/about">About Us</Link><Link href="/our-work">Case Studies</Link><Link href="/insights">Insights</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact Us</Link></div></div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-5 text-[11px] text-[#82909e]">© {new Date().getFullYear()} RulingMindTech. All rights reserved.</div>
      </div>
    </footer>
  );
}
