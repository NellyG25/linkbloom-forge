import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/catalog";
import { Minus, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — tapNFC.ca" },
      {
        name: "description",
        content:
          "Review your NFC hardware and link management plan before checkout with tapNFC.ca.",
      },
      { property: "og:title", content: "Your Cart — tapNFC.ca" },
      {
        property: "og:description",
        content: "Review your NFC hardware and link management plan before checkout.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, oneTimeTotal, monthlyTotal, clear } = useCart();
  const navigate = useNavigate();

  const checkout = () => {
    clear();
    navigate({ to: "/onboarding" });
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Your cart</h1>
      <div className="rule-gold mt-4 mb-8" />

      {items.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-10 text-center">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Button asChild className="mt-6">
            <Link to="/shop">Shop hardware</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                ) : null}
                <div className="flex-1">
                  <p className="font-display font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatPrice(item.price)}
                    {item.cadence ? ` ${item.cadence}` : " one-time"}
                  </p>
                </div>
                {item.kind === "plan" ? (
                  <span className="text-sm text-muted-foreground">Subscription</span>
                ) : (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => setQty(item.id, item.qty - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center tabular-nums">{item.qty}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => setQty(item.id, item.qty + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => remove(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Order summary</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Hardware &amp; one-time</dt>
                <dd className="font-medium tabular-nums">{formatPrice(oneTimeTotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Recurring</dt>
                <dd className="font-medium tabular-nums">
                  {monthlyTotal > 0 ? `${formatPrice(monthlyTotal)}/mo` : "—"}
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">
              All prices in CAD. Taxes and shipping calculated at checkout.
            </p>
            <Button className="mt-6 w-full" onClick={checkout}>
              Checkout
            </Button>
            <Button asChild variant="ghost" className="mt-2 w-full">
              <Link to="/shop">Continue shopping</Link>
            </Button>
          </aside>
        </div>
      )}
    </div>
  );
}
