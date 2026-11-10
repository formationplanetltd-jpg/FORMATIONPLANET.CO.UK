import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/director-change")({
  head: () => ({
    meta: [
      { title: "Appoint or Remove Director — Formation Planet Ltd" },
      { name: "description", content: "Appoint a new director or remove an existing one from your UK Ltd — filed with Companies House." },
      { property: "og:title", content: "Appoint or Remove Director — Formation Planet Ltd" },
      { property: "og:description", content: "Appoint a new director or remove an existing one from your UK Ltd — filed with Companies House." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/director-change" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/director-change" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Compliance"
      title="Appoint or Remove"
      highlight="a Director"
      price="£10"
      icon={Users}
      description="Officially add or remove a director from your UK Limited company — AP01 or TM01 form prepared and filed with Companies House."
      includes={[
        "AP01 (appoint) form filing",
        "TM01 (terminate) form filing",
        "ID verification check",
        "Companies House submission",
        "Register of directors update",
        "Filing confirmation",
      ]}
      process={[
        { step: "Send director details", body: "Provide the new director info or removal request." },
        { step: "We file the form", body: "AP01 or TM01 filed with Companies House." },
        { step: "Register updated", body: "Public register reflects the change within hours." },
      ]}
      packages={[
        {
          name: "Director Change",
          price: "£10",
          meta: "Per appointment / removal",
          popular: true,
          features: [
            "AP01 / TM01 filing",
            "Companies House submission",
            "Register update",
            "Confirmation",
            "ID verification check",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
