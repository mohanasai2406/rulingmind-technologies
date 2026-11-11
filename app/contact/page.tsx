
import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <Suspense fallback={<div className="block wrap">Loading contact form...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
