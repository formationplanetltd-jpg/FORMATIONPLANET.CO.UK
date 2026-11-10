import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/web-basic")({
  head: () => ({
    meta: [
      { title: "Basic Website (React) — £30 — Formation Planet Ltd" },
      { name: "description", content: "4-page React-based business website with mobile-responsive design, SEO basics and contact form — only £30." },
      { property: "og:title", content: "Basic Website (React) — £30 — Formation Planet Ltd" },
      { property: "og:description", content: "4-page React-based business website with mobile-responsive design, SEO basics and contact form — only £30." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/web-basic" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/web-basic" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Web Development"
      title="Basic React"
      highlight="Website — 4 Pages"
      price="£30"
      icon={Layout}
      description="A clean, fast, mobile-responsive 4-page website built on React — perfect for startups, freelancers and small businesses launching online."
      includes={[
        "4 fully responsive pages",
        "React-based modern frontend",
        "Home, About, Services, Contact",
        "Mobile, tablet & desktop optimized",
        "Contact form with WhatsApp link",
        "Basic on-page SEO setup",
        "Social media icons integration",
        "Free deployment to Vercel/Netlify",
      ]}
      process={[
        { step: "Share your brief", body: "Send your logo, content and references on WhatsApp." },
        { step: "We design & build", body: "Our React team builds your 4-page site in 5–7 days." },
        { step: "Launch", body: "We deploy your site live and hand over the source code." },
      ]}
      packages={[
        {
          name: "Basic React Website",
          price: "£30",
          meta: "4 pages • 5–7 days delivery",
          popular: true,
          features: [
            "4 React-based pages",
            "Mobile responsive design",
            "Contact form + WhatsApp",
            "Basic SEO meta tags",
            "Free deployment",
            "1 revision round",
          ],
        },
      ]}
    />
  ),
});
