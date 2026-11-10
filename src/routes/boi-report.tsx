import { createFileRoute } from "@tanstack/react-router";
import { ScrollText } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/boi-report")({
  head: () => ({
    meta: [
      { title: "BOI Report Filing (FinCEN) — Formation Planet Ltd" },
      { name: "description", content: "Beneficial Ownership Information report filed with FinCEN for your US LLC." },
      { property: "og:title", content: "BOI Report Filing (FinCEN) — Formation Planet Ltd" },
      { property: "og:description", content: "Beneficial Ownership Information report filed with FinCEN for your US LLC." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/boi-report" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/boi-report" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="USA / FinCEN"
      title="File your"
      highlight="BOI Report"
      price="$20"
      icon={ScrollText}
      description="Beneficial Ownership Information (BOI) report filed with FinCEN — mandatory for most US LLCs and corporations under the Corporate Transparency Act."
      includes={[
        "Beneficial owner identification",
        "FinCEN BOI e-filing",
        "Document collection & review",
        "Confirmation receipt",
        "Updates / amendments support",
        "Compliance specialist",
      ]}
      process={[
        { step: "Share owner details", body: "Send beneficial owner IDs and ownership breakdown." },
        { step: "We file with FinCEN", body: "BOI report submitted electronically to FinCEN." },
        { step: "Receive confirmation", body: "Filing confirmation delivered by email." },
      ]}
      packages={[
        {
          name: "BOI Filing",
          price: "$20",
          meta: "One-time · FinCEN submission",
          popular: true,
          features: [
            "Beneficial owner review",
            "FinCEN e-filing",
            "Confirmation receipt",
            "Amendment guidance",
            "Compliance check",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
