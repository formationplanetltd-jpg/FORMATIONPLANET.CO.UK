import { createFileRoute } from "@tanstack/react-router";
import { UserCog } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/company-name-change")({
  head: () => ({
    meta: [
      { title: "Company Name Change — Formation Planet Ltd" },
      { name: "description", content: "Change your UK Ltd company name with Companies House — handled end-to-end." },
      { property: "og:title", content: "Company Name Change — Formation Planet Ltd" },
      { property: "og:description", content: "Change your UK Ltd company name with Companies House — handled end-to-end." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/company-name-change" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/company-name-change" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Compliance"
      title="Change your"
      highlight="Company Name"
      price="£30"
      icon={UserCog}
      description="Officially change your registered UK company name — special resolution prepared, filed with Companies House and a new Certificate of Incorporation on Change of Name issued."
      includes={[
        "Name availability check",
        "Special resolution drafting",
        "NM01 form filing",
        "Companies House fee included",
        "New incorporation certificate",
        "Statutory record updates",
      ]}
      process={[
        { step: "Pick your new name", body: "We check availability and trademark conflicts." },
        { step: "Resolution & filing", body: "Special resolution prepared and filed with Companies House." },
        { step: "Receive new certificate", body: "Updated Certificate of Incorporation delivered." },
      ]}
      packages={[
        {
          name: "Name Change",
          price: "£30",
          meta: "One-time · Companies House",
          popular: true,
          features: [
            "Name availability check",
            "Special resolution",
            "NM01 filing",
            "Govt fee included",
            "New certificate",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
