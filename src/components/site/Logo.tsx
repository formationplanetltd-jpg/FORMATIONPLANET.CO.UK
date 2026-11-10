import { Link } from "@tanstack/react-router";
import logo from "@/assets/formation-planet-logo.png.asset.json";

export function Logo({ compact = false }: { compact?: boolean }) {
  const size = compact ? "h-11 w-11" : "h-14 w-14";
  return (
    <Link to="/" className="flex items-center group" aria-label="Formation Planet Ltd">
      <span
        className={`inline-flex items-center justify-center rounded-xl bg-white ${size} ring-2 ring-primary shadow-[0_6px_24px_-6px_rgba(255,107,0,0.55)] group-hover:ring-primary-glow group-hover:shadow-[0_10px_32px_-4px_rgba(255,107,0,0.75)] transition`}
      >
        <img
          src={logo.url}
          alt="Formation Planet Ltd"
          className="h-[88%] w-[88%] object-contain group-hover:scale-105 transition"
        />
      </span>
    </Link>
  );
}
