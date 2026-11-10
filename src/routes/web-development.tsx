import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Layout, Rocket, ShoppingCart, type LucideIcon } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { Check, Star } from "lucide-react";

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development — React Websites & Ecommerce — Formation Planet Ltd" },
      { name: "description", content: "React-based websites and ecommerce stores from £30. Basic, Standard, Premium and Ecommerce packages — all built on modern React." },
      { property: "og:title", content: "Web Development — React Websites & Ecommerce — Formation Planet Ltd" },
      { property: "og:description", content: "React-based websites and ecommerce stores from £30. Basic, Standard, Premium and Ecommerce packages — all built on modern React." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/web-development" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/web-development" },
    ],
  }),
  component: Page,
});

type Pkg = {
  to: "/web-basic" | "/web-standard" | "/web-premium" | "/web-ecommerce";
  name: string;
  price: string;
  meta: string;
  icon: LucideIcon;
  popular?: boolean;
  features: string[];
};

const packages: Pkg[] = [
  {
    to: "/web-basic",
    name: "Basic Website",
    price: "£30",
    meta: "4 pages • React",
    icon: Layout,
    features: [
      "4 React-based pages",
      "Mobile responsive",
      "Contact form + WhatsApp",
      "Basic SEO",
      "Free deployment",
    ],
  },
  {
    to: "/web-standard",
    name: "Standard Website",
    price: "£60",
    meta: "10 pages • React",
    icon: Code2,
    popular: true,
    features: [
      "10 React-based pages",
      "Animations & transitions",
      "Blog / news module",
      "Advanced SEO + Analytics",
      "Lead capture forms",
    ],
  },
  {
    to: "/web-premium",
    name: "Premium Website",
    price: "£150",
    meta: "20 pages • React + CMS",
    icon: Rocket,
    features: [
      "20 React-based pages",
      "Custom UI/UX design",
      "Headless CMS included",
      "Premium animations",
      "30 days free support",
    ],
  },
  {
    to: "/web-ecommerce",
    name: "Ecommerce Store",
    price: "£30",
    meta: "React + Payments",
    icon: ShoppingCart,
    features: [
      "React ecommerce frontend",
      "Up to 50 products",
      "Cart & secure checkout",
      "Stripe + PayPal",
      "Admin product manager",
    ],
  },
];

function Page() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Web Development"
        title="React websites &"
        highlight="ecommerce stores"
        description="Modern, fast and conversion-driven websites built on React — from £30. Pick the package that fits your business."
      />
      <Section className="!pt-10">
        <SectionHeader eyebrow="Packages" title="Choose your" highlight="React package" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p, i) => (
            <Reveal key={p.to} delay={i * 0.06}>
              <div className={`relative glass-card rounded-3xl p-6 h-full flex flex-col ${p.popular ? "ring-2 ring-primary/60" : ""}`}>
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-primary-foreground">
                    <Star className="h-3 w-3" /> Most Popular
                  </span>
                )}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <p.icon className="h-6 w-6" />
                </span>
                <div className="mt-4 text-lg font-semibold">{p.name}</div>
                <div className="mt-2 text-3xl font-bold text-gradient-orange">{p.price}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.meta}</div>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={p.to}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                    p.popular
                      ? "bg-primary text-primary-foreground hover:scale-[1.02]"
                      : "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Explore More
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABanner title="Have a product idea?" subtitle="Send us a brief — we'll reply with a scope and timeline within 24 hours." />
    </SiteShell>
  );
}
