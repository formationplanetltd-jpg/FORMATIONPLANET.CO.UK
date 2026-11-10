import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/utr-number")({
  head: () => ({
    meta: [
      { title: "Get UTR Number (HMRC) — Formation Planet Ltd" },
      { name: "description", content: "Professional UTR number registration with HMRC — fast, transparent and fully compliant." },
      { property: "og:title", content: "Get UTR Number (HMRC) — Formation Planet Ltd" },
      { property: "og:description", content: "Professional UTR number registration with HMRC — fast, transparent and fully compliant." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/utr-number" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/utr-number" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="HMRC"
      title="Get Your"
      highlight="UTR Number (HMRC)"
      price="£30"
      icon={FileText}
      description="Professional UTR number registration delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond."
      includes={[
        "HMRC application handled for you",
        "Document preparation & review",
        "Status tracking until issued",
        "UTR delivery by post & email",
        "Tax-account setup guidance",
        "Dedicated specialist",
      ]}
      process={[
        { step: "Share your details", body: "Send your incorporation and director information." },
        { step: "We apply to HMRC", body: "We submit the request and track its status." },
        { step: "Receive your UTR", body: "Usually within 2–4 weeks, delivered by post & email." },
      ]}
      packages={[
        {
          name: "UTR Number Service",
          price: "£30",
          meta: "One-time fee · HMRC application",
          popular: true,
          features: [
            "Full HMRC application",
            "Document preparation",
            "Status tracking",
            "UTR by post & email",
            "Setup guidance",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
