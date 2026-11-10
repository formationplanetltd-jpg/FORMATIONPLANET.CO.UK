import { createFileRoute } from "@tanstack/react-router";
import { Receipt } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/uk-vat-registration")({
  head: () => ({
    meta: [
      { title: "UK VAT Registration & Submission — Formation Planet Ltd" },
      { name: "description", content: "Register for VAT with HMRC and stay compliant with quarterly Making Tax Digital filing." },
      { property: "og:title", content: "UK VAT Registration & Submission — Formation Planet Ltd" },
      { property: "og:description", content: "Register for VAT with HMRC and stay compliant with quarterly Making Tax Digital filing." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/uk-vat-registration" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/uk-vat-registration" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="HMRC"
      title="UK VAT Registration"
      highlight="& Submission"
      price="£100"
      icon={Receipt}
      description="Professional UK VAT registration and submission delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond."
      includes={[
        "VAT registration with HMRC",
        "Scheme selection guidance (Flat-Rate / Standard)",
        "Quarterly return preparation",
        "Making Tax Digital ready",
        "HMRC liaison",
        "Ongoing compliance support",
      ]}
      process={[
        { step: "Share business details", body: "We confirm your VAT scheme and expected turnover." },
        { step: "We register", body: "We apply to HMRC and receive your VAT number." },
        { step: "Ongoing filing", body: "We prepare and file your quarterly VAT returns on time." },
      ]}
      packages={[
        {
          name: "VAT Registration",
          price: "£100",
          meta: "One-time setup",
          features: [
            "VAT registration with HMRC",
            "Scheme selection guidance",
            "VAT number issued by HMRC",
            "Making Tax Digital ready",
            "Setup support",
          ],
        },
        {
          name: "Registration + Quarterly Filing",
          price: "£250",
          meta: "Per quarter after setup",
          popular: true,
          features: [
            "Everything in Registration",
            "Quarterly VAT return preparation",
            "Submission to HMRC (MTD)",
            "Bookkeeping review",
            "Compliance reminders",
            "Dedicated specialist",
          ],
        },
      ]}
    />
  ),
});
