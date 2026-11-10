import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/registered-office-address")({
  head: () => ({
    meta: [
      { title: "Registered Office Address — Formation Planet Ltd" },
      { name: "description", content: "Prestigious UK registered and business service addresses with mail handling and scanning." },
      { property: "og:title", content: "Registered Office Address — Formation Planet Ltd" },
      { property: "og:description", content: "Prestigious UK registered and business service addresses with mail handling and scanning." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/registered-office-address" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/registered-office-address" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Address"
      title="Registered Office"
      highlight="Address — UK LTD"
      price="£40"
      icon={MapPin}
      description="Use our secure and official UK Registered Office Addresses for your company registration and compliance. Receive all government correspondence digitally or via post — and maintain a professional UK business presence."
      includes={[
        "Premium UK address",
        "Mail handling (up to 10 items/month)",
        "Digital scanning & email notification",
        "Companies House compliant",
        "Director service address option",
        "Proof of address provided",
        "Client portal access",
        "12-month coverage",
      ]}
      process={[
        { step: "Subscribe", body: "Choose your address plan and complete checkout." },
        { step: "We update Companies House", body: "We file the address change on your behalf." },
        { step: "Mail forwarded", body: "Receive scans by email as items arrive." },
      ]}
      whoNeedsIt={[
        { role: "Directors", note: "Receive official government mail." },
        { role: "Company Secretaries", note: "Maintain Companies House compliance." },
        { role: "Shareholders", note: "Official documentation & correspondence." },
        { role: "Small & Medium Businesses", note: "Establish a professional UK presence." },
      ]}
      packages={[
        {
          name: "Registered Office Address",
          price: "£40",
          meta: "per year · 1 Year Contract",
          features: [
            "Unique office number with address",
            "Use for registration of 1 company",
            "All UK government body mail",
            "Receive post (up to 10 items/month)",
            "Email notification on mail receipt",
            "Proof of address provided",
            "Scan & email your mail",
            "Mail forwarding (paid add-on)",
            "Client portal access",
          ],
        },
        {
          name: "Business Service Address",
          price: "£60",
          meta: "per year · Most Popular",
          popular: true,
          features: [
            "Unique office number with address",
            "Use for registration of 1 company",
            "Use for marketing & advertising",
            "Receive post (up to 10 items/month)",
            "Email notification on mail receipt",
            "Proof of address provided",
            "Scan & email your mail",
            "Mail forwarding (paid add-on)",
            "Client portal access",
          ],
        },
        {
          name: "Director Service Address",
          price: "£30",
          meta: "per year · per director",
          features: [
            "Private address for directors",
            "Keep home address off public register",
            "Mail forwarding included",
            "Email notifications",
            "Companies House compliant",
            "Client portal access",
          ],
        },
      ]}
    />
  ),
});
