import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Client Onboarding — tapNFC.ca" },
      {
        name: "description",
        content:
          "Send us your business details, destination link, artwork and Google Business Profile access so we can program and ship your NFC hardware.",
      },
      { property: "og:title", content: "Client Onboarding — tapNFC.ca" },
      {
        property: "og:description",
        content: "Share your business details, tap destination link and artwork to get set up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OnboardingPage,
});

function OnboardingPage() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-sm font-semibold tracking-widest text-gilt uppercase">Step 3 of 3</p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Client onboarding
      </h1>
      <p className="mt-3 text-muted-foreground">
        Thanks for your order. Tell us where your taps should go and we&apos;ll program your
        hardware before it ships.
      </p>
      <div className="rule-gold mt-6 mb-10" />

      {sent ? (
        <div className="rounded-xl border border-border bg-card p-10 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-gilt" />
          <h2 className="mt-4 font-display text-xl font-semibold">We&apos;ve got everything</h2>
          <p className="mt-2 text-muted-foreground">
            Our team will confirm your destination link within one business day.
          </p>
          <Button asChild className="mt-6">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-8">
          <fieldset className="space-y-4 rounded-xl border border-border bg-card p-6">
            <legend className="px-2 font-display font-semibold">Business details</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="business">Business name</Label>
                <Input id="business" name="business" required placeholder="Maple Street Café" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact name</Label>
                <Input id="contact" name="contact" required placeholder="Alex Tremblay" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@business.ca" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(416) 555-0134" />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-4 rounded-xl border border-border bg-card p-6">
            <legend className="px-2 font-display font-semibold">Tap destination</legend>
            <div className="space-y-2">
              <Label htmlFor="destination">Initial destination URL</Label>
              <Input
                id="destination"
                name="destination"
                type="url"
                required
                placeholder="https://g.page/r/your-review-link"
              />
              <p className="text-xs text-muted-foreground">
                Google review link, digital menu, promo video or landing page — you can change this
                any time on a link plan.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes for our team</Label>
              <Textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Anything we should know about your setup or artwork."
              />
            </div>
          </fieldset>

          <fieldset className="space-y-4 rounded-xl border border-border bg-card p-6">
            <legend className="px-2 font-display font-semibold">Logo &amp; artwork</legend>
            <div className="space-y-2">
              <Label htmlFor="artwork">Upload logo or artwork for custom printing</Label>
              <Input
                id="artwork"
                name="artwork"
                type="file"
                accept="image/*,.pdf,.ai,.eps,.svg"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
              {fileName ? (
                <p className="text-xs text-muted-foreground">Selected: {fileName}</p>
              ) : null}
            </div>
          </fieldset>

          <fieldset className="space-y-4 rounded-xl border border-border bg-card p-6">
            <legend className="px-2 font-display font-semibold">
              Google Business Profile (Tier 2 &amp; 3)
            </legend>
            <div className="space-y-2">
              <Label htmlFor="gmb">Business Profile listing URL or business address</Label>
              <Input id="gmb" name="gmb" placeholder="https://maps.google.com/..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gmbEmail">Email to send the manager invite to</Label>
              <Input id="gmbEmail" name="gmbEmail" type="email" placeholder="owner@business.ca" />
            </div>
          </fieldset>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Submit onboarding details
          </Button>
        </form>
      )}
    </div>
  );
}
