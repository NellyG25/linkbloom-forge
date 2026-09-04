import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getProduct, products, formatPrice } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable | tapNFC.ca" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${formatPrice(product.price)} | tapNFC.ca`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description.slice(0, 155) },
      ],
    };
  },
  component: ProductPage,
});

const addons = [
  {
    id: "tier-1",
    kind: "plan" as const,
    name: "Unlimited Dynamic Link Management",
    price: 19.99,
    cadence: "per month",
    blurb: "Change your destination link as often as you like, across all hardware.",
    recommended: true,
  },
  {
    id: "setup-edit",
    kind: "service" as const,
    name: "One-Time Initial Setup",
    price: 40,
    cadence: "one-time edit fee",
    blurb: "We program a single static destination URL. Future changes are $40 per edit.",
    recommended: false,
  },
];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [addonId, setAddonId] = useState<string>("tier-1");
  const [qty, setQty] = useState(1);

  const addon = addons.find((a) => a.id === addonId)!;

  const addToCart = () => {
    add(
      {
        id: product.slug,
        name: product.name,
        price: product.price,
        kind: "hardware",
        image: product.image,
      },
      qty,
    );
    add({
      id: addon.id,
      name: addon.name,
      price: addon.price,
      kind: addon.kind,
      cadence: addon.cadence,
    });
    toast.success(`${product.name} added to cart`);
    navigate({ to: "/cart" });
  };

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <Link
        to="/shop"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-navy"
      >
        <ArrowLeft className="h-4 w-4" /> All hardware
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {product.formFactor}
          </p>
          <h1 className="mt-3 text-3xl font-black text-navy sm:text-4xl">{product.name}</h1>
          <p className="mt-3 font-display text-2xl font-extrabold">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">{product.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {product.bestFor.map((b) => (
              <li
                key={b}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy"
              >
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
              Choose your link service
            </h2>
            <div className="mt-3 space-y-3">
              {addons.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAddonId(a.id)}
                  className={`flex w-full gap-3 rounded-xl border p-4 text-left transition-colors ${
                    addonId === a.id
                      ? "border-gold bg-gold/10"
                      : "border-border bg-card hover:bg-secondary/60"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                      addonId === a.id ? "border-gold bg-gold" : "border-border"
                    }`}
                  >
                    {addonId === a.id && <Check className="h-3 w-3 text-gold-foreground" />}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-foreground">
                      {a.name} — {formatPrice(a.price)} {a.cadence}
                      {a.recommended && (
                        <span className="ml-2 rounded-full bg-navy px-2 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">
                          Recommended
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{a.blurb}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-border">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-11 w-11 text-lg font-bold text-navy"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-bold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="h-11 w-11 text-lg font-bold text-navy"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={addToCart}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-navy-deep"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-border bg-secondary/50 p-4">
            <ShieldCheck className="h-5 w-5 shrink-0 text-gold" />
            <p className="text-xs text-foreground/75">
              On Tier 2 ($199/mo) and Tier 3 ($399/mo) this device is covered by the Hardware
              Protection Guarantee — 2 free replacements per year, active after 4 months.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-extrabold text-navy">Pairs well with</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/shop/$slug"
              params={{ slug: p.slug }}
              className="card-lift overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={600}
                height={600}
                className="aspect-square w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-bold text-navy">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold">{formatPrice(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
