import { createFileRoute } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/web-premium")({
  head: () => ({
    meta: [
      { title: "Premium Website (React) — £150 — Formation Planet Ltd" },
      { name: "description", content: "20-page premium React website with custom design, CMS, animations, advanced SEO and ongoing support — £150." },
      { property: "og:title", content: "Premium Website (React) — £150 — Formation Planet Ltd" },
      { property: "og:description", content: "20-page premium React website with custom design, CMS, animations, advanced SEO and ongoing support — £150." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/web-premium" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/web-premium" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Web Development"
      title="Premium React"
      highlight="Website — 20 Pages"
      price="£150"
      icon={Rocket}
      description="A flagship 20-page React website with fully custom design, CMS, premium animations, advanced SEO and a month of free support — built for serious brands."
      includes={[
        "20 fully responsive React pages",
        "Fully custom UI/UX design",
        "Premium Motion animations",
        "Headless CMS (so you can edit content)",
        "Advanced SEO & schema markup",
        "Google Analytics + Search Console",
        "Blog, portfolio & case studies",
        "Multi-language ready",
        "Performance score 95+",
        "Free deployment + SSL",
        "Unlimited revisions for 30 days",
        "1 month free support",
      ]}
      process={[
        { step: "Strategy & wireframes", body: "We map every page, content and conversion goal together." },
        { step: "Custom design & build", body: "Our React team designs and ships your 20-page site in 3–4 weeks." },
        { step: "Launch & support", body: "We deploy live and provide 30 days of free fixes & tweaks." },
      ]}
      packages={[
        {
          name: "Premium React Website",
          price: "£150",
          meta: "20 pages • 3–4 weeks delivery",
          popular: true,
          features: [
            "20 React-based pages",
            "Custom UI/UX design",
            "Headless CMS included",
            "Premium animations",
            "Advanced SEO + schema",
            "Multi-language ready",
            "30 days free support",
            "Unlimited revisions (30 days)",
          ],
        },
      ]}
    />
  ),
});
