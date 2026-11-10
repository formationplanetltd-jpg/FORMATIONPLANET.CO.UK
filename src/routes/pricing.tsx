import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { PackageCards, PriceTable } from "@/components/site/PriceTable";
import { CTABanner } from "@/components/site/CTABanner";
import { US_PACKAGES, US_STATES, computePrice, fmtGBP, getStateBySlug } from "@/lib/usaPricing";

export const Route = createFileRoute("/pricing")({
  validateSearch: (s: Record<string, unknown>) => ({
    region: (s.region === "us" ? "us" : s.region === "uk" ? "uk" : undefined) as "uk" | "us" | undefined,
    pkg: typeof s.pkg === "string" ? s.pkg : undefined,
    state: typeof s.state === "string" ? s.state : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Pricing — Formation Planet Ltd" },
      { name: "description", content: "Transparent pricing for UK & USA company formation, compliance, banking and tax services. State-by-state USA LLC pricing." },
      { property: "og:title", content: "Pricing — Formation Planet Ltd" },
      { property: "og:description", content: "Transparent pricing for UK & USA company formation, compliance, banking and tax services. State-by-state USA LLC pricing." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/pricing" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/pricing" },
    ],
  }),
  component: Page,
});

const ukPackages = [
  {
    name: "Starter",
    price: "£140",
    meta: "Processing: 3–5 Business Days",
    features: [
      "UK LTD (Company) Registration",
      "Companies House Incorporation Fee Included",
      "Digital Certificate of Incorporation",
      "Digital Memorandum & Articles of Association",
      "Digital Copy of All Documents (PDF)",
      "Digital Shares Certificate",
      "ID Verification Included",
      "Client Portal Access (document uploads & status updates)",
      "12/6 Phone & WhatsApp Support",
    ],
  },
  {
    name: "Silver",
    price: "£170",
    meta: "Most chosen by founders",
    popular: true,
    features: [
      "UK LTD (Company) Registration",
      "Companies House Incorporation Fee Included",
      "Digital + Printed Certificate of Incorporation",
      "Digital Memorandum & Articles of Association",
      "Registered Office Address",
      "Company Authentication Code",
      "UTR Number",
      "Digital Shares Certificate",
      "ID Verification Included",
      "Client Portal Access",
    ],
  },
  {
    name: "Gold",
    price: "£180",
    features: [
      "UK LTD (Company) Registration",
      "Companies House Incorporation Fee Included",
      "Digital Certificate of Incorporation",
      "Digital Memorandum & Articles of Association",
      "Registered Office Address",
      "Company Authentication Code",
      "UTR Number",
      "Digital Shares Certificate",
      "ID Verification Included",
      "Director Service Address",
      "Client Portal Access",
    ],
  },
  {
    name: "Platinum",
    price: "£200",
    features: [
      "UK LTD (Company) Registration",
      "Companies House Incorporation Fee Included",
      "Digital Certificate of Incorporation",
      "Digital Memorandum & Articles of Association",
      "London Registered Office Address",
      "Company Authentication Code",
      "UTR Number",
      "Digital Shares Certificate",
      "ID Verification Included",
      "Director Service Address",
      "Client Portal Access",
    ],
  },
];

