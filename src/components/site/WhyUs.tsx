import { Award, Clock, Globe2, Headphones, Lock, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Section";

const items = [
  { icon: Award, title: "Expert Specialists", body: "UK chartered specialists and US-licensed agents across formations, tax and banking." },
  { icon: Clock, title: "24-Hour Turnaround", body: "Most UK Ltd companies are registered within one business day." },
  { icon: Globe2, title: "Global Founder Network", body: "Serving founders across 60+ countries with localized onboarding." },
  { icon: Headphones, title: "24/7 WhatsApp Support", body: "A human, not a bot — reply times under 15 minutes during business hours." },
  { icon: Lock, title: "Secure & Confidential", body: "Bank-grade data protection. Your details never leave our compliance circle." },
  { icon: Sparkles, title: "Transparent Pricing", body: "Flat fees published on every package. No hidden compliance surprises." },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-[oklch(0.11_0_0)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Why choose us" title="Built for serious" highlight="global founders" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 hover:-translate-y-1 transition">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary mb-4">
                  <it.icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
