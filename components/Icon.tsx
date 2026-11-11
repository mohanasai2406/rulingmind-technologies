import { ArrowRight, BarChart3, Bot, Building2, Cloud, Code2, Cpu, Database, Factory, GraduationCap, Headset, HeartPulse, Landmark, Layers, Lightbulb, Monitor, Plane, Radio, RefreshCw, Rocket, Server, ShieldCheck, ShoppingCart, Smartphone, Workflow, Wrench, Zap, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  ArrowRight, BarChart3, Bot, Building2, Cloud, Code2, Cpu, Database, Factory, GraduationCap, Headset, HeartPulse, Landmark, Layers, Lightbulb,
  Monitor, Plane, Radio, RefreshCw, Rocket, Server, ShieldCheck, ShoppingCart, Smartphone, Workflow, Wrench, Zap,
};

/** Renders a Lucide icon by name; falls back to plain text (e.g. a glyph). */
export default function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const C = map[name];
  return C ? <C size={size} strokeWidth={1.75} aria-hidden="true" /> : <span style={{ fontSize: size }}>{name}</span>;
}
