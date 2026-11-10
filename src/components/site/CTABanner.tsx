import { Link } from "@tanstack/react-router";
import { wa } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTABanner({
  title = "Ready to launch your business?",
  subtitle = "Talk to a specialist and get a tailored plan within 24 hours.",
  primaryTo = "/pricing",
  primaryLabel = "Start Now",
}: {
  title?: string;
  subtitle?: string;
  primaryTo?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary/30 blur-3xl" />
            <h2 className="relative text-3xl sm:text-5xl font-bold">{title.split("?")[0]}<span className="text-gradient-orange">?</span></h2>
            <p className="relative mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
            <div className="relative mt-8 flex flex-wrap gap-3 justify-center">
              {primaryTo ? (
                <Link to={primaryTo} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground pulse-glow hover:scale-[1.03] transition">
                  {primaryLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <a href={wa("I'd like to launch my business.")} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground pulse-glow hover:scale-[1.03] transition">
                  {primaryLabel} <ArrowRight className="h-4 w-4" />
                </a>
              )}
              <a href={wa("I'd like to book a free consultation.")} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:border-primary/60 transition">
                <MessageCircle className="h-4 w-4 text-primary" /> Free Consultation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
