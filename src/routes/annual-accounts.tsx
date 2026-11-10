import { createFileRoute } from "@tanstack/react-router";
import { Receipt } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/annual-accounts")({
  head: () => ({
    meta: [
      { title: "Annual Accounts Filing — Formation Planet Ltd" },
      { name: "description", content: "Year-end statutory accounts prepared and filed with Companies House and HMRC." },
      { property: "og:title", content: "Annual Accounts Filing — Formation Planet Ltd" },
      { property: "og:description", content: "Year-end statutory accounts prepared and filed with Companies House and HMRC." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/annual-accounts" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/annual-accounts" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Compliance"
      title="UK Annual"
      highlight="Accounts Filing"
      price="£120"
      icon={Receipt}
      description="Statutory year-end accounts prepared and filed with both Companies House and HMRC — fully compliant with FRS 105 / FRS 102 for small companies."
      includes={[
        "Year-end accounts preparation",
        "Companies House filing",
        "HMRC corporation tax (CT600)",
        "Profit & loss summary",
        "Balance sheet preparation",
        "Filing confirmation",
      ]}
      process={[
        { step: "Share your bookkeeping", body: "Send invoices, statements and expense records." },
        { step: "We prepare accounts", body: "Our accountants prepare statutory accounts and CT600." },
        { step: "Filed on time", body: "Filed with Companies House & HMRC before deadline." },
      ]}
      packages={[
        {
          name: "Annual Accounts",
          price: "£120",
          meta: "Per financial year",
          popular: true,
          features: [
            "Statutory accounts",
            "Companies House filing",
            "HMRC CT600 filing",
            "Profit & loss",
            "Balance sheet",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
