import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/web-ecommerce")({
  head: () => ({
    meta: [
      { title: "Ecommerce Website (React) — £30 — Formation Planet Ltd" },
      { name: "description", content: "React-based ecommerce store with product catalog, cart, checkout and Stripe/PayPal integration — only £30." },
      { property: "og:title", content: "Ecommerce Website (React) — £30 — Formation Planet Ltd" },
      { property: "og:description", content: "React-based ecommerce store with product catalog, cart, checkout and Stripe/PayPal integration — only £30." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/web-ecommerce" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/web-ecommerce" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Web Development"
      title="React Ecommerce"
      highlight="Store"
      price="£30"
      icon={ShoppingCart}
      description="A clean, fast React-based ecommerce store with product catalog, cart, checkout and payment gateway — start selling online in days."
      includes={[
        "React-based ecommerce frontend",
        "Product catalog with categories",
        "Cart & checkout flow",
        "Stripe / PayPal integration",
        "Order confirmation emails",
        "Admin panel to add products",
        "Mobile-first responsive design",
        "Basic SEO for product pages",
        "WhatsApp order option",
        "Free deployment + SSL",
      ]}
      process={[
        { step: "Share your products", body: "Send your product list, images and pricing on WhatsApp." },
        { step: "We build your store", body: "Our React team builds your ecommerce site in 7–10 days." },
        { step: "Go live & sell", body: "We deploy your store, connect payments and you start selling." },
      ]}
      packages={[
        {
          name: "Ecommerce Store",
          price: "£30",
          meta: "React + Payments • 7–10 days",
          popular: true,
          features: [
            "React ecommerce frontend",
            "Up to 50 products included",
            "Cart & secure checkout",
            "Stripe + PayPal payments",
            "Admin product manager",
            "Order email notifications",
            "Free deployment + SSL",
          ],
        },
      ]}
    />
  ),
});
