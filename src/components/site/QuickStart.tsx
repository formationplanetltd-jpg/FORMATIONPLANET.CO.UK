import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";
import { US_PACKAGES, US_STATES, computePrice, fmtGBP } from "@/lib/usaPricing";

const UK_PACKAGES = [
  { slug: "starter", name: "Starter", price: 140 },
  { slug: "silver", name: "Silver", price: 170 },
  { slug: "gold", name: "Gold", price: 180 },
  { slug: "platinum", name: "Platinum", price: 200 },
];

export function QuickStart() {
  const [tab, setTab] = useState<"uk" | "us">("uk");
  const [pkg, setPkg] = useState(0);
  const [stateSlug, setStateSlug] = useState(US_STATES[0].slug);

  const ukSelected = useMemo(() => UK_PACKAGES[Math.min(pkg, UK_PACKAGES.length - 1)], [pkg]);
  const usSelected = useMemo(() => US_PACKAGES[Math.min(pkg, US_PACKAGES.length - 1)], [pkg]);
  const usState = useMemo(() => US_STATES.find((s) => s.slug === stateSlug) ?? US_STATES[0], [stateSlug]);
  const usPrice = computePrice(usSelected, usState);

  const ukData = UK_PACKAGES;
  const usData = US_PACKAGES.map((p) => ({ ...p, price: computePrice(p, usState) }));
  const data = tab === "uk" ? ukData : usData;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-strong rounded-3xl p-6 sm:p-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Quick Start</span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-bold">Get an instant estimate</h3>
              </div>
              <div className="inline-flex rounded-xl border border-border bg-background p-1">
                {(["uk", "us"] as const).map((t) => (
                  <button key={t} onClick={() => { setTab(t); setPkg(0); }}
                    className={`px-4 py-2 text-sm rounded-lg font-medium transition ${
                      tab === t ? "bg-primary text-primary-foreground glow-orange-sm" : "text-muted-foreground hover:text-foreground"
                    }`}>
                    {t === "uk" ? "UK Ltd" : "USA LLC"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Package</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {data.map((p, i) => (
                    <button key={p.slug} onClick={() => setPkg(i)}
                      className={`rounded-lg border px-4 py-3 text-left transition ${
                        pkg === i ? "border-primary bg-primary/10 glow-orange-sm" : "border-border bg-background hover:border-primary/50"
                      }`}>
                      <div className="text-sm font-semibold">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{fmtGBP(p.price)}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {tab === "uk" ? "Jurisdiction" : "State"}
                </label>
                {tab === "uk" ? (
                  <div className="mt-2 rounded-lg border border-border bg-background px-4 py-3 text-sm">United Kingdom (Companies House)</div>
                ) : (
                  <>
                    <select
                      value={stateSlug}
                      onChange={(e) => setStateSlug(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    >
                      {US_STATES.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.name} (+{fmtGBP(s.surcharge)})</option>
                      ))}
                    </select>
                    {usState.note && (
                      <p className="mt-2 text-xs text-muted-foreground">{usState.note}</p>
                    )}
                  </>
                )}
                <div className="mt-6 rounded-xl glass p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Estimated {tab === "us" ? `for ${usState.name}` : ""}
                    </div>
                    <div className="text-3xl font-bold text-gradient-orange">
                      {tab === "uk" ? fmtGBP(ukSelected.price) : fmtGBP(usPrice)}
                    </div>
                  </div>
                  <Link
                    to="/pricing"
                    search={
                      tab === "uk"
                        ? { region: "uk" as const, pkg: ukSelected.slug, state: undefined }
                        : { region: "us" as const, pkg: usSelected.slug, state: usState.slug }
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:glow-orange-sm transition">
                    Continue <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
