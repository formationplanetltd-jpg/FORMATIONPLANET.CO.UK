import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Formation Planet Ltd" },
      { name: "description", content: "Frequently asked questions about Formation Planet's UK & USA formation and compliance services." },
      { property: "og:title", content: "FAQ — Formation Planet Ltd" },
      { property: "og:description", content: "Frequently asked questions about Formation Planet's UK & USA formation and compliance services." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/faq" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }),
    }],
  }),
  component: Page,
});

const faqs = [
  { q: "How long does UK Ltd formation take?", a: "Most UK Ltd companies are registered within 24 hours. We also offer same-day priority processing." },
  { q: "Can I form a US LLC as a non-resident?", a: "Yes — Formation Planet helps non-residents form LLCs in Wyoming, Delaware, Florida and other states, including EIN and ITIN." },
  { q: "Do I need a UK address to register a Ltd?", a: "Yes. We provide a prestigious UK registered office address as an add-on or as part of higher-tier packages." },
  { q: "Which banks can you open accounts with?", a: "We work with 15+ providers including Wise, Stripe, Payoneer, Tide, Airwallex, Mollie and more." },
  { q: "What is the ID verification requirement?", a: "Companies House now requires identity verification for PSCs, shareholders and directors. We handle the full process in 24 hours for £20." },
  { q: "Do you handle annual compliance?", a: "Yes — confirmation statements, annual accounts, director changes and PSC updates are all part of our compliance services." },
  { q: "How do I pay?", a: "We accept bank transfer, Wise, Payoneer, Stripe and other major payment methods. WhatsApp us for full payment instructions." },
  { q: "Do you offer refunds?", a: "If we cannot complete a service due to our fault, we offer a full refund. Government fees are non-refundable." },
];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <Reveal delay={i * 0.04}>
      <div className="glass rounded-2xl overflow-hidden">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
          <span className="font-medium">{q}</span>
          <ChevronDown className={`h-5 w-5 text-primary transition ${open ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 text-sm text-muted-foreground">{a}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="FAQ" title="Frequently asked" highlight="questions" description="Quick answers from the Formation Planet team. Need more? Message us on WhatsApp." />
      <Section className="!pt-10">
        <div className="max-w-3xl mx-auto grid gap-4">
          {faqs.map((f, i) => <Item key={i} {...f} i={i} />)}
        </div>
      </Section>
      <CTABanner />
    </SiteShell>
  );
}
