import { createFileRoute, Link } from "@tanstack/react-router";
import { Landmark, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { providers as providerData } from "./banking.$slug";

export const Route = createFileRoute("/banks-payment-solutions")({
  head: () => ({
    meta: [
      { title: "Banking & Payment Solutions — Formation Planet Ltd" },
      { name: "description", content: "Open business accounts with 15+ global banks and payment providers including Wise, Stripe, Payoneer and more." },
      { property: "og:title", content: "Banking & Payment Solutions — Formation Planet Ltd" },
      { property: "og:description", content: "Open business accounts with 15+ global banks and payment providers including Wise, Stripe, Payoneer and more." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/banks-payment-solutions" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/banks-payment-solutions" },
    ],
  }),
  component: Page,
});

type Provider = { slug: string; name: string; price: string; features: string[] };
const providers: Provider[] = providerData.map((p) => ({
  slug: p.slug,
  name: p.name,
  price: p.price,
  features: p.includes.slice(0, 3),
}));

function Card({ p }: { p: Provider }) {
  return (
    <div className="group glass rounded-2xl p-6 h-full hover:border-primary/50 hover:-translate-y-1 transition">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:rotate-6 transition">
          <Landmark className="h-6 w-6" />
        </span>
        <span className="text-sm text-muted-foreground">from <span className="font-semibold text-primary">{p.price}</span></span>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
      <ul className="mt-3 space-y-1.5">
        {p.features.map((f, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-primary mt-0.5" /> {f}</li>
        ))}
      </ul>
      <Link to="/banking/$slug" params={{ slug: p.slug }}
        className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-primary/40 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition">
        Explore More
      </Link>
    </div>
  );
}

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="Banking & Payments" title="Open accounts with" highlight="15+ global providers" description="From PayPal to Wise to Airwallex — we'll match you to the right banking stack for your business." />
      <Section className="!pt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.03}><Card p={p} /></Reveal>
          ))}
        </div>
      </Section>
      <CTABanner title="Not sure which bank fits?" subtitle={"Tell us about your business and we'll recommend the best 2-3 providers."} />
    </SiteShell>
  );
}
