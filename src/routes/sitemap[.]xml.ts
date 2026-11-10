import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://formation-planet-forge.lovable.app";

const paths = [
  "/",
  "/about", "/contact", "/faq", "/pricing",
  "/uk-services", "/uk-compliance", "/usa-services", "/banks-payment-solutions", "/web-development",
  "/uk-ltd-formation", "/ltd-id-verification", "/registered-office-address",
  "/company-annual-filing", "/utr-number", "/auth-code", "/activation-code", "/uk-vat-registration",
  "/ad01-postal-filing", "/address-change", "/annual-accounts", "/annual-tax-filing", "/boi-report",
  "/company-name-change", "/director-change", "/psc-secretary-update", "/ein", "/itin",
  "/web-basic", "/web-standard", "/web-premium", "/web-ecommerce",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
