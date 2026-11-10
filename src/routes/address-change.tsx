import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/address-change")({
  head: () => ({
    meta: [
      { title: "Registered Office / Director Address Change — Formation Planet Ltd" },
      { name: "description", content: "Update your registered office or director's service address with Companies House." },
      { property: "og:title", content: "Registered Office / Director Address Change — Formation Planet Ltd" },
      { property: "og:description", content: "Update your registered office or director's service address with Companies House." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/address-change" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/address-change" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Compliance"
      title="Update your"
      highlight="Registered Address"
      price="£10"
      icon={MapPin}
      description="Change your company's registered office address or director's service address — filed with Companies House and reflected on the public register within hours."
      includes={[
        "AD01 / CH01 form filing",
        "Companies House submission",
        "Email & postal address update",
        "Confirmation of update",
        "Statutory record updates",
        "Compliance specialist",
      ]}
      process={[
        { step: "Send new address", body: "Share the new registered office or service address." },
        { step: "We file the form", body: "AD01 or CH01 submitted to Companies House." },
        { step: "Confirmation", body: "Public register updated — confirmation delivered." },
      ]}
      packages={[
        {
          name: "Address Change",
          price: "£10",
          meta: "Per change",
          popular: true,
          features: [
            "AD01 / CH01 filing",
            "Companies House submission",
            "Register update",
            "Confirmation",
            "Filing receipt",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
