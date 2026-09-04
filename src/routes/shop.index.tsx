import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products, formatPrice } from "@/lib/catalog";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "NFC Hardware Shop — Review Plaques & Wearables | tapNFC.ca" },
      {
        name: "description",
        content:
          "Shop NFC Google review plaques, tap-to-order menu discs, silicone wristbands and leather bracelets from $25 CAD. Pre-programmed with dynamic links.",
      },
      { property: "og:title", content: "NFC Hardware Shop | tapNFC.ca" },
      {
        property: "og:description",
        content:
          "Google review plaques, menu discs and NFC wearables built for Canadian businesses.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Hardware</p>
      <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">Tap-ready hardware</h1>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">
        Every device ships pre-programmed with a dynamic redirect so you can change the destination
        any time — without touching the hardware.
      </p>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.slug}
            to="/shop/$slug"
            params={{ slug: p.slug }}
            className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="aspect-square overflow-hidden bg-secondary">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-base font-bold text-navy">{p.name}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{p.formFactor}</p>
              <p className="mt-3 flex-1 text-sm text-foreground/75">{p.tagline}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-xl font-extrabold">{formatPrice(p.price)}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy">
                  Details <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
