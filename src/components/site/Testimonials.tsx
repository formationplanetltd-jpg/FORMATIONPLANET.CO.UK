import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Section";

const items = [
  {
    name: "Ayesha K.",
    role: "Founder, Loomly Studio",
    body: "Formation Planet got my UK Ltd registered in 24 hours and helped me open Wise and Stripe. Easily the smoothest onboarding I've had.",
  },
  {
    name: "David M.",
    role: "CEO, NorthBeam Tech",
    body: "From LLC formation in Wyoming to EIN and bank accounts — the team handled everything. Genuine, transparent, fast.",
  },
  {
    name: "Sara R.",
    role: "Director, Bloom Cosmetics",
    body: "Their compliance team keeps my annual filings stress-free. The orange-team responds on WhatsApp at any hour.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Trusted globally" title="What founders" highlight="say about us" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition">
                <div className="flex gap-1 text-primary mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">"{t.body}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-orange-600 grid place-items-center text-primary-foreground font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
