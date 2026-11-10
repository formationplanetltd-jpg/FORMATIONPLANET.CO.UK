import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  to,
  hash,
  tag,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  to?: string;
  hash?: string;
  tag?: string;
}) {
  const inner = (
    <div className="group relative h-full glass-card rounded-2xl p-6 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(255,107,0,0.45)]">
      <div className="relative z-10 flex items-start justify-between mb-4">
        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 group-hover:rotate-6 group-hover:bg-primary/25 group-hover:ring-primary/60 transition duration-500">
          <span className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
          <Icon className="relative h-6 w-6" />
        </span>
        {tag && (
          <span className="text-[10px] font-semibold tracking-wider uppercase text-primary/90 border border-primary/30 bg-primary/5 rounded-full px-2 py-0.5">
            {tag}
          </span>
        )}
      </div>
      <h3 className="relative z-10 text-lg font-semibold">{title}</h3>
      <p className="relative z-10 mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="relative z-10 mt-5 flex items-center justify-between">
        {price ? (
          <span className="text-sm">
            <span className="text-muted-foreground">from </span>
            <span className="font-semibold text-primary">{price}</span>
          </span>
        ) : <span />}
        <span className="inline-flex items-center text-sm font-medium text-primary transition-all group-hover:translate-x-1">
          Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  );
  return to ? <Link to={to} hash={hash}>{inner}</Link> : inner;
}
