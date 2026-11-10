import { createFileRoute } from "@tanstack/react-router";
import {
  Building2, ShieldCheck, FileCheck2, Flag, Landmark, Code2,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { Section, SectionHeader } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { QuickStart } from "@/components/site/QuickStart";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CTABanner } from "@/components/site/CTABanner";
import { IdentityVerification } from "@/components/site/IdentityVerification";
import { CompanyFormationFeature } from "@/components/site/CompanyFormationFeature";
import { BankingFeature } from "@/components/site/BankingFeature";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UK Ltd & USA LLC Formation in 24 Hours | Formation Planet" },
      { name: "description", content: "Form a UK Ltd or USA LLC in 24 hours. EIN, ITIN, VAT, UTR, banking and annual compliance — for non-residents worldwide." },
      { name: "keywords", content: "UK Ltd formation, USA LLC formation, Wyoming LLC, Delaware LLC, EIN non-resident, ITIN, VAT, UTR, registered office London, Stripe, Wise, Mercury, Amazon FBA LLC, dropshipping LLC" },
      { property: "og:title", content: "UK Ltd & USA LLC Formation in 24 Hours | Formation Planet" },
      { property: "og:description", content: "Form a UK Ltd or USA LLC in 24 hours. EIN, ITIN, VAT, UTR, banking and annual compliance." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/" },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Building2, title: "UK LTD Company Formation", description: "Register your UK Limited company in 24 hours with everything you need to trade.", price: "£140", to: "/uk-services", tag: "UK Formation" },
  { icon: ShieldCheck, title: "LTD ID Verification", description: "Mandatory PSC, director and shareholder verification — done in 24 hours.", price: "£20", to: "/ltd-id-verification", tag: "UK Compliance" },
  { icon: FileCheck2, title: "Annual Filing & Returns", description: "Confirmation statements, annual accounts and director updates handled end-to-end.", price: "£80", to: "/company-annual-filing", tag: "UK Compliance" },
  { icon: Flag, title: "US LLC Formation", description: "Wyoming, Delaware, Florida and more. EIN, ITIN and registered agent included.", price: "£150", to: "/pricing", hash: "us-packages", tag: "USA Formation" },
  { icon: Landmark, title: "Banking & Payments", description: "Open Wise, Stripe, Payoneer, Mercury-class accounts and 12+ partner banks.", price: "£20", to: "/banks-payment-solutions", tag: "Banking" },
  { icon: Code2, title: "Web Development", description: "Modern, conversion-driven websites engineered by our in-house product team.", to: "/web-development", tag: "Technology" },
];

function Home() {
  return (
    <SiteShell>
      <Hero />
      <StatsBar />

      <Section>
        <SectionHeader eyebrow="Our services" title="Everything your business" highlight="needs" description="From incorporation to compliance to banking — one team, one gateway." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <QuickStart />
      <CompanyFormationFeature />
      <WhyUs />
      <IdentityVerification />
      <Testimonials />
      <BankingFeature />
      <CTABanner />
    </SiteShell>
  );
}
