import { createFileRoute, notFound } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

type Provider = {
  slug: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
};

export const providers: Provider[] = [
  { slug: "paypal", name: "PayPal", price: "£20", description: "Open a PayPal personal or business account to accept and send global payments with one of the most trusted checkout brands.", includes: ["Personal & business account setup", "Global payments in 25+ currencies", "Secure buyer/seller checkout", "Invoicing & subscriptions", "Mobile app & dashboard", "Integration with most ecommerce platforms"] },
  { slug: "payoneer", name: "Payoneer", price: "£20", description: "Receive marketplace and client payouts in USD, EUR and GBP local receiving accounts — perfect for freelancers and agencies.", includes: ["USD / EUR / GBP receiving accounts", "Marketplace payouts (Amazon, Upwork, Fiverr)", "Local bank withdrawals", "Multi-currency balances", "Mass payouts to contractors", "Free Payoneer Mastercard option"] },
  { slug: "worldfirst", name: "WorldFirst", price: "£20", description: "Multi-currency business account with interbank FX rates — built for online sellers and global B2B.", includes: ["10+ currency receiving accounts", "Marketplace integration", "FX at near-interbank rates", "Local payouts to suppliers", "Dedicated account manager", "World Card for online spending"] },
  { slug: "stripe", name: "Stripe", price: "£20", description: "Accept cards online, run subscriptions and build modern checkout flows — used by millions of internet businesses.", includes: ["Online card processing", "Subscriptions & invoicing", "Global checkout (135+ currencies)", "Stripe Tax & Radar fraud tools", "Developer-friendly APIs", "Connects with Shopify, WooCommerce, Wix"] },
  { slug: "tide", name: "Tide", price: "£50", description: "Modern UK business banking with expense cards, accounting integrations and built-in invoicing.", includes: ["UK business current account", "Sort code & account number", "Expense cards for the team", "Invoicing & bookkeeping tools", "Xero / QuickBooks integration", "Award-winning mobile app"] },
  { slug: "sunrate", name: "Sunrate", price: "£50", description: "Cross-border B2B payments and treasury platform with virtual cards and competitive FX.", includes: ["Cross-border B2B payments", "Multi-currency wallet", "Virtual & physical cards", "Treasury & FX hedging", "API for mass payouts", "Dedicated relationship manager"] },
  { slug: "wise", name: "Wise", price: "£70", description: "The Wise Business account gives you multi-currency balances, the real exchange rate and global payouts in one place.", includes: ["10 currency account details", "Real mid-market exchange rate", "Mass payouts (1000+ at once)", "Wise Business debit cards", "Xero / QuickBooks integration", "Open API for automation"] },
  { slug: "zyla", name: "Zyla", price: "£50", description: "Zyla business banking with cards, payouts and FX support for growing companies.", includes: ["Business banking account", "Debit cards & expense control", "Multi-currency support", "FX & payout tools", "Online dashboard", "Email & WhatsApp support"] },
  { slug: "airwallex", name: "Airwallex", price: "£50", description: "Global business account with borderless cards, FX and modern treasury tools.", includes: ["Global multi-currency accounts", "Borderless physical & virtual cards", "FX at competitive rates", "Treasury & spend management", "Bill pay & batch transfers", "Powerful API & integrations"] },
  { slug: "mollie", name: "Mollie", price: "£50", description: "European-first payments platform supporting 100+ local payment methods and recurring billing.", includes: ["100+ payment methods", "iDEAL, Bancontact, SEPA & cards", "Recurring billing & subscriptions", "One-click integrations", "Easy refunds & dispute tools", "Transparent per-transaction pricing"] },
  { slug: "zionpe", name: "ZionPe", price: "£50", description: "Crypto-friendly merchant payments with global payouts and modern merchant tools.", includes: ["Crypto + fiat payments", "Global payouts", "Merchant dashboard & tools", "Settlement in stable currencies", "Plug-and-play checkout", "Compliance & KYC included"] },
  { slug: "wallester", name: "Wallester", price: "£50", description: "Issue branded virtual and physical cards with a powerful API platform.", includes: ["Card issuing (virtual & physical)", "Visa BIN sponsorship", "Powerful issuing API", "Spend controls & limits", "White-label card programs", "EU regulated platform"] },
  { slug: "pingpong", name: "PingPong", price: "£50", description: "Cross-border payouts and marketplace receiving accounts for ecommerce sellers.", includes: ["Marketplace receiving accounts", "Cross-border B2B payouts", "VAT payment service", "Supplier payments", "Multi-currency wallet", "Dedicated seller support"] },
  { slug: "grey", name: "Grey", price: "£50", description: "USD, EUR and GBP receiving accounts for freelancers and remote workers worldwide.", includes: ["USD / EUR / GBP receiving accounts", "Freelancer & remote worker payouts", "Local bank withdrawals", "Multi-currency balances", "Virtual USD card", "Mobile-first experience"] },
  { slug: "taptap-send", name: "TapTap Send", price: "£50", description: "Fast, low-fee money transfers into emerging markets directly from your phone.", includes: ["Low-fee international transfers", "Send to emerging markets", "Direct bank & mobile money payouts", "Transparent FX rates", "Instant delivery in most corridors", "Mobile-first app"] },
  { slug: "nsave", name: "Nsave Business", price: "£50", description: "Offshore-friendly multi-currency business banking with secure transfers and modern tools.", includes: ["Offshore-friendly accounts", "Multi-currency balances", "Secure SWIFT & SEPA transfers", "Debit card access", "Online dashboard", "Compliance-first onboarding"] },
];

const bySlug = Object.fromEntries(providers.map((p) => [p.slug, p]));

export const Route = createFileRoute("/banking/$slug")({
  loader: ({ params }) => {
    const p = bySlug[params.slug];
    if (!p) throw notFound();
    return { provider: p };
  },
  head: ({ params, loaderData }) => {
    const url = `https://formation-planet-forge.lovable.app/banking/${params.slug}`;
    const name = loaderData?.provider.name ?? "Banking";
    const title = `${name} Account Opening | Formation Planet`;
    const desc = (loaderData?.provider.description ?? "Open business and personal accounts with leading global banking providers.").slice(0, 158);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${name} Account Opening`,
          description: loaderData.provider.description,
          provider: { "@type": "Organization", name: "Formation Planet Ltd" },
          areaServed: "Worldwide",
          offers: { "@type": "Offer", price: loaderData.provider.price.replace(/[^0-9.]/g, ""), priceCurrency: "GBP" },
        }),
      }] : undefined,
    };
  },
  component: Page,
});

function Page() {
  const { provider } = Route.useLoaderData();
  return (
    <ServiceDetail
      eyebrow="Banking & Payments"
      title={`Open your`}
      highlight={`${provider.name} account`}
      description={provider.description}
      price={provider.price}
      icon={Landmark}
      includes={provider.includes}
      process={[
        { step: "Share your details", body: "Send us your business or personal KYC info on WhatsApp." },
        { step: "We prepare the application", body: `Our team submits and tracks your ${provider.name} application end-to-end.` },
        { step: "Account live", body: "Receive your account credentials and start transacting immediately." },
      ]}
      requirements={[
        "Passport or government ID",
        "Proof of address (utility bill / bank statement)",
        "Company documents (if business account)",
        "Brief description of business activity",
      ]}
      packages={[
        {
          name: `${provider.name} Account`,
          price: provider.price,
          meta: "One-time setup fee",
          popular: true,
          features: [...provider.includes, "WhatsApp support throughout", "Fast turnaround"],
        },
      ]}
    />
  );
}
