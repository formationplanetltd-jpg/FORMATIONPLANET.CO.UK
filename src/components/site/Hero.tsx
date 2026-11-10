import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Building2, ShieldCheck, Landmark, FileCheck2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { wa } from "@/lib/brand";

const words = ["Get", "your"];
const rotating = [
  "UK Limited Company",
  "US LLC Company",
  "Business Bank Account",
  "VAT Registration",
  "Company Compliance",
  "Registered Office Address",
  "Modern Business Website",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl -z-10 orb-drift" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-orange-600/20 blur-3xl -z-10 orb-drift" style={{ animationDelay: "-4s" }} />
      {/* bokeh particles */}
      {[
        { t: "12%", l: "8%",  s: 6,  d: "0s" },
        { t: "22%", l: "78%", s: 10, d: "-2s" },
        { t: "65%", l: "14%", s: 8,  d: "-3s" },
        { t: "78%", l: "62%", s: 12, d: "-1s" },
        { t: "40%", l: "48%", s: 5,  d: "-5s" },
      ].map((p, i) => (
        <span
          key={i}
          className="absolute -z-10 rounded-full bg-primary/40 blur-sm bokeh"
          style={{ top: p.t, left: p.l, width: p.s, height: p.s, animationDelay: p.d }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="min-w-0 text-center lg:text-left">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Trusted by 500+ global founders
          </motion.span>

          <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight break-words">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-3"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <RotatingHeadline />
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="block mt-3 text-xl sm:text-3xl md:text-4xl font-medium text-muted-foreground"
            >
              in just a few days.
            </motion.span>
          </h1>

          <div className="flex justify-center lg:justify-start">
            <ServiceTicker />
          </div>


          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 break-words"
          >
            Launch UK Ltd or US LLC companies, manage compliance, and unlock global banking — all from one expert team. Fast, transparent, end-to-end support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 items-center justify-center lg:justify-start"
          >
            <Link to="/uk-ltd-formation"
              className="inline-flex w-auto items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground pulse-glow hover:scale-[1.03] transition">
              Start Your Company <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={wa("I'd like to book a free consultation.")} target="_blank" rel="noreferrer"
              className="inline-flex w-auto items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:border-primary/60 transition">
              <Calendar className="h-4 w-4 text-primary" /> Book Free Consultation
            </a>
          </motion.div>
        </div>

        {/* Floating orbital icons visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full flex justify-center items-center mt-8 lg:mt-0 min-w-0"
        >
          <OrbitingIcons />
        </motion.div>




      </div>
    </section>
  );
}

function RotatingHeadline() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % rotating.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block align-baseline max-w-full break-words">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotating[i]}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-gradient-orange"
        >
          {rotating[i]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        aria-hidden
        className="inline-block ml-1 w-[3px] h-[0.9em] align-middle bg-primary"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
}

const tickerItems = [
  "UK LTD Formation",
  "US LLC Formation",
  "Banking & Payments",
  "VAT Registration",
  "UTR Number",
  "ID Verification",
  "Registered Office",
  "Annual Filing",
  "Web Development",
  "HMRC Compliance",
];

function ServiceTicker() {
  return (
    <div className="mt-6 relative overflow-hidden rounded-full glass border border-primary/20 py-2 max-w-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {[...tickerItems, ...tickerItems].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const orbitIcons = [
  { Icon: Building2, label: "Company Formation", color: "from-orange-500/40 to-orange-600/10" },
  { Icon: ShieldCheck, label: "ID Verification", color: "from-amber-500/40 to-amber-600/10" },
  { Icon: Landmark, label: "Business Banking", color: "from-orange-400/40 to-orange-700/10" },
  { Icon: FileCheck2, label: "Compliance", color: "from-yellow-500/40 to-orange-500/10" },
];

function OrbitingIcons() {
  const [step, setStep] = useState(0);
  const [size, setSize] = useState(420);
  useEffect(() => {
    const t = setInterval(() => setStep((v) => v + 1), 5000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 480) setSize(240);
      else if (w < 768) setSize(320);
      else if (w < 1024) setSize(360);
      else setSize(420);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  const active = step % orbitIcons.length;
  const Center = orbitIcons[active].Icon;
  const radius = size * 0.48;
  const centerIconSize = Math.round(size * 0.3);
  const planetSize = Math.max(40, Math.round(size * 0.13));
  const planetIcon = Math.max(20, Math.round(planetSize * 0.5));
  return (
    <div
      className="relative float group"
      style={{ height: size, width: size }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
      {/* center sun icon — swaps to active */}
      <div className="absolute inset-[8%] rounded-full border border-primary/30 glass-strong flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <Center
              style={{ height: centerIconSize, width: centerIconSize }}
              className="text-primary drop-shadow-[0_0_40px_rgba(255,107,0,0.6)]"
              strokeWidth={1.2}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* orbit rings */}
      <div className="absolute inset-0 rounded-full border border-primary/15 animate-[spin_22s_linear_infinite]" />
      <div className="absolute inset-[4%] rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite_reverse]" />

      {/* orbiting icons — circulate every 5s like planets around the sun */}
      {orbitIcons.map(({ Icon, label }, i) => {
        const angle = ((i + step) / orbitIcons.length) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isActive = i === active;
        return (
          <motion.div
            key={label}
            aria-label={label}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ x, y, scale: isActive ? 1.2 : 1 }}
            transition={{
              x: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.5 },
            }}
          >
            <span
              style={{ height: planetSize, width: planetSize }}
              className={`flex items-center justify-center rounded-2xl glass-strong border border-primary/40 shadow-[0_8px_30px_-8px_rgba(255,107,0,0.6)] transition-colors ${isActive ? "ring-2 ring-primary" : ""}`}
            >
              <Icon style={{ height: planetIcon, width: planetIcon }} className="text-primary" strokeWidth={1.6} />
            </span>
          </motion.div>
        );
      })}

      {/* particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-primary glow-orange-sm"
          style={{ top: `${20 + i * 14}%`, left: `${10 + i * 16}%` }}
          animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}




