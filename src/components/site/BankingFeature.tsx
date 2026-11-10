import { Landmark, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function BankingFeature() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden glass-strong rounded-3xl p-6 sm:p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                Banking & Payments
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight break-words">
                Global <span className="text-gradient-orange">Business Banking</span> Made Simple
              </h2>
              <div className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient-orange">From £20</div>
              <ul className="mt-6 space-y-3 text-base">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <span>Wise, Stripe, Payoneer & Mercury-class accounts</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <span>12+ partner banks across UK, US & EU</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <span>End-to-end application support</span></li>
              </ul>
              <Link
                to="/banks-payment-solutions"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground pulse-glow hover:scale-[1.03] transition"
              >
                Explore Banking
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-2xl" />
                <div className="absolute inset-0 rounded-full border border-primary/30 glass flex items-center justify-center">
                  <Landmark className="h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 text-primary drop-shadow-[0_0_40px_rgba(255,107,0,0.6)]" strokeWidth={1.2} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
