import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/itin")({
  head: () => ({
    meta: [
      { title: "ITIN Application — Formation Planet Ltd" },
      { name: "description", content: "Individual Taxpayer Identification Number (ITIN) for non-US residents — handled by Certified Acceptance Agents." },
      { property: "og:title", content: "ITIN Application — Formation Planet Ltd" },
      { property: "og:description", content: "Individual Taxpayer Identification Number (ITIN) for non-US residents — handled by Certified Acceptance Agents." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/itin" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/itin" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="USA / IRS"
      title="Apply for your"
      highlight="ITIN Number"
      price="$200"
      icon={BadgeCheck}
      description="Individual Taxpayer Identification Number for non-US residents — required for US tax filing, Amazon, Stripe and other US platforms. Filed via Certified Acceptance Agents so you don't need to send your passport."
      includes={[
        "W-7 application preparation",
        "Certified Acceptance Agent support",
        "Document certification (no passport mailing)",
        "Federal tax return attachment if needed",
        "IRS submission & tracking",
        "ITIN delivery by post & email",
      ]}
      process={[
        { step: "Share your documents", body: "Send your passport scan and supporting documents securely." },
        { step: "We certify & file", body: "Our CAA certifies your ID and files W-7 with the IRS." },
        { step: "Receive your ITIN", body: "Usually within 7–11 weeks, delivered by post." },
      ]}
      packages={[
        {
          name: "ITIN Service",
          price: "$200",
          meta: "One-time · CAA handled",
          popular: true,
          features: [
            "W-7 preparation",
            "CAA document certification",
            "IRS submission",
            "Status tracking",
            "Post & email delivery",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
