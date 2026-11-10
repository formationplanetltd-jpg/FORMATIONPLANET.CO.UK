import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { value: 500, suffix: "+", label: "Companies Registered" },
  { value: 24, suffix: "/7", label: "Global Founder Support" },
  { value: 12, suffix: "+", label: "Banking Partners" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

export function StatsBar() {
  return (
    <section className="relative -mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-strong rounded-2xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-orange">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
