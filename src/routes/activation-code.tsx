import { createFileRoute } from "@tanstack/react-router";
import { Power } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/activation-code")({
  head: () => ({
    meta: [
      { title: "Activation Code Service — Formation Planet Ltd" },
      { name: "description", content: "Activate your HMRC online services with a fresh activation code — fast and reliable." },
      { property: "og:title", content: "Activation Code Service — Formation Planet Ltd" },
      { property: "og:description", content: "Activate your HMRC online services with a fresh activation code — fast and reliable." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/activation-code" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/activation-code" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="HMRC"
      title="Activation"
      highlight="Code Service"
      price="£10"
      icon={Power}
      description="Professional activation code service delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond."
      includes={[
        "HMRC liaison",
        "Activation code request",
        "Account setup guidance",
        "Reset support if needed",
        "Postal tracking",
        "Dedicated specialist",
      ]}
      process={[
        { step: "Send your details", body: "Provide your Government Gateway and company info." },
        { step: "We request the code", body: "We file with HMRC for your activation code." },
        { step: "Activate online", body: "Use the code to enable HMRC online services." },
      ]}
      packages={[
        {
          name: "Activation Code",
          price: "£10",
          meta: "One-time fee",
          popular: true,
          features: [
            "HMRC activation code request",
            "Account setup guidance",
            "Reset support if needed",
            "Postal tracking",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
