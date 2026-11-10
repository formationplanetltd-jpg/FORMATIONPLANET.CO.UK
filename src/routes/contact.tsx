import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Globe, MessageCircle, Facebook, Instagram } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { BRAND, wa } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Formation Planet Ltd" },
      { name: "description", content: "Get in touch with the Formation Planet team via WhatsApp, email, or phone." },
      { property: "og:title", content: "Contact — Formation Planet Ltd" },
      { property: "og:description", content: "Get in touch with the Formation Planet team via WhatsApp, email, or phone." },
      { property: "og:url", content: "https://formation-planet-forge.lovable.app/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://formation-planet-forge.lovable.app/contact" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title="Talk to a" highlight="specialist" description="Our team replies on WhatsApp within minutes during business hours." />
      <Section className="!pt-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="glass-strong rounded-3xl p-8 space-y-5">
              <h2 className="text-2xl font-bold">Reach us directly</h2>
              <div className="grid gap-4">
                <a href={wa("I'd like to get in touch.")} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/60 transition">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary"><MessageCircle className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs text-muted-foreground">WhatsApp</div>
                    <div className="font-medium">wa.me/{BRAND.whatsappNumber}</div>
                  </div>
                </a>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/60 transition">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary"><Mail className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="font-medium break-all">{BRAND.email}</div>
                  </div>
                </a>
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/60 transition">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary"><Phone className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="font-medium">{BRAND.phone}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 glass rounded-xl p-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary"><Globe className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs text-muted-foreground">Website</div>
                    <div className="font-medium">{BRAND.website}</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground mb-3">Follow us</div>
                <div className="flex gap-3">
                  <a href={BRAND.facebook} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:glow-orange-sm transition"><Facebook className="h-4 w-4 text-primary" /></a>
                  <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:glow-orange-sm transition"><Instagram className="h-4 w-4 text-primary" /></a>
                  <a href={BRAND.pinterest} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:glow-orange-sm transition"><svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary"><path d="M12 0a12 12 0 0 0-4.4 23.16c-.1-.94-.18-2.4.04-3.43.2-.94 1.3-6 1.3-6s-.33-.66-.33-1.65c0-1.55.9-2.7 2.02-2.7.95 0 1.41.71 1.41 1.57 0 .96-.61 2.39-.93 3.72-.26 1.11.56 2.02 1.66 2.02 1.99 0 3.52-2.1 3.52-5.13 0-2.68-1.93-4.56-4.69-4.56-3.2 0-5.07 2.4-5.07 4.87 0 .97.37 2 .83 2.56.09.11.1.21.08.32-.09.39-.3 1.21-.34 1.38-.05.22-.18.27-.41.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.75-7.25 7.92-7.25 4.15 0 7.38 2.96 7.38 6.92 0 4.13-2.6 7.45-6.21 7.45-1.22 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.14A12 12 0 1 0 12 0z"/></svg></a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); window.open(wa("I have a question — please get back to me."), "_blank"); }}
              className="glass-strong rounded-3xl p-8 grid gap-4"
            >
              <h2 className="text-2xl font-bold">Send a message</h2>
              <input required placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              <input required type="email" placeholder="Email address" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              <input placeholder="Phone (optional)" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              <textarea required rows={5} placeholder="How can we help?" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-orange-sm hover:scale-[1.02] transition">
                Send via WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </Section>
    </SiteShell>
  );
}
