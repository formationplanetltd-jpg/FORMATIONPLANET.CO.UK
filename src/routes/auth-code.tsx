import { createFileRoute } from "@tanstack/react-router";
import { KeyRound } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/auth-code")({
  head: () => ({
    meta: [
      { title: "Companies House Authentication Code — Formation Planet Ltd" },
      { name: "description", content: "Request or reset your Companies House authentication code quickly." },
      { property: "og:title", content: "Companies House Authentication Code — Formation Planet Ltd" },
      { property: "og:description", content: "Request or reset your Companies House authentication code quickly." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/auth-code" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/auth-code" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Companies House"
      title="Companies House"
      highlight="Authentication Code"
      price="£10"
      icon={KeyRound}
      description="Professional Companies House authentication code service delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond."
      includes={[
        "Authentication code request",
        "Companies House liaison",
        "Postal tracking",
        "Replacement-code support",
        "Setup guidance",
        "Dedicated specialist",
      ]}
      process={[
        { step: "Confirm your details", body: "Send your company number and registered address." },
        { step: "We request the code", body: "We submit the request directly to Companies House." },
        { step: "Code delivered", body: "Posted to your registered office within days." },
      ]}
      packages={[
        {
          name: "Authentication Code",
          price: "£10",
          meta: "One-time fee · Fast turnaround",
          popular: true,
          features: [
            "Authentication code request",
            "Companies House liaison",
            "Postal tracking",
            "Replacement-code support",
            "Setup guidance",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
