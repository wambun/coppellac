# Product Requirements Document (PRD)
## Coppell Heating & Air Conditioning Website Redesign

**Version:** 1.0
**Date:** January 16, 2026
**Project:** Full Multi-Page Website Redesign

---

## 1. Executive Summary

This PRD outlines the complete redesign of the Coppell Heating & Air Conditioning website (coppellac.com), transforming it from a legacy WordPress site into a modern, premium Next.js application. The new design follows the Heatfix Framer template's visual language and interaction patterns while preserving all existing content and business functionality.

---

## 2. Sitemap (Derived from `client/old`)

### Primary Pages
| Route | Page Name | Source Content |
|-------|-----------|----------------|
| `/` | Home | `heat_and_ac_repair_and_installation___coppell__tx___coppell_heating_and_air_conditioning__inc_.md` |
| `/services` | Services | `high_quality_hvac_services___coppell__tx.md` |
| `/about` | About Us | `dependable_ac_and_heat_services___coppell__tx.md` |
| `/faq` | FAQ | `frequently_asked_questions___coppell__tx.md` |
| `/contact` | Contact / Service Request | `service_estimate_request___coppell__tx.md` |
| `/special-offers` | Special Offers / Deals | `special_hvac_deals___coppell__tx.md` |
| `/tips` | AC Tips & Resources | `helpful_air_conditioning_tips___coppell__tx.md` |
| `/financing` | Payment Options | `hvac_payment_options___coppell__tx.md` |

### Service Detail Pages
| Route | Page Name | Source Content |
|-------|-----------|----------------|
| `/services/ac-repair` | AC Repair | `reliable_ac_repair___coppell__tx.md` |
| `/services/ductwork` | Ductwork & Air Flow | `ductwork_and_air_flow_repair___coppell__tx___coppell_heating_and_air.md` |

### Utility Pages
| Route | Page Name |
|-------|-----------|
| `/404` | Page Not Found |

---

## 3. Visual Analysis (Design Target: heatfix.framer.website)

### 3.1 Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Orange | `#F97316` | CTAs, accents, highlights, discount percentages |
| Dark/Charcoal | `#1A1A1A` | Footer background, dark sections |
| Light Gray | `#F5F5F5` | Section backgrounds, card backgrounds |
| White | `#FFFFFF` | Primary background |
| Text Dark | `#1A1A1A` | Headings, body text |
| Text Gray | `#6B7280` | Secondary text, descriptions |

### 3.2 Typography
- **Headings:** Bold, large serif or sans-serif (likely Inter or similar)
- **Body:** Clean sans-serif, 16-18px base
- **Section Labels:** Uppercase, small, orange color with em-dash prefix (e.g., "— WHO WE ARE")
- **CTAs:** Uppercase, medium weight

### 3.3 Component Patterns

#### Navigation
- Sticky header with logo on left
- Navigation links centered or right-aligned
- CTA button (orange) on far right
- Announcement/promo bar at top with scrolling text

#### Hero Section
- Full-width background image
- Large headline with location-specific text
- Subheadline with value proposition
- Primary CTA button with arrow icon
- Floating testimonial card overlay

#### Section Headers
- Small label in orange (e.g., "— WHO WE ARE")
- Large bold heading
- Optional subtext

#### Service Cards
- Image with rounded corners
- Service title
- Discount percentage in orange
- Short description
- "BOOK NOW" CTA button with arrow

#### Feature Cards (4-column grid)
- Colorful icon at top
- Bold title
- Description text

#### Testimonial Cards
- Avatar image (circular)
- Name in bold uppercase
- Role/location in gray
- 5-star rating (orange)
- Testimonial text
- Subtle card shadow

#### Contact Section
- Two-column layout
- Left: Contact info (address, email, phone), social icons
- Right: Contact form with styled inputs
- Orange CTA button

#### Footer
- Dark background with rounded top corners
- Logo and tagline
- Partner/certification logos
- Navigation links
- Copyright

### 3.4 Micro-Interactions & Animations
- Smooth scroll transitions between sections
- Hover effects on cards (subtle lift/shadow)
- Button hover states (color shift, arrow movement)
- Scroll-triggered fade-in animations
- Announcement bar marquee/ticker effect

---

## 4. Content Mapping

### 4.1 Home Page Content Mapping
| Old Content | New Component |
|-------------|---------------|
| Hero image + headline | Hero Section with "Trusted HVAC Experts Serving Coppell, TX" |
| Service cards (Residential, Thermostat, Fast Repair) | Services Grid with discount badges |
| "Since 1983" + Company description | "Who We Are" Section |
| Services list | Booking Process / Features Grid |
| Contact info section | Contact CTA Section |
| Footer | Modern Footer with nav links |

### 4.2 Services Page Content Mapping
| Old Content | New Component |
|-------------|---------------|
| Service list (11 items) | Services Grid with individual cards |
| Service descriptions | Service detail cards with CTAs |
| Images | Service card images |

### 4.3 FAQ Page Content Mapping
| Old Content | New Component |
|-------------|---------------|
| FAQ items | Accordion component with expand/collapse |
| Gallery images | Testimonials or removed |