const ukAddresses = [
  { name: "Registered Office", price: "£40/yr" },
  { name: "Business Service Address", price: "£60/yr" },
  { name: "Director Service Address", price: "£20/yr" },
];
const usAddons = [
  { name: "EIN", price: "$50" },
  { name: "ITIN", price: "$200" },
  { name: "Annual Tax Filing", price: "$100" },
  { name: "BOI Report", price: "$20" },
];
const compliance = [
  { name: "Name Change", price: "£30" },
  { name: "Address Change", price: "£10" },
  { name: "Annual Accounts", price: "from £120" },
  { name: "Confirmation Statement", price: "£80" },
  { name: "Director Appoint / Remove", price: "£10" },
  { name: "Shareholder Update", price: "£10" },
  { name: "PSC / Secretary Update", price: "£10" },
  { name: "Residence Change", price: "£10" },
  { name: "AD01 Postal Filing", price: "£100" },
];
const banking = [
  { name: "PayPal", price: "£20" }, { name: "Payoneer", price: "£20" }, { name: "WorldFirst", price: "£20" },
  { name: "Stripe", price: "£20" }, { name: "Tide", price: "£50" }, { name: "Sunrate", price: "£50" },
  { name: "Wise", price: "£70" }, { name: "Zyla", price: "£50" }, { name: "Airwallex", price: "£50" },
  { name: "Mollie", price: "£50" }, { name: "ZionPe", price: "£50" }, { name: "Wallester", price: "£50" },
  { name: "PingPong", price: "£50" }, { name: "Grey", price: "£50" }, { name: "TapTap Send", price: "£50" },
  { name: "Nsave Business", price: "£50" },
];

function Page() {
  const { region, pkg, state } = Route.useSearch();
  const navigate = useNavigate({ from: "/pricing" });

  useEffect(() => {
    if (!region) return;
    const id = region === "us" ? "us-packages" : "uk-packages";
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [region, pkg, state]);

  const activeState = useMemo(() => getStateBySlug(state), [state]);

  const usCards = useMemo(
    () =>
      US_PACKAGES.map((p) => ({
        name: p.name,
        price: fmtGBP(computePrice(p, activeState)),
        features: [`Filed in ${activeState.name} (+${fmtGBP(activeState.surcharge)} state fee)`, ...p.features],
        popular: p.popular,
      })),
    [activeState],
  );

  const ukHighlight = region === "uk" ? pkg : undefined;
  const usHighlight = region === "us" ? pkg : undefined;

  return (
    <SiteShell>
      <PageHero eyebrow="Pricing" title="Transparent" highlight="flat pricing" description="No hidden fees, no surprises — everything published up front." />

      <Section className="!pt-10" id="uk-packages">
        <SectionHeader eyebrow="UK Company Formation" title="UK Ltd" highlight="packages" />
        <div className="mt-10"><PackageCards items={ukPackages} highlight={ukHighlight} /></div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-6">
          <PriceTable eyebrow="UK" title="UK Address Services" rows={ukAddresses} />
          <PriceTable eyebrow="UK" title="UK Compliance Services" rows={compliance} />
        </div>
      </Section>

      <Section id="us-packages">
        <SectionHeader eyebrow="USA LLC Formation" title="USA LLC" highlight="packages" description="Pick a state — every package re-prices automatically with that state's filing fee." />

        <div className="mt-8 glass-strong rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-end sm:justify-between">
          <div className="flex-1">
            <label htmlFor="state" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Formation State</label>
            <select
              id="state"
              value={activeState.slug}
              onChange={(e) =>
                navigate({
                  search: (prev: Record<string, unknown>) => ({ ...prev, region: "us" as const, state: e.target.value }),
                  replace: true,
                })
              }
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
            >
              {US_STATES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name} (+{fmtGBP(s.surcharge)} state fee)
                </option>
              ))}
            </select>
            {activeState.note && (
              <p className="mt-2 text-xs text-muted-foreground">{activeState.note}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {US_STATES.slice(0, 5).map((s) => {
              const isActive = s.slug === activeState.slug;
              return (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() =>
                    navigate({
                      search: (prev: Record<string, unknown>) => ({ ...prev, region: "us" as const, state: s.slug }),
                      replace: true,
                    })
                  }
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold border transition ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary glow-orange-sm"
                      : "border-primary/40 text-primary hover:bg-primary/10"
                  }`}
                >
                  {s.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8"><PackageCards items={usCards} highlight={usHighlight} /></div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-6">
          <PriceTable eyebrow="USA" title="USA Add-ons" rows={usAddons} />
          <PriceTable eyebrow="Banking" title="Banking & Payments Setup" rows={banking} />
        </div>
      </Section>

      <CTABanner title="Have a custom requirement?" subtitle="Message us and we'll build a tailored package within hours." />
    </SiteShell>
  );
}
