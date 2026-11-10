import { createFileRoute } from "@tanstack/react-router";
import { FilePlus2 } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/psc-secretary-update")({
  head: () => ({
    meta: [
      { title: "PSC / Secretary Update — Formation Planet Ltd" },
      { name: "description", content: "Update Person with Significant Control or Company Secretary details with Companies House." },
      { property: "og:title", content: "PSC / Secretary Update — Formation Planet Ltd" },
      { property: "og:description", content: "Update Person with Significant Control or Company Secretary details with Companies House." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/psc-secretary-update" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/psc-secretary-update" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Compliance"
      title="Update PSC or"
      highlight="Secretary Details"
      price="£10"
      icon={FilePlus2}
      description="Update Person with Significant Control (PSC) details or appoint / remove a Company Secretary — fully compliant with Companies House requirements."
      includes={[
        "PSC01 / PSC02 / PSC04 filing",
        "AP03 / TM02 secretary forms",
        "Ownership % updates",
        "Nature of control updates",
        "Companies House submission",
        "Statutory register update",
      ]}
      process={[
        { step: "Share the change", body: "Tell us what needs to be updated." },
        { step: "We prepare & file", body: "Correct PSC or secretary form filed with Companies House." },
        { step: "Confirmation", body: "Public register updated and confirmation provided." },
      ]}
      packages={[
        {
          name: "PSC / Secretary Update",
          price: "£10",
          meta: "Per change",
          popular: true,
          features: [
            "PSC filings",
            "Secretary appointment / removal",
            "Ownership updates",
            "Companies House submission",
            "Register update",
            "WhatsApp support",
          ],
        },
      ]}
    />
  ),
});
