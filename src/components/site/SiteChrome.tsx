import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg.asset.json";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/shop", label: "Hardware" },
  { to: "/pricing", label: "Plans & Pricing" },
  { to: "/onboarding", label: "Onboarding" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="tapNFC.ca logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full ring-1 ring-gold/50"
          />
          <span className="truncate font-display text-lg font-extrabold tracking-tight text-navy">
            tapNFC<span className="text-gold">.ca</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
                activeProps={{ className: "text-navy" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy transition-colors hover:bg-secondary"
            aria-label="Cart"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-gold-foreground">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="surface-navy mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="tapNFC.ca"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 rounded-full ring-1 ring-gold/60"
            />
            <span className="font-display text-base font-extrabold">tapNFC.ca</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Premium NFC hardware and dynamic link management for Canadian businesses.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gold">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link to="/shop">All hardware</Link>
            </li>
            <li>
              <Link to="/pricing">Plans & pricing</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gold">Clients</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link to="/onboarding">Client onboarding</Link>
            </li>
            <li>Hardware protection claims</li>
            <li>Link change requests</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>supportinfo@tapnfc.ca</li>
            <li>Serving all of Canada</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/50">
          © {new Date().getFullYear()} tapNFC.ca — All prices in CAD.
        </p>
      </div>
    </footer>
  );
}
