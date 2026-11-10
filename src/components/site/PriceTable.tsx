import { Check } from "lucide-react";
import { wa } from "@/lib/brand";
import { Reveal } from "./Reveal";

export type PriceRow = { name: string; price: string; note?: string };

export function PriceTable({ title, rows, eyebrow }: { title: string; rows: PriceRow[]; eyebrow?: string }) {
  return (
    <Reveal>
      <div className="glass rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-border flex items-center justify-between">
          <div>
            {eyebrow && <div className="text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">{eyebrow}</div>}
            <h3 className="text-xl font-semibold mt-1">{title}</h3>
          </div>
        </div>
        <ul className="divide-y divide-border">
          {rows.map((r, i) => (
            <li key={i} className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-primary/5 transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  {r.note && <div className="text-xs text-muted-foreground">{r.note}</div>}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-primary">{r.price}</span>
                <a href={wa(`I'd like: ${r.name} (${r.price}).`)} target="_blank" rel="noreferrer"
                  className="hidden sm:inline-flex items-center rounded-lg border border-primary/40 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition">
                  Get
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function PackageCards({
  items,
  highlight,
}: {
  items: { name: string; price: string; features: string[]; popular?: boolean }[];
  highlight?: string;
}) {
  const norm = (s?: string) => (s ?? "").trim().toLowerCase();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((p, i) => {
        const isHighlighted = norm(highlight) === norm(p.name);
        return (
          <Reveal key={i} delay={i * 0.05}>
            <div className={`relative h-full rounded-2xl p-6 transition hover:-translate-y-1 ${
              isHighlighted
                ? "glass-strong ring-2 ring-primary border-primary shadow-[0_20px_60px_-15px_rgba(255,107,0,0.7)] -translate-y-1"
                : p.popular
                ? "glass-strong border-primary/60 pulse-glow"
                : "glass hover:border-primary/50"
            }`}>
              {isHighlighted && (
                <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground glow-orange-sm">
                  Your pick
                </span>
              )}
              {p.popular && !isHighlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-2 text-4xl font-bold text-gradient-orange">{p.price}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f, j) => (
                  <li key={j} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> <span className="text-muted-foreground">{f}</span></li>
                ))}
              </ul>
              <a href={wa(`I'd like the ${p.name} package (${p.price}).`)} target="_blank" rel="noreferrer"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isHighlighted || p.popular ? "bg-primary text-primary-foreground glow-orange-sm" : "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                }`}>
                Choose {p.name}
              </a>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

