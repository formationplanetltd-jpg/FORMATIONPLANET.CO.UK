import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Formation Planet Ltd | UK Ltd & USA LLC Formation" },
      { name: "description", content: "Register UK Ltd & USA LLC companies in 24 hours. EIN, ITIN, VAT, UTR, banking and full annual compliance." },
      { name: "keywords", content: "company formation, UK Ltd formation, USA LLC formation, register company online, Wyoming LLC, Delaware LLC, EIN, ITIN, UTR, VAT registration, registered office, annual filing, Stripe, Wise, Payoneer, Mercury, non-resident company, Amazon FBA LLC, dropshipping LLC, Formation Planet" },
      { name: "author", content: "Formation Planet Ltd" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#FF6B00" },
      { property: "og:site_name", content: "Formation Planet Ltd" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:title", content: "Formation Planet Ltd | UK Ltd & USA LLC Formation" },
      { property: "og:description", content: "UK Ltd & USA LLC formation in 24 hours — banking, EIN/ITIN, VAT/UTR and annual compliance." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@FormationPlanet" },
      { name: "twitter:title", content: "Formation Planet Ltd | UK Ltd & USA LLC Formation" },
      { name: "twitter:description", content: "UK Ltd & USA LLC formation in 24 hours — banking, EIN/ITIN, VAT/UTR and annual compliance." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Formation Planet Ltd",
          url: "https://formation-planet-forge.lovable.app",
          logo: "https://formation-planet-forge.lovable.app/favicon.ico",
          description: "Global business formation, compliance and banking — UK Ltd and USA LLC.",
          email: "formationplanetltd@gmail.com",
          sameAs: [
            "https://wa.me/923104905860",
          ],
          areaServed: ["GB", "US", "Worldwide"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
