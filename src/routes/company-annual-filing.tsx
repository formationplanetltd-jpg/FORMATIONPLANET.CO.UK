import { createFileRoute } from "@tanstack/react-router";
import { FileCheck2 } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/company-annual-filing")({
  head: () => ({
    meta: [
      { title: "Confirmation Statement Filing — Formation Planet Ltd" },
      { name: "description", content: "Professional confirmation statement filing handled end-to-end for UK Ltd companies." },
      { property: "og:title", content: "Confirmation Statement Filing — Formation Planet Ltd" },
      { property: "og:description", content: "Professional confirmation statement filing handled end-to-end for UK Ltd companies." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/company-annual-filing" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/company-annual-filing" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Compliance"
      title="Confirmation"
      highlight="Statement Filing"
      price="£80"
      icon={FileCheck2}
      description="Professional confirmation statement filing delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond."
      includes={[
        "Fully managed end-to-end process",
        "Transparent fixed pricing — no hidden fees",
        "Dedicated specialist on your case",
        "Status updates at every stage",
        "PSC & shareholder updates",
        "Companies House filing receipt",
      ]}
      process={[
        { step: "Book a free consultation", body: "Tell us about your company on WhatsApp." },
        { step: "We collect your details", body: "Securely confirm PSC, share and director info." },
        { step: "We file it for you", body: "Our team submits to Companies House and tracks status." },
      ]}
      packages={[
        {
          name: "Confirmation Statement",
          price: "£80",
          meta: "Companies House fee included",
          popular: true,
          features: [
            "Prepare your annual confirmation statement",
            "File with Companies House (£50 fee included)",
            "Director identity verification details collected",
            "Avoid strike-off and compliance issues",
            "Filing receipt provided",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
