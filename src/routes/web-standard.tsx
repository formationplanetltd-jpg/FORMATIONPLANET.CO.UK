import { createFileRoute } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/web-standard")({
  head: () => ({
    meta: [
      { title: "Standard Website (React) — £60 — Formation Planet Ltd" },
      { name: "description", content: "10-page React-based business website with animations, blog, advanced SEO and CMS — only £60." },
      { property: "og:title", content: "Standard Website (React) — £60 — Formation Planet Ltd" },
      { property: "og:description", content: "10-page React-based business website with animations, blog, advanced SEO and CMS — only £60." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/web-standard" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/web-standard" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Web Development"
      title="Standard React"
      highlight="Website — 10 Pages"
      price="£60"
      icon={Code2}
      description="A professional 10-page React website with animations, blog, advanced SEO and CMS — built for growing businesses that want to look premium."
      includes={[
        "10 fully responsive React pages",
        "Smooth animations & micro-interactions",
        "Blog / news section",
        "Advanced on-page SEO",
        "Google Analytics integration",
        "Contact + lead capture forms",
        "WhatsApp & social integration",
        "Sitemap & robots.txt",
        "Free SSL & deployment",
        "2 revision rounds",
      ]}
      process={[
        { step: "Discovery", body: "We discuss goals, structure and content needs on WhatsApp." },
        { step: "Design & development", body: "Our React team delivers your 10-page site in 10–14 days." },
        { step: "Launch & handover", body: "We deploy live and hand over source code + training." },
      ]}
      packages={[
        {
          name: "Standard React Website",
          price: "£60",
          meta: "10 pages • 10–14 days delivery",
          popular: true,
          features: [
            "10 React-based pages",
            "Animations & transitions",
            "Blog/news module",
            "Advanced SEO + Analytics",
            "Lead capture forms",
            "Free SSL + deployment",
            "2 revision rounds",
          ],
        },
      ]}
    />
  ),
});
