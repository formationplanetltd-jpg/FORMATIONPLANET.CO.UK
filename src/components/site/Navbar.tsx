import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";


type SubLink = { to: string; label: string };
type NavItem = { to: string; label: string; children?: SubLink[] };

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/uk-services",
    label: "UK Services",
    children: [
      { to: "/uk-services", label: "All UK Services" },
      { to: "/uk-ltd-formation", label: "UK LTD Formation" },
      { to: "/ltd-id-verification", label: "LTD ID Verification" },
      { to: "/registered-office-address", label: "Registered Office Address" },
      { to: "/company-annual-filing", label: "Confirmation Statement" },
      { to: "/utr-number", label: "UTR Number (HMRC)" },
      { to: "/auth-code", label: "Companies House Auth Code" },
      { to: "/activation-code", label: "HMRC Activation Code" },
      { to: "/uk-vat-registration", label: "UK VAT Registration" },
    ],
  },
  {
    to: "/uk-compliance",
    label: "UK Compliance",
    children: [
      { to: "/uk-compliance", label: "All Compliance" },
      { to: "/ltd-id-verification", label: "ID Verification" },
      { to: "/company-annual-filing", label: "Confirmation Statement" },
      { to: "/annual-accounts", label: "Annual Accounts" },
      { to: "/company-name-change", label: "Company Name Change" },
      { to: "/address-change", label: "Address Change" },
      { to: "/director-change", label: "Director Appoint / Remove" },
      { to: "/psc-secretary-update", label: "PSC / Secretary Update" },
      { to: "/ad01-postal-filing", label: "AD01 Postal Filing" },
    ],
  },
  {
    to: "/usa-services",
    label: "USA Services",
    children: [
      { to: "/usa-services", label: "All USA Services" },
      { to: "/ein", label: "EIN (Employer ID)" },
      { to: "/itin", label: "ITIN Application" },
      { to: "/annual-tax-filing", label: "Annual Tax Filing" },
      { to: "/boi-report", label: "BOI Report" },
    ],
  },
  {
    to: "/banks-payment-solutions",
    label: "Banking",
    children: [
      { to: "/banks-payment-solutions", label: "All Banking Providers" },
      { to: "/banking/paypal", label: "PayPal" },
      { to: "/banking/payoneer", label: "Payoneer" },
      { to: "/banking/worldfirst", label: "WorldFirst" },
      { to: "/banking/stripe", label: "Stripe" },
      { to: "/banking/tide", label: "Tide" },
      { to: "/banking/wise", label: "Wise" },
      { to: "/banking/airwallex", label: "Airwallex" },
      { to: "/banking/mollie", label: "Mollie" },
      { to: "/banking/wallester", label: "Wallester" },
      { to: "/banking/pingpong", label: "PingPong" },
      { to: "/banking/grey", label: "Grey" },
      { to: "/banking/nsave", label: "Nsave Business" },
    ],
  },
  {
    to: "/web-development",
    label: "Web Dev",
    children: [
      { to: "/web-development", label: "All Web Packages" },
      { to: "/web-basic", label: "Basic Website — £30" },
      { to: "/web-standard", label: "Standard Website — £60" },
      { to: "/web-premium", label: "Premium Website — £150" },
      { to: "/web-ecommerce", label: "Ecommerce Website — £30" },
    ],
  },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? "glass-strong border-b border-primary/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 pt-3 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((l) =>
            l.children ? (
              <div key={l.to} className="relative group">
                <Link
                  to={l.to}
                  activeProps={{ className: "text-primary" }}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
                >
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 group-hover:rotate-180 transition" />
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full pt-2 min-w-[260px] z-50">
                  <div className="glass-strong border border-primary/20 rounded-xl p-2 shadow-2xl">
                    {l.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        activeProps={{ className: "text-primary bg-primary/10" }}
                        className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-primary" }}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
        <Link
          to="/pricing"
          className="hidden lg:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:glow-orange-sm transition"
        >
          Get Started
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-strong border-t border-primary/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 grid gap-1">
            {navItems.map((l) =>
              l.children ? (
                <div key={l.to}>
                  <button
                    onClick={() => setMobileSub((s) => (s === l.to ? null : l.to))}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {l.label}
                    <ChevronDown
                      className={`h-4 w-4 transition ${mobileSub === l.to ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileSub === l.to && (
                    <div className="ml-3 pl-3 border-l border-primary/20 grid gap-0.5 py-1">
                      {l.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          activeProps={{ className: "text-primary" }}
                          className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary" }}
                  className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
