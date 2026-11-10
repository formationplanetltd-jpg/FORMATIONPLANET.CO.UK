import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, highlight, description, children }: {
  eyebrow?: string; title: string; highlight?: string; description?: string; children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="absolute -top-20 right-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl -z-10" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <Reveal>
          {eyebrow && <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">{eyebrow}</span>}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {title} {highlight && <span className="text-gradient-orange">{highlight}</span>}
          </h1>
          {description && <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>}
          {children && <div className="mt-7">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
