import { Link } from "@tanstack/react-router";
import { Mail, Phone, Globe, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, wa } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.1_0_0)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            {BRAND.tagline}. UK-based formation and compliance specialists serving global founders.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={BRAND.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-md glass flex items-center justify-center hover:glow-orange-sm transition">
              <Facebook className="h-4 w-4 text-primary" />
            </a>
            <a href={BRAND.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-md glass flex items-center justify-center hover:glow-orange-sm transition">
              <Instagram className="h-4 w-4 text-primary" />
            </a>
            <a href={BRAND.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className="h-9 w-9 rounded-md glass flex items-center justify-center hover:glow-orange-sm transition">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary"><path d="M12 0a12 12 0 0 0-4.4 23.16c-.1-.94-.18-2.4.04-3.43.2-.94 1.3-6 1.3-6s-.33-.66-.33-1.65c0-1.55.9-2.7 2.02-2.7.95 0 1.41.71 1.41 1.57 0 .96-.61 2.39-.93 3.72-.26 1.11.56 2.02 1.66 2.02 1.99 0 3.52-2.1 3.52-5.13 0-2.68-1.93-4.56-4.69-4.56-3.2 0-5.07 2.4-5.07 4.87 0 .97.37 2 .83 2.56.09.11.1.21.08.32-.09.39-.3 1.21-.34 1.38-.05.22-.18.27-.41.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.75-7.25 7.92-7.25 4.15 0 7.38 2.96 7.38 6.92 0 4.13-2.6 7.45-6.21 7.45-1.22 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.14A12 12 0 1 0 12 0z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/uk-services" className="hover:text-primary">UK Services</Link></li>
            <li><Link to="/uk-compliance" className="hover:text-primary">UK Compliance</Link></li>
            <li><Link to="/usa-services" className="hover:text-primary">USA Services</Link></li>
            <li><Link to="/banks-payment-solutions" className="hover:text-primary">Banking & Payments</Link></li>
            <li><Link to="/web-development" className="hover:text-primary">Web Development</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> <a href={`mailto:${BRAND.email}`} className="hover:text-primary break-all">{BRAND.email}</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href={`tel:${BRAND.phone}`} className="hover:text-primary">{BRAND.phone}</a></li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> {BRAND.website}</li>
          </ul>
          <a href={wa("I'd like to get started.")} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:glow-orange-sm transition">Chat on WhatsApp</a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
