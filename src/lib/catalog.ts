import lstand from "@/assets/lstand.jpg.asset.json";
import googlePuck from "@/assets/google-puck.jpg.asset.json";
import menuPuck from "@/assets/menu-puck.jpg.asset.json";
import wristband from "@/assets/wristband.jpg.asset.json";
import leather from "@/assets/leather-bracelet.jpg.asset.json";

export type Product = {
  slug: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
  image: string;
  formFactor: string;
  bestFor: string[];
};

export const products: Product[] = [
  {
    slug: "l-standing-google-review-plaque",
    name: "L-Standing Google Review Plaque",
    price: 60,
    tagline: "Freestanding counter-top review magnet",
    description:
      "A freestanding vertical table-tent plaque printed with the Google logo and a five-star graphic. Sits on the counter at eye level so every customer sees the prompt before they leave.",
    image: lstand.url,
    formFactor: "Freestanding L-stand · acrylic",
    bestFor: ["Front counters", "Reception desks", "Checkout stations"],
  },
  {
    slug: "circular-google-review-plaque",
    name: "Circular Google Review Plaque",
    price: 40,
    tagline: "White puck with Google Review branding",
    description:
      "A crisp white circular puck branded for Google reviews. Adhesive-backed and durable — mount it on a table, till, or entryway and let customers tap their way to a 5-star review.",
    image: googlePuck.url,
    formFactor: "Circular puck · 60mm disc",
    bestFor: ["Table tops", "Bar counters", "Pickup windows"],
  },
  {
    slug: "circular-menu-plaque",
    name: "Circular Menu Plaque",
    price: 40,
    tagline: "Black acrylic tap-to-order disc",
    description:
      "A black circular acrylic puck with a chef hat and cutlery graphic. Tap to open your live digital menu — update dishes, prices, and specials any time without reprinting a thing.",
    image: menuPuck.url,
    formFactor: "Circular puck · black acrylic",
    bestFor: ["Restaurants", "Cafés", "Hotel rooms"],
  },
  {
    slug: "silicon-wristband",
    name: "Silicon Wristband",
    price: 25,
    tagline: "All-black matte wearable NFC band",
    description:
      "An all-black matte silicone wearable NFC band. Waterproof, adjustable, and built for staff, events, and festivals where the tap needs to travel with the person.",
    image: wristband.url,
    formFactor: "Wearable band · matte silicone",
    bestFor: ["Staff & servers", "Events", "Gyms & studios"],
  },
  {
    slug: "leather-bracelet",
    name: "Leather Bracelet",
    price: 30,
    tagline: "Braided leather with steel NFC clasp",
    description:
      "Premium braided black leather with a stainless steel NFC magnetic clasp. The dressed-up wearable for owners, realtors, and consultants who share their profile in person.",
    image: leather.url,
    formFactor: "Wearable bracelet · leather & steel",
    bestFor: ["Founders & sales", "Networking", "Client meetings"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export type Plan = {
  id: string;
  name: string;
  price: number;
  cadence: string;
  summary: string;
  linkUpdates: string;
  gmb: string;
  protection: string;
  features: string[];
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    id: "a-la-carte",
    name: "A La Carte Edit",
    price: 40,
    cadence: "per edit",
    summary: "Pay only when you need the destination changed.",
    linkUpdates: "Single static target URL update",
    gmb: "Not included",
    protection: "Not included",
    features: [
      "One destination change per purchase",
      "Turnaround within 1 business day",
      "No subscription, no commitment",
    ],
  },
  {
    id: "tier-1",
    name: "Tier 1 · Dynamic Link Management",
    price: 19.99,
    cadence: "per month",
    summary: "Unlimited destination changes across all of your hardware.",
    linkUpdates: "Unlimited updates to promo pages, menus, custom links, or review URLs",
    gmb: "Not included",
    protection: "Not included",
    features: [
      "Unlimited link updates",
      "Promo pages, menus, review URLs, custom links",
      "Dynamic redirect dashboard access",
      "Tap analytics",
    ],
    highlight: true,
  },
  {
    id: "tier-2",
    name: "Tier 2 · Standard GMB Management",
    price: 199,
    cadence: "per month",
    summary: "Link management plus hands-on Google Business Profile care.",
    linkUpdates: "Included — unlimited updates across hardware",
    gmb: "Standard GMB profile optimization & monthly management",
    protection: "2 free replacements per year (active after 4 months)",
    features: [
      "Everything in Tier 1",
      "GMB profile optimization & monthly management",
      "Review response support",
      "Hardware Protection Guarantee",
    ],
  },
  {
    id: "tier-3",
    name: "Tier 3 · Advanced GMB + Local SEO",
    price: 399,
    cadence: "per month",
    summary: "Full local growth engine with a dedicated SEO strategy.",
    linkUpdates: "Included — unlimited updates across hardware",
    gmb: "Advanced GMB optimization & dedicated Local SEO strategy",
    protection: "2 free replacements per year (active after 4 months)",
    features: [
      "Everything in Tier 2",
      "Advanced GMB optimization",
      "Dedicated local SEO strategy & reporting",
      "Priority fulfilment & support",
      "Hardware Protection Guarantee",
    ],
  },
];

export const getPlan = (id: string) => plans.find((p) => p.id === id);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(value);
