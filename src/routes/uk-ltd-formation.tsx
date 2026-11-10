import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/uk-ltd-formation")({
  head: () => ({
    meta: [
      { title: "UK LTD Company Formation — Formation Planet Ltd" },
      { name: "description", content: "Register your UK Limited company in days with UTR, ID verification and registered office included." },
      { property: "og:title", content: "UK LTD Company Formation — Formation Planet Ltd" },
      { property: "og:description", content: "Register your UK Limited company in days with UTR, ID verification and registered office included." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/uk-ltd-formation" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/uk-ltd-formation" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "UK LTD Company Formation",
        description: "Register your UK Limited company in 24 hours with UTR, ID verification and registered office.",
        provider: { "@type": "Organization", name: "Formation Planet Ltd" },
        areaServed: "GB",
        offers: { "@type": "Offer", price: "140", priceCurrency: "GBP" },
      }),
    }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Formation"
      title="Register your UK Limited"
      highlight="Company in days"
      price="£140"
      icon={Building2}
      description="Fast, compliant and fully supported UK LTD registration with UTR, ID verification and registered office services — handled remotely by Formation Planet specialists."
      includes={[
        "Companies House incorporation",
        "Digital & printed company documents",
        "UTR registration with HMRC",
        "Company authentication code",
        "Registered office & director service address",
        "ID verification (DIATF)",
        "Ongoing client support",
        "Secure document handling",
      ]}
      process={[
        { step: "Send your details", body: "Share director, shareholder and company name details on WhatsApp." },
        { step: "We file with Companies House", body: "Our specialists prepare and submit your incorporation pack." },
        { step: "Receive your company", body: "All documents delivered digitally — start trading immediately." },
      ]}
      packages={[
        {
          name: "Starter",
          price: "£140",
          meta: "Processing: 3–5 Business Days",
          features: [
            "UK LTD (Company) Registration",
            "Companies House Incorporation Fee Included",
            "Digital Certificate of Incorporation",
            "Digital Memorandum & Articles of Association",
            "Digital Copy of All Documents (PDF)",
            "Digital Shares Certificate",
            "ID Verification Included",
            "Client Portal Access (document uploads & status updates)",
            "12/6 Phone & WhatsApp Support",
          ],
        },
        {
          name: "Silver",
          price: "£170",
          meta: "Most chosen by founders",
          popular: true,
          features: [
            "UK LTD (Company) Registration",
            "Companies House Incorporation Fee Included",
            "Digital + Printed Certificate of Incorporation",
            "Digital Memorandum & Articles of Association",
            "Registered Office Address",
            "Company Authentication Code",
            "UTR Number",
            "Digital Shares Certificate",
            "ID Verification Included",
            "Client Portal Access",
          ],
        },
        {
          name: "Gold",
          price: "£180",
          features: [
            "UK LTD (Company) Registration",
            "Companies House Incorporation Fee Included",
            "Digital Certificate of Incorporation",
            "Digital Memorandum & Articles of Association",
            "Registered Office Address",
            "Company Authentication Code",
            "UTR Number",
            "Digital Shares Certificate",
            "ID Verification Included",
            "Director Service Address",
            "Client Portal Access",
          ],
        },
        {
          name: "Platinum",
          price: "£200",
          features: [
            "UK LTD (Company) Registration",
            "Companies House Incorporation Fee Included",
            "Digital Certificate of Incorporation",
            "Digital Memorandum & Articles of Association",
            "London Registered Office Address",
            "Company Authentication Code",
            "UTR Number",
            "Digital Shares Certificate",
            "ID Verification Included",
            "Director Service Address",
            "Client Portal Access",
          ],
        },
      ]}
    />
  ),
});
