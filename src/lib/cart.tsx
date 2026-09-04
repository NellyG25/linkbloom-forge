import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  kind: "hardware" | "plan" | "service";
  cadence?: string;
  image?: string;
};

type CartCtx = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  oneTimeTotal: number;
  monthlyTotal: number;
};

const CartContext = createContext<CartCtx | null>(null);
const STORAGE_KEY = "tapnfc-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const value = useMemo<CartCtx>(() => {
    const add: CartCtx["add"] = (item, qty = 1) =>
      setItems((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing)
          return prev.map((i) =>
            i.id === item.id ? { ...i, qty: item.kind === "plan" ? 1 : i.qty + qty } : i,
          );
        return [...prev, { ...item, qty }];
      });

    return {
      items,
      add,
      remove: (id) => setItems((prev) => prev.filter((i) => i.id !== id)),
      setQty: (id, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => i.id !== id)
            : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
        ),
      clear: () => setItems([]),
      count: items.reduce((n, i) => n + i.qty, 0),
      oneTimeTotal: items
        .filter((i) => i.kind !== "plan")
        .reduce((n, i) => n + i.price * i.qty, 0),
      monthlyTotal: items.filter((i) => i.kind === "plan").reduce((n, i) => n + i.price * i.qty, 0),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
