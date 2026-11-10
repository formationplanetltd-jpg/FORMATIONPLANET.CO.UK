import { createFileRoute } from "@tanstack/react-router";
import { Flag, BadgeCheck, FileSpreadsheet, ScrollText } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { PackageCards } from "@/components/site/PriceTable";
import { US_PACKAGES, fmtGBP } from "@/lib/usaPricing";

export const Route = createFileRoute("/usa-services")({
  head: () => ({
    meta: [
      { title: "USA Services — Formation Planet Ltd" },
      { name: "description", content: "US LLC formation, EIN, ITIN, BOI and US tax filing for non-resident founders." },
      { property: "og:title", content: "USA Services — Formation Planet Ltd" },
      { property: "og:description", content: "US LLC formation, EIN, ITIN, BOI and US tax filing for non-resident founders." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/usa-services" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/usa-services" },
    ],
  }),
  component: Page,
});

const addons = [
  { icon: BadgeCheck, title: "EIN (Employer ID)", description: "IRS-issued tax ID for your LLC — required for US banking.", price: "$50", to: "/ein" },
  { icon: BadgeCheck, title: "ITIN", description: "Individual Taxpayer Identification Number for non-residents.", price: "$200", to: "/itin" },
  { icon: FileSpreadsheet, title: "Annual Tax Filing", description: "Form 5472 and 1120 filings for non-resident LLCs.", price: "$100", to: "/annual-tax-filing" },
  { icon: ScrollText, title: "BOI Report", description: "Beneficial Ownership Information report with FinCEN.", price: "$20", to: "/boi-report" },
];

const packages = US_PACKAGES.map((p) => ({
  name: p.name,
  price: `from ${fmtGBP(p.base)}`,
  features: p.features,
  popular: p.popular,
}));

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="United States" title="US LLC Formation &" highlight="Tax Services" description="Form your LLC in Wyoming, Delaware, Florida or any state — with EIN, banking and tax support." />
      <Section className="!pt-10">
        <SectionHeader eyebrow="Packages" title="Choose your" highlight="LLC package" />
        <div className="mt-10"><PackageCards items={packages} /></div>
      </Section>
      <Section>
        <SectionHeader eyebrow="Add-ons" title="US tax &" highlight="compliance add-ons" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}><ServiceCard {...s} tag="USA" /></Reveal>
          ))}
        </div>
      </Section>
      <CTABanner title="Start your US LLC today" subtitle={"Open a US entity from anywhere in the world — we'll handle every step."} />
    </SiteShell>
  );
}
