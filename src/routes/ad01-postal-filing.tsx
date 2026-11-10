import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/ad01-postal-filing")({
  head: () => ({
    meta: [
      { title: "AD01 Postal Filing — Formation Planet Ltd" },
      { name: "description", content: "Sensitive AD01 postal filings handled securely when online filing is restricted." },
      { property: "og:title", content: "AD01 Postal Filing — Formation Planet Ltd" },
      { property: "og:description", content: "Sensitive AD01 postal filings handled securely when online filing is restricted." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/ad01-postal-filing" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/ad01-postal-filing" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Compliance"
      title="AD01 Postal"
      highlight="Filing Service"
      price="£100"
      icon={Mail}
      description="Postal AD01 filing for sensitive registered office address updates — used when online filing is blocked due to disputes or restrictions on the company record."
      includes={[
        "AD01 paper form preparation",
        "Supporting documents pack",
        "Tracked postal submission",
        "Companies House liaison",
        "Follow-up until accepted",
        "Confirmation provided",
      ]}
      process={[
        { step: "Share the address", body: "Send new registered office and any supporting docs." },
        { step: "We file by post", body: "AD01 sent by tracked post with full document pack." },
        { step: "Confirmation", body: "We track until Companies House accepts the filing." },
      ]}
      packages={[
        {
          name: "AD01 Postal",
          price: "£100",
          meta: "One-time · Includes postage",
          popular: true,
          features: [
            "AD01 preparation",
            "Supporting documents",
            "Tracked postal submission",
            "Companies House follow-up",
            "Confirmation",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
