import { createFileRoute } from "@tanstack/react-router";
import { Target, Heart, Globe2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Formation Planet Ltd" },
      { name: "description", content: "Formation Planet Ltd is a UK-based company formation and compliance specialist serving global founders." },
      { property: "og:title", content: "About — Formation Planet Ltd" },
      { property: "og:description", content: "Formation Planet Ltd is a UK-based company formation and compliance specialist serving global founders." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/about" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/about" },
    ],
  }),
  component: Page,
});

const values = [
  { icon: Target, title: "Founder First", body: "Every package, every workflow is designed around founders. No corporate hoops." },
  { icon: Heart, title: "Radical Honesty", body: "Transparent pricing, honest timelines and proactive updates — always." },
  { icon: Globe2, title: "Global by Default", body: "Built for cross-border founders launching in the UK, US and beyond." },
];

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="About us" title="A global gateway" highlight="for founders" description="Formation Planet Ltd is a UK-based formation and compliance specialist serving founders across 60+ countries." />
      <Section className="!pt-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-3xl font-bold">Our story</h2>
              <p className="mt-4 text-muted-foreground">
                We started Formation Planet because launching a business across borders should not feel like fighting the system. Today we help hundreds of founders register UK Ltds, US LLCs and unlock global banking — all from one expert team that picks up the phone (and WhatsApp).
              </p>
              <p className="mt-4 text-muted-foreground">
                Our specialists combine UK chartered expertise with US-licensed agents, banking introductions and a product team that ships beautiful software for our clients.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6"><div className="text-4xl font-bold text-gradient-orange">500+</div><div className="text-sm text-muted-foreground mt-1">Companies registered</div></div>
              <div className="glass rounded-2xl p-6"><div className="text-4xl font-bold text-gradient-orange">60+</div><div className="text-sm text-muted-foreground mt-1">Countries served</div></div>
              <div className="glass rounded-2xl p-6"><div className="text-4xl font-bold text-gradient-orange">12+</div><div className="text-sm text-muted-foreground mt-1">Banking partners</div></div>
              <div className="glass rounded-2xl p-6"><div className="text-4xl font-bold text-gradient-orange">98%</div><div className="text-sm text-muted-foreground mt-1">Client retention</div></div>
            </div>
          </Reveal>
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary mb-4"><v.icon className="h-6 w-6" /></span>
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABanner />
    </SiteShell>
  );
}
