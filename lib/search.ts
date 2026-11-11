import { articles, caseStudies, industries, services, solutions } from "./content";

export type SearchItem = { title: string; href: string; type: string; text: string };

const pages: [string, string][] = [
  ["About Us", "/about"], ["Services", "/services"], ["Industries", "/industries"], ["Solutions", "/solutions"],
  ["Careers", "/careers"], ["Insights", "/insights"], ["Case Studies", "/our-work"], ["Contact Us", "/contact"],
];

export const searchIndex: SearchItem[] = [
  ...pages.map(([title, href]) => ({ title, href, type: "Page", text: "" })),
  ...services.map((s) => ({ title: s.title, href: `/services/${s.slug}`, type: "Service", text: s.summary })),
  ...industries.map((s) => ({ title: s.title, href: `/industries/${s.slug}`, type: "Industry", text: s.summary })),
  ...solutions.map((s) => ({ title: s.title, href: `/solutions/${s.slug}`, type: "Solution", text: s.summary })),
  ...caseStudies.map((c) => ({ title: c.title, href: `/our-work/${c.slug}`, type: "Case study", text: c.summary })),
  ...articles.map((a) => ({ title: a.title, href: `/insights/${a.slug}`, type: "Insight", text: a.summary })),
];
