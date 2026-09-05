# TapLink Solutions

Here is the updated master developer brief for tapNFC.ca, featuring the hardware replacement policy included for Tier 2 ($199/mo) and Tier 3 ($399/mo).

Complete Web Developer Specification & Architecture Brief: tapNFC.ca

1. Executive Summary & Brand System

Domain: www.tapnfc.ca

Brand Purpose: Premium NFC hardware displays and wearables paired with dynamic link management and Google Business Profile (GMB) growth services for businesses across Canada and beyond.

Visual Branding Guidelines

 * Logo Asset: Round blue and gold emblem (tapNFC.ca inside concentric signal rings).

 * Primary Color Palette: Deep Royal Navy Blue (#0A3B8C), Metallic Gold (#D4AF37), Crisp White, and Charcoal Grey background accents.

 * Typography: Modern, clean sans-serif (e.g., Inter, Montserrat, or Poppins).

 * Overall UI Aesthetic: Minimalist, high-end e-commerce with clear B2B conversion pathways.

2. Master Product & Service Pricing Matrix

A. Hardware Lineup (One-Time Purchases)

| Product Name | Form Factor / Visual Description | Price |

|---|---|---|

| L-Standing Google Review Plaque | Freestanding vertical table-tent plaque with Google logo and 5-star graphic | $60 |

| Circular Google Review Plaque | White circular puck/disc with Google Review branding | $40 |

| Circular Menu Plaque | Black circular acrylic puck with chef hat & cutlery graphic | $40 |

| Silicon Wristband | All-black matte silicone wearable NFC band | $25 |

| Leather Bracelet | Premium braided black leather bracelet with stainless steel NFC magnetic clasp | $30 |

B. Service Tiers & Maintenance Options

| Tier / Service Level | Price | NFC Link Updates | GMB Management & SEO | Hardware Replacement Protection |

|---|---|---|---|---|

| A La Carte Edit | $40 / edit | Single static target URL update | ❌ | ❌ |

| Tier 1: Dynamic Link Management | $19.99 / mo | Unlimited updates to promo pages, menus, custom links, or review URLs | ❌ | ❌ |

| Tier 2: Standard GMB Management | $199 / mo | Included (Unlimited updates across hardware) | Standard GMB Profile optimization & monthly management | 2 free replacements per year for damaged hardware (eligible after 4 months active) |

| Tier 3: Advanced GMB + Local SEO | $399 / mo | Included (Unlimited updates across hardware) | Advanced GMB optimization & dedicated Local SEO strategy | 2 free replacements per year for damaged hardware (eligible after 4 months active) |

3. End-to-End User Experience & Website Flow

                               ┌────────────────────────────────┐

                               │     Homepage / Landing Page    │

                               └───────────────┬────────────────┘

                                               │

                       ┌───────────────────────┴───────────────────────┐

                       ▼                                               ▼

          ┌─────────────────────────┐                     ┌─────────────────────────┐

          │  Hardware Shop Catalog  │                     │ Service Tiers & Plans   │

          └────────────┬────────────┘                     └────────────┬────────────┘

                       │                                               │

                       └───────────────────────┬───────────────────────┘

                                               ▼

                                 ┌───────────────────────────┐

                                 │   Cart & Checkout Flow    │

                                 └─────────────┬─────────────┘

                                               ▼

                                 ┌───────────────────────────┐

                                 │  Post-Checkout Onboarding │

                                 └───────────────────────────┘



Flow Breakdown

 * Homepage (/)

   * Hero Banner: Features the blue-and-gold tapNFC.ca emblem with the value proposition: "Turn Taps Into Reviews, Orders & Sales." Dual CTA buttons: Shop Hardware and Explore Plans.

   * Hardware Showcase Grid: Displays the 5 hardware products with high-resolution product photography.

   * How It Works (3 Steps):

     * Select Hardware: Choose table plaques or wearable wristbands.

     * Select Link Plan: Choose Pay-Per-Edit ($40) or an Unlimited Link/GMB Plan ($19.99/mo, $199/mo, or $399/mo).

     * Tap & Convert: Customers tap devices with any smartphone.

   * Pricing Matrix: Clear comparison table contrasting $40 per-edit vs. Tier 1 ($19.99/mo) vs. Tier 2 ($199/mo) vs. Tier 3 ($399/mo), highlighting the Hardware Protection Feature on Tier 2 & 3.

 * Product Detail Pages (PDP)

   * High-resolution visual gallery for each hardware item.

   * Service Add-on Selection Field (Mandatory/Recommended toggle at checkout):

     * Option 1: "Add Unlimited Dynamic Link Management ($19.99/mo)"

     * Option 2: "One-Time Initial Setup Only ($40 one-time edit fee)"

 * Pricing & Services Page (/pricing)

   * Detailed breakdown of Tier 1 ($19.99/mo), Tier 2 ($199/mo), Tier 3 ($399/mo), and A La Carte Edits ($40/edit).

   * Feature callout for Tiers 2 & 3: "Hardware Protection Guarantee: Includes up to 2 free replacements per year for damaged hardware (active after 4 months of subscription)."

 * Post-Checkout Client Onboarding Page

   * Immediately following a completed transaction, redirect the buyer to an intake form capturing:

     * Business Name & Contact Info.

     * Initial Destination URL (Google Review Link, Menu Link, Promo Video/Landing Page).

     * Logo / Artwork file upload for custom hardware printing.

     * GMB Access/Details (if subscribing to Tier 2 or Tier 3).

4. Web Developer Implementation Roadmap

Phase 1: Core E-Commerce Setup

 * Create all 5 physical hardware products ($60 L-Stand, $40 Circular Google Plaque, $40 Circular Menu Plaque, $25 Silicone Band, $30 Leather Bracelet).

 * Configure subscription billing logic for Tier 1 ($19.99/mo), Tier 2 ($199/mo), and Tier 3 ($399/mo), plus the one-time fee product for the $40 Edit Fee.

Phase 2: Dynamic Link Redirection Architecture

 * Build or integrate a link routing system (e.g., via Rebrandly API or custom short-link middleware such as tapnfc.ca/r/{client_id}).

 * Requirement: All hardware physical chips must be programmed with dynamic redirect URLs so destination targets can be changed server-side without altering physical hardware.

Phase 3: Automated Onboarding & Webhooks

 * Embed a post-purchase intake form that triggers webhooks (e.g., via Zapier, Make, or Airtable) to automatically route customer target links, replacement requests, and uploaded logos into your fulfillment workflow.

Phase 4: UI/UX & Responsive Styling

 * Implement the deep blue and gold visual styling with high-contrast, mobile-first responsive layouts across all screen sizes. The first image uploaded is the "logo" take note, the other image uploaded are the image you will use to create the website, samples of the product being sold. Use next js and other relevant stacks. Be creative and be a pro

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://linkbloom-forge.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6b673486-da92-43ba-8260-207961d722b3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
