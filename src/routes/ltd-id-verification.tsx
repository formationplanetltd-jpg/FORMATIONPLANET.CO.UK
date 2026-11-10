import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/ltd-id-verification")({
  head: () => ({
    meta: [
      { title: "LTD ID Verification — Formation Planet Ltd" },
      { name: "description", content: "Mandatory Companies House identity verification for directors, PSCs, secretaries and shareholders." },
      { property: "og:title", content: "LTD ID Verification — Formation Planet Ltd" },
      { property: "og:description", content: "Mandatory Companies House identity verification for directors, PSCs, secretaries and shareholders." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/ltd-id-verification" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/ltd-id-verification" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="UK Compliance"
      title="LTD ID"
      highlight="Verification"
      price="£20"
      icon={ShieldCheck}
      description="Ready to verify your identity and keep your UK LTD compliant? Begin your secure Companies House identity check in minutes — one-time fee, worldwide officers accepted."
      includes={[
        "Secure digital identity verification",
        "Fast document review",
        "For UK & non-UK officers",
        "Accepted for Companies House",
        "Compliance-ready processing",
        "Refile support if rejected",
      ]}
      process={[
        { step: "Share your documents", body: "Upload your passport or national ID and proof of address." },
        { step: "We submit", body: "Our team submits the verification to Companies House on your behalf." },
        { step: "Verified in 24h", body: "Receive your verification certificate digitally." },
      ]}
      whoNeedsIt={[
        { role: "Company Director", note: "All directors must verify identity." },
        { role: "Person with Significant Control", note: "PSCs are now required to verify." },
        { role: "Company Secretary", note: "Secretaries must complete DIATF checks." },
        { role: "Shareholder", note: "Major shareholders may need verification." },
      ]}
      requirements={[
        "ID card or passport picture",
        "Live selfie",
        "Home address",
        "Residential bank statement",
        "Email address",
      ]}
      packages={[
        {
          name: "ID Verification",
          price: "£20",
          meta: "One-time fee · Worldwide officers accepted",
          popular: true,
          features: [
            "Secure digital identity verification",
            "Companies House DIATF compliant",
            "Digital verification certificate",
            "Fast turnaround",
            "Support included",
          ],
        },
      ]}
    />
  ),
});
