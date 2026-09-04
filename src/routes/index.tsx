import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Nfc, ShieldCheck, Sparkles } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";
import { plans, products, formatPrice } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "tapNFC.ca — Turn Taps Into Reviews, Orders & Sales" },
      {
        name: "description",
        content:
          "Premium NFC review plaques, menu discs and wearables paired with dynamic link management and Google Business Profile growth plans across Canada.",
      },
      { property: "og:title", content: "tapNFC.ca — Turn Taps Into Reviews, Orders & Sales" },
      {
        property: "og:description",
        content:
          "NFC hardware from $25 plus unlimited dynamic link management from $19.99/mo. Canadian-made growth for local businesses.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="surface-navy relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <Nfc className="h-3.5 w-3.5" /> Canada-wide NFC
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
              Turn Taps Into <span className="text-gilt">Reviews, Orders</span> & Sales.
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/75">
              Premium NFC plaques and wearables, programmed with dynamic links you can change any
              time — backed by Google Business Profile management that grows your local rank.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
              >
                Shop Hardware <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Plans
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                ["5", "Hardware options"],
                ["$19.99", "Unlimited link plan"],
                ["2×/yr", "Replacements on Tier 2 & 3"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-xl font-extrabold text-gold">{v}</dt>
                  <dd className="mt-1 text-xs text-white/60">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-0 rounded-full bg-gold/20 blur-3xl" />
            <img
              src={logo.url}
              alt="tapNFC.ca blue and gold emblem"
              width={640}
              height={640}
              className="relative w-full rounded-[2rem] shadow-[var(--shadow-elevated)] ring-1 ring-gold/40"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">The hardware lineup</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              One-time purchase. Every chip ships pre-programmed with your dynamic redirect.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-navy sm:inline-flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/shop/$slug"
              params={{ slug: p.slug }}
              className="card-lift group overflow-hidden rounded-2xl border border-border bg-card"
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
              <div className="p-5">
                <h3 className="text-base font-bold text-navy">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
                <p className="mt-3 font-display text-lg font-extrabold text-foreground">
                  {formatPrice(p.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">How it works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Select hardware",
                d: "Choose table plaques, menu discs, or wearable wristbands and bracelets.",
              },
              {
                n: "02",
                t: "Select a link plan",
                d: "Pay-per-edit at $40, or go unlimited from $19.99/mo up to full GMB + local SEO.",
              },
              {
                n: "03",
                t: "Tap & convert",
                d: "Customers tap with any smartphone — no app, no QR, no friction.",
              },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-sm font-black tracking-widest text-gold">
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Compare the plans</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          All plans work with every piece of hardware you own.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-gold bg-card shadow-[var(--shadow-gold)]"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">{plan.name}</h3>
              <p className="mt-3 font-display text-3xl font-black text-foreground">
                {formatPrice(plan.price)}
                <span className="ml-1 text-xs font-semibold text-muted-foreground">
                  {plan.cadence}
                </span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{plan.summary}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-navy-deep"
              >
                See details
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-gold/50 bg-gold/10 p-7 sm:flex-row sm:items-center">
          <ShieldCheck className="h-10 w-10 shrink-0 text-gold" />
          <div>
            <h3 className="text-lg font-bold text-navy">Hardware Protection Guarantee</h3>
            <p className="mt-1 text-sm text-foreground/80">
              Tier 2 ($199/mo) and Tier 3 ($399/mo) include up to 2 free replacements per year for
              damaged hardware, active after 4 months of subscription.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="surface-navy flex flex-col items-start gap-6 rounded-3xl px-8 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
              <Sparkles className="h-6 w-6 text-gold" /> Ready to start tapping?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/70">
              Pick your hardware, add a link plan, and we'll ship pre-programmed devices with a
              guided onboarding form.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground"
          >
            Shop Hardware <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
