import type { LucideIcon } from "lucide-react";
import { Check, Star } from "lucide-react";
import { SiteShell } from "./SiteShell";
import { PageHero } from "./PageHero";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { CTABanner } from "./CTABanner";
import { wa } from "@/lib/brand";

export type ServicePackage = {
  name: string;
  price: string;
  meta?: string;
  popular?: boolean;
  features: string[];
};

export type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  price: string;
  icon: LucideIcon;
  includes: string[];
  process: { step: string; body: string }[];
  whoNeedsIt?: { role: string; note?: string }[];
  requirements?: string[];
  packages?: ServicePackage[];
};

export function ServiceDetail({
  eyebrow, title, highlight, description, price, icon: Icon,
  includes, process, whoNeedsIt, requirements, packages,
}: ServiceDetailProps) {
  return (
    <SiteShell>
      <PageHero eyebrow={eyebrow} title={title} highlight={highlight} description={description} />

      <Section className="!pt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 mb-5">
                <Icon className="h-7 w-7" />
              </span>
              <h2 className="text-2xl font-bold">{`What's included`}</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {includes.map((it, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-bold">How it works</h2>
              <ol className="mt-5 grid sm:grid-cols-3 gap-4">
                {process.map((p, i) => (
                  <li key={i} className="relative rounded-2xl border border-border bg-background/40 p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">Step {i + 1}</div>
                    <div className="mt-1 font-semibold">{p.step}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{p.body}</div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-strong rounded-3xl p-8 lg:sticky lg:top-24">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Starting at</div>
              <div className="mt-1 text-5xl font-bold text-gradient-orange">{price}</div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Transparent flat fee</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> 24-hour response</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> WhatsApp support</li>
              </ul>
              <a
                href={wa(`I'd like to order: ${title} ${highlight} (${price}).`)}
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground pulse-glow hover:scale-[1.02] transition"
              >
                Order on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {whoNeedsIt && whoNeedsIt.length > 0 && (
        <Section className="!py-16">
          <SectionHeader eyebrow="Who needs it" title="Required for" highlight="these roles" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whoNeedsIt.map((w, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary inline-flex items-center justify-center ring-1 ring-primary/30">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-semibold">{w.role}</div>
                  {w.note && <div className="mt-1 text-sm text-muted-foreground">{w.note}</div>}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {requirements && requirements.length > 0 && (
        <Section className="!py-16">
          <SectionHeader eyebrow="Requirements" title="What to" highlight="prepare" description="Have these ready for fast, smooth processing." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {requirements.map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass-card rounded-2xl p-5 flex items-start gap-4 h-full">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary font-semibold ring-1 ring-primary/30">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground/90">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {packages && packages.length > 0 && (
        <Section className="!py-16">
          <SectionHeader eyebrow="Packages" title="Choose your" highlight="package" description="Transparent pricing — no hidden add-ons." />
          <div className={`mt-10 grid gap-6 ${packages.length >= 3 ? "lg:grid-cols-3" : packages.length === 2 ? "lg:grid-cols-2 max-w-4xl mx-auto" : "max-w-md mx-auto"}`}>
            {packages.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`relative glass-card rounded-3xl p-7 h-full flex flex-col ${p.popular ? "ring-2 ring-primary/60" : ""}`}>
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-primary-foreground">
                      <Star className="h-3 w-3" /> Most Popular
                    </span>
                  )}
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="mt-3 text-4xl font-bold text-gradient-orange">{p.price}</div>
                  {p.meta && <div className="mt-1 text-xs text-muted-foreground">{p.meta}</div>}
                  <ul className="mt-5 space-y-2.5 text-sm flex-1">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={wa(`I'd like to order: ${title} ${highlight} — ${p.name} (${p.price}).`)}
                    target="_blank" rel="noreferrer"
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition ${
                      p.popular
                        ? "bg-primary text-primary-foreground pulse-glow hover:scale-[1.02]"
                        : "glass border border-primary/40 text-foreground hover:border-primary"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTABanner />
    </SiteShell>
  );
}
