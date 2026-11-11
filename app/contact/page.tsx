import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Intro, PageHero } from "@/components/ui";
import { contactInfo } from "@/lib/content";
import { SERVICES } from "@/lib/validate";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact({ searchParams }: { searchParams: { service?: string; role?: string } }) {
  const service = searchParams.service && SERVICES.includes(searchParams.service) ? searchParams.service : "";
  const message = searchParams.role ? `I would like to apply for the ${searchParams.role} position.` : "";

  return (
    <>
      <PageHero crumb="Contact" eyebrow="Start a conversation" title="What could we create together?" text="Tell us about your goals, challenges or ideas. We’d love to hear from you." />
      <section className="block"><div className="wrap grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-[60px]">
        <div>
          <Intro eyebrow="Contact form" title="Let’s get the conversation started." text="Share a few details and our team will follow up." />
          <div className="grid gap-2 text-[15px]">
            <div><b>Email:</b> <a href={`mailto:${contactInfo.email}`} className="text-brand">{contactInfo.email}</a></div>
            <div><b>Phone:</b> {contactInfo.phone}</div>
            <div><b>Office:</b> {contactInfo.address}</div>
          </div>
          <iframe title="Office map" className="mt-6 h-[260px] w-full border-0" loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=78.30%2C17.30%2C78.60%2C17.55&layer=mapnik" />
          <p className="mt-2 text-xs text-[#7c8996]">TODO: set the exact office location and details in lib/content.ts (contactInfo).</p>
        </div>
        <ContactForm defaultService={service} defaultMessage={message} />
      </div></section>
    </>
  );
}
