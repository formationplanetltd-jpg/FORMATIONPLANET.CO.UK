import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, FileCheck2, UserCog, Users, MapPin, FilePlus2, Mail, Receipt } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { IdentityVerification } from "@/components/site/IdentityVerification";

export const Route = createFileRoute("/uk-compliance")({
  head: () => ({
    meta: [
      { title: "UK Compliance — Formation Planet Ltd" },
      { name: "description", content: "Annual filings, identity verification, director changes and full UK compliance handled end-to-end." },
      { property: "og:title", content: "UK Compliance — Formation Planet Ltd" },
      { property: "og:description", content: "Annual filings, identity verification, director changes and full UK compliance handled end-to-end." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/uk-compliance" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/uk-compliance" },
    ],
  }),
  component: Page,
});

const items = [
  { icon: ShieldCheck, title: "LTD ID Verification", description: "Identity verification for PSCs, shareholders and directors.", price: "£20", to: "/ltd-id-verification" },
  { icon: FileCheck2, title: "Confirmation Statement", description: "Annual confirmation statement filed with Companies House.", price: "£80", to: "/company-annual-filing" },
  { icon: Receipt, title: "Annual Accounts", description: "Year-end accounts prepared and filed.", price: "£120", to: "/annual-accounts" },
  { icon: UserCog, title: "Company Name Change", description: "Change your registered company name.", price: "£30", to: "/company-name-change" },
  { icon: MapPin, title: "Address Change", description: "Update registered office or director address.", price: "£10", to: "/address-change" },
  { icon: Users, title: "Director Appoint / Remove", description: "Add or remove company directors.", price: "£10", to: "/director-change" },
  { icon: FilePlus2, title: "PSC / Secretary Update", description: "Update PSC or company secretary details.", price: "£10", to: "/psc-secretary-update" },
  { icon: Mail, title: "AD01 Postal Filing", description: "Postal filings for sensitive address updates.", price: "£100", to: "/ad01-postal-filing" },
];

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="Stay compliant" title="UK Compliance" highlight="Services" description="Keep your UK Ltd in perfect standing with HMRC and Companies House." />
      <Section className="!pt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}><ServiceCard {...s} tag="Compliance" /></Reveal>
          ))}
        </div>
      </Section>
      <IdentityVerification />
      <CTABanner title="Need help with a filing?" subtitle="Our compliance team replies on WhatsApp within minutes." />
    </SiteShell>
  );
}
