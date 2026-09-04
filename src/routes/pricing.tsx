import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, ShieldCheck, X } from "lucide-react";
import { toast } from "sonner";
import { plans, formatPrice } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Plans & Pricing — Dynamic Links + GMB Growth | tapNFC.ca" },
      {
        name: "description",
        content:
          "Compare $40 per-edit, Tier 1 at $19.99/mo, Tier 2 at $199/mo and Tier 3 at $399/mo — including the Hardware Protection Guarantee on Tiers 2 and 3.",
      },
      { property: "og:title", content: "Plans & Pricing | tapNFC.ca" },
      {
        property: "og:description",
        content:
          "Unlimited NFC link management, Google Business Profile care, local SEO and hardware replacement protection.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const { add } = useCart();
  const navigate = useNavigate();

  const choose = (id: string) => {
    const plan = plans.find((p) => p.id === id)!;
    add({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      kind: plan.id === "a-la-carte" ? "service" : "plan",
      cadence: plan.cadence,
    });
    toast.success(`${plan.name} added to cart`);
    navigate({ to: "/cart" });
  };

  return (
    <div>
      <section className="surface-navy">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Plans & services</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Pick how you manage your links</h1>
          <p className="mt-4 max-w-2xl text-sm text-white/75">
            Change your NFC destination without ever reprinting hardware. Add Google Business
            Profile management when you want the reviews to compound into rank.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-gold shadow-[var(--shadow-gold)]"
                  : "border-border"
              } bg-card`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-foreground">
                  Most popular
                </span>
              )}
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">{plan.name}</h2>
              <p className="mt-3 font-display text-3xl font-black">
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
              <button
                onClick={() => choose(plan.id)}
                className={`mt-6 rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
                  plan.highlight
                    ? "bg-gold text-gold-foreground hover:brightness-105"
                    : "bg-navy text-primary-foreground hover:bg-navy-deep"
                }`}
              >
                {plan.id === "a-la-carte" ? "Buy an edit" : "Start this plan"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-secondary text-navy">
              <tr>
                <th className="p-4 font-bold">Feature</th>
                {plans.map((p) => (
                  <th key={p.id} className="p-4 font-bold">
                    {p.name.replace(/^Tier \d · /, "")}
                    <span className="block text-xs font-semibold text-muted-foreground">
                      {formatPrice(p.price)} {p.cadence}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["NFC link updates", "linkUpdates"],
                  ["GMB management & SEO", "gmb"],
                  ["Hardware replacement protection", "protection"],
                ] as const
              ).map(([label, key]) => (
                <tr key={key} className="border-t border-border align-top">
                  <th className="p-4 font-semibold text-navy">{label}</th>
                  {plans.map((p) => (
                    <td key={p.id} className="p-4 text-foreground/80">
                      {p[key] === "Not included" ? (
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <X className="h-4 w-4" /> Not included
                        </span>
                      ) : (
                        <span className="inline-flex items-start gap-1.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {p[key]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-gold/50 bg-gold/10 p-7 sm:flex-row">
          <ShieldCheck className="h-10 w-10 shrink-0 text-gold" />
          <div>
            <h2 className="text-lg font-bold text-navy">Hardware Protection Guarantee</h2>
            <p className="mt-1 text-sm text-foreground/80">
              Tiers 2 and 3 include up to 2 free replacements per year for damaged hardware, active
              after 4 months of continuous subscription. Submit a claim from your onboarding
              details and we ship a replacement pre-programmed with your existing link.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
