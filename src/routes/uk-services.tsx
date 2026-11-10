import { createFileRoute } from "@tanstack/react-router";
import { Building2, ShieldCheck, MapPin, FileCheck2, FileText, KeyRound, Power, Receipt } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/uk-services")({
  head: () => ({
    meta: [
      { title: "UK Services — Formation Planet Ltd" },
      { name: "description", content: "Complete UK company formation, compliance and tax services for global founders." },
      { property: "og:title", content: "UK Services — Formation Planet Ltd" },
      { property: "og:description", content: "Complete UK company formation, compliance and tax services for global founders." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/uk-services" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/uk-services" },
    ],
  }),
  component: Page,
});

const items = [
  { icon: Building2, title: "UK LTD Company Formation", description: "Full incorporation, share structure, certificates and Companies House filing.", price: "£140", to: "/uk-ltd-formation" },
  { icon: ShieldCheck, title: "LTD ID Verification", description: "PSC, director and shareholder identity verification in 24 hours.", price: "£20", to: "/ltd-id-verification" },
  { icon: MapPin, title: "Registered Office Address", description: "Prestigious UK registered office with mail handling.", price: "£40", to: "/registered-office-address" },
  { icon: FileCheck2, title: "Confirmation Statement Filing", description: "Annual confirmation statement filed accurately and on time.", price: "£80", to: "/company-annual-filing" },
  { icon: FileText, title: "Get UTR Number (HMRC)", description: "Unique Taxpayer Reference from HMRC handled for you.", price: "£30", to: "/utr-number" },
  { icon: KeyRound, title: "Companies House Authentication Code", description: "Retrieve or reset your company's authentication code.", price: "£10", to: "/auth-code" },
  { icon: Power, title: "Activation Code Service", description: "Activate your HMRC services online portal quickly.", price: "£10", to: "/activation-code" },
  { icon: Receipt, title: "UK VAT Registration & Submission", description: "VAT registration plus quarterly return filing.", price: "£100", to: "/uk-vat-registration" },
];

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="United Kingdom" title="UK Formation &" highlight="Compliance Services" description="Everything you need to register, operate and stay compliant with HMRC and Companies House." />
      <Section className="!pt-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8">UK Formation & Compliance Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}><ServiceCard {...s} tag="UK" /></Reveal>
          ))}
        </div>
      </Section>
      <CTABanner title="Ready to register your UK company?" subtitle="Talk to our UK formation team — 24-hour turnaround." primaryTo="/uk-ltd-formation" primaryLabel="Start Now" />
    </SiteShell>
  );
}
