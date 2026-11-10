// USA LLC pricing matrix — base service fee + per-state filing surcharge.
// Each package (Starter / Silver / Gold) keeps the same feature list across
// states; only the final price changes because state filing fees differ.

export type UsState = {
  slug: string;
  name: string;
  surcharge: number; // GBP added on top of base package price
  note?: string;
};

export const US_STATES: UsState[] = [
  { slug: "new-mexico", name: "New Mexico", surcharge: 40, note: "Cheapest filing, no annual report" },
  { slug: "wyoming", name: "Wyoming", surcharge: 80, note: "Strong privacy, low annual fees" },
  { slug: "delaware", name: "Delaware", surcharge: 70, note: "Investor-friendly, well-known courts" },
  { slug: "florida", name: "Florida", surcharge: 100, note: "Great for e-commerce" },
  { slug: "texas", name: "Texas", surcharge: 235, note: "Large domestic market" },
  { slug: "montana", name: "Montana", surcharge: 28, note: "Low filing fee" },
  { slug: "colorado", name: "Colorado", surcharge: 40, note: "Easy online filing" },
  { slug: "nevada", name: "Nevada", surcharge: 335, note: "Premium privacy state" },
  { slug: "california", name: "California", surcharge: 55, note: "$800 franchise tax applies" },
  { slug: "ohio", name: "Ohio", surcharge: 80 },
];

export type UsPackage = {
  slug: string;
  name: string;
  base: number; // GBP — Formation Planet service fee
  popular?: boolean;
  features: string[];
};

export const US_PACKAGES: UsPackage[] = [
  {
    slug: "starter",
    name: "Starter",
    base: 150,
    features: [
      "U.S. LLC Registration",
      "Shared Business Address (no portal, no mail support)",
      "Articles of Organization",
      "Employer Identification Number (EIN)",
      "Digital Company Documents (PDF)",
      "Certificate of Formation (Digital)",
      "24/7 Support",
    ],
  },
  {
    slug: "silver",
    name: "Silver",
    base: 200,
    popular: true,
    features: [
      "U.S. LLC Registration",
      "Unique Business Address (with portal access & mail support)",
      "Articles of Organization",
      "Employer Identification Number (EIN)",
      "Digital Company Documents (PDF)",
      "Certificate of Formation (Digital)",
      "24/7 Support",
    ],
  },
  {
    slug: "gold",
    name: "Gold",
    base: 400,
    features: [
      "U.S. LLC Registration",
      "Unique Business Address (with portal access & mail support)",
      "Articles of Organization",
      "Employer Identification Number (EIN)",
      "Individual Taxpayer Identification Number (ITIN) included",
      "Digital Company Documents (PDF)",
      "Certificate of Formation (Digital)",
      "24/7 Support",
    ],
  },
];

export const getStateBySlug = (slug?: string) =>
  US_STATES.find((s) => s.slug === slug) ?? US_STATES[0];

export const getPackageBySlug = (slug?: string) =>
  US_PACKAGES.find((p) => p.slug === slug);

export const computePrice = (pkg: UsPackage, state: UsState) =>
  pkg.base + state.surcharge;

export const fmtGBP = (n: number) => `£${n}`;
