import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/ein")({
  head: () => ({
    meta: [
      { title: "EIN (Employer ID Number) — Formation Planet Ltd" },
      { name: "description", content: "Get your EIN from the IRS — required for US banking, payroll and tax filing." },
      { property: "og:title", content: "EIN (Employer ID Number) — Formation Planet Ltd" },
      { property: "og:description", content: "Get your EIN from the IRS — required for US banking, payroll and tax filing." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/ein" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/ein" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="USA / IRS"
      title="Get your"
      highlight="EIN (Employer ID)"
      price="$50"
      icon={BadgeCheck}
      description="Federal Employer Identification Number from the IRS — required to open US business bank accounts, hire staff and file taxes. We handle the SS-4 application end-to-end for non-residents."
      includes={[
        "SS-4 application prepared & filed",
        "IRS submission by fax or mail",
        "EIN confirmation letter (CP-575)",
        "Suitable for non-resident owners",
        "Delivered by email & PDF",
        "Dedicated specialist",
      ]}
      process={[
        { step: "Share your LLC details", body: "Send your LLC formation documents and responsible party info." },
        { step: "We submit to IRS", body: "We prepare and submit Form SS-4 directly to the IRS." },
        { step: "Receive your EIN", body: "Typically 1–4 weeks; rush options available." },
      ]}
      packages={[
        {
          name: "EIN Service",
          price: "$50",
          meta: "One-time · IRS application",
          popular: true,
          features: [
            "Full SS-4 preparation",
            "IRS submission handled",
            "EIN confirmation letter",
            "Email & PDF delivery",
            "Non-resident friendly",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
