import { createFileRoute } from "@tanstack/react-router";
import { FileSpreadsheet } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/annual-tax-filing")({
  head: () => ({
    meta: [
      { title: "US Annual Tax Filing (5472 & 1120) — Formation Planet Ltd" },
      { name: "description", content: "Form 5472 and 1120 annual tax filing for non-resident US LLC owners." },
      { property: "og:title", content: "US Annual Tax Filing (5472 & 1120) — Formation Planet Ltd" },
      { property: "og:description", content: "Form 5472 and 1120 annual tax filing for non-resident US LLC owners." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/annual-tax-filing" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/annual-tax-filing" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="USA / IRS"
      title="US Annual"
      highlight="Tax Filing"
      price="$100"
      icon={FileSpreadsheet}
      description="Form 5472 and pro-forma 1120 filing for non-resident owned single-member LLCs — required annually even if you owe zero tax. Avoid the $25,000 IRS penalty."
      includes={[
        "Form 5472 preparation",
        "Pro-forma 1120 preparation",
        "Reportable transactions review",
        "IRS filing by mail or fax",
        "Filing confirmation",
        "Tax specialist guidance",
      ]}
      process={[
        { step: "Share your records", body: "Send LLC bank statements and transaction summary." },
        { step: "We prepare your filings", body: "5472 and 1120 prepared by our US tax team." },
        { step: "Submitted to IRS", body: "Filed before the April 15 deadline; confirmation provided." },
      ]}
      packages={[
        {
          name: "Annual Filing",
          price: "$100",
          meta: "Per tax year · 5472 + 1120",
          popular: true,
          features: [
            "Form 5472 preparation",
            "Pro-forma 1120",
            "Transactions review",
            "IRS submission",
            "Filing confirmation",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