### 4.4 Contact Page Content Mapping
| Old Content | New Component |
|-------------|---------------|
| Contact form | Styled contact form |
| Phone/Email/Address | Contact info cards |
| Map link | Embedded map or link |

---

## 5. Technical Implementation

### 5.1 Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Shadcn UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation

### 5.2 Project Structure
```
app/
├── layout.tsx          # Root layout with nav/footer
├── page.tsx            # Home page
├── about/
│   └── page.tsx
├── services/
│   ├── page.tsx        # Services listing
│   ├── ac-repair/
│   │   └── page.tsx
│   └── ductwork/
│       └── page.tsx
├── faq/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── special-offers/
│   └── page.tsx
├── tips/
│   └── page.tsx
├── financing/
│   └── page.tsx
└── not-found.tsx       # 404 page

components/
├── landing/
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── AboutSection.tsx
│   ├── FeaturesGrid.tsx
│   ├── Testimonials.tsx
│   ├── ContactCTA.tsx
│   └── AnnouncementBar.tsx
├── shared/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   ├── FeatureCard.tsx
│   ├── TestimonialCard.tsx
│   ├── FAQAccordion.tsx
│   ├── ContactForm.tsx
│   └── SectionHeader.tsx

data/
├── config/
│   ├── site.settings.js  # Company info (name, phone, email, address)
│   ├── headerNavLinks.ts
│   └── footerLinks.ts
└── content/
    ├── services.json
    ├── testimonials.json
    └── faq.json
```

### 5.3 Data Configuration
Company data should be centralized in `data/config/site.settings.js`:
```javascript
export const siteSettings = {
  name: "Coppell Heating and Air Conditioning, Inc.",
  shortName: "Coppell AC",
  phone: "(972) 462-1882",
  email: "service@coppellac.com",
  address: {
    street: "436 Southwestern Blvd.",
    city: "Coppell",
    state: "Texas",
    zip: "75019",
    country: "USA"
  },
  license: "TACLA00066993E",
  founded: 1983,
  mapUrl: "https://goo.gl/maps/qZeaD2udM7AuEPSVA",
  financingUrl: "https://retailservices.wellsfargo.com/ahapp/init-app?m=0024205254&l=en_US"
}
```

### 5.4 Key Components to Build

#### Phase 2A: Global Layout
1. `AnnouncementBar` - Scrolling promo ticker
2. `Header` - Sticky navigation with logo and CTA
3. `Footer` - Dark footer with links and contact info

#### Phase 2B: Landing Page Components
1. `Hero` - Full-width hero with floating testimonial
2. `AboutSection` - Two-column with image and content
3. `ServicesGrid` - Service cards with discounts
4. `FeaturesGrid` - 4-column feature icons
5. `Testimonials` - Masonry testimonial cards
6. `ContactCTA` - Contact section with form

#### Phase 2C: Internal Pages
1. Services listing page
2. Individual service detail pages
3. FAQ page with accordion
4. Contact page with form
5. About page
6. Special offers page
7. Tips/Resources page
8. Financing page

---

## 6. Business Requirements

### 6.1 Must-Have Features
- [ ] Mobile-responsive design
- [ ] Click-to-call functionality
- [ ] Contact form with email delivery
- [ ] SEO optimization (meta tags, structured data)
- [ ] Fast page load times (Core Web Vitals)
- [ ] Accessibility compliance (WCAG 2.1 AA)

### 6.2 Content Requirements
- [ ] Preserve all existing content from old site
- [ ] Update imagery to match new design aesthetic
- [ ] Maintain phone number prominence
- [ ] Display license number in footer
- [ ] Include financing/payment options

### 6.3 Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

---

## 7. Implementation Phases

### Phase 1: Architecture & PRD (Complete)
- [x] Firecrawl data collection
- [x] Visual analysis of design target
- [x] Sitemap creation
- [x] Content mapping
- [x] Technical specification

### Phase 2: Execution
- [ ] Global layout (Header, Footer, AnnouncementBar)
- [ ] Home page with all sections
- [ ] Services pages
- [ ] FAQ page
- [ ] Contact page
- [ ] About page
- [ ] Special offers page
- [ ] Tips page
- [ ] Financing page
- [ ] 404 page

### Phase 3: Polish & Testing
- [ ] Animations and micro-interactions
- [ ] Mobile responsiveness
- [ ] Form functionality
- [ ] SEO implementation
- [ ] Performance optimization
- [ ] Cross-browser testing

---

## 8. Design Assets Reference

### Colors (Tailwind Config)
```javascript
colors: {
  primary: {
    DEFAULT: '#F97316',
    hover: '#EA580C',
  },
  dark: '#1A1A1A',
  light: '#F5F5F5',
}
```

### Button Styles
- Primary: Orange background, white text, rounded-full, arrow icon
- Secondary: White background, dark border, dark text, rounded-full

### Card Styles
- Background: White or light gray
- Border-radius: 16px (rounded-2xl)
- Shadow: Subtle on hover
- Padding: 24px (p-6)

---

**End of PRD**
