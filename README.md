# Juleco Marketing Site

Build a complete, professional, fully static single-page marketing website for Juleco, a South African consultancy offering technology, data and business consulting. Build everything in this single pass. Do not ask follow-up questions. Do not add a backend, database, authentication, Supabase/Lovable Cloud, forms, analytics, CMS, or AI-generated images. Keep the code minimal: React + Tailwind, a few components, no extra libraries beyond the template defaults. Use lucide icons only, no stock photos.

COMPANY DETAILS (use exactly as written):
- Legal name: [Juleco (Pty) Ltd]
- Registration number: [20XX/XXXXXX/07]
- Email: admin@juleco.co.za
- Location: [Cape Town, South Africa]
- There is no phone number. Do not display or invent one.

HOME PAGE ("/"), one scrolling page:
1. Header: sticky. Text wordmark "JULECO" on the left; anchor links on the right: Services, About, Approach, Contact. Collapses to a simple menu on mobile.
2. Hero: full width, generous height. Large headline: "Clear thinking for technology, data and business." Two short lines beneath: "Juleco is a South African consultancy that helps organisations choose the right technology, make sense of their data and run their operations better." and "We work alongside your team from the first conversation through to delivery." One button: "Contact us" (mailto:admin@juleco.co.za).
3. Services: title "What we do", intro line "Six ways we help, across technology, data and business." Grid of six cards (3 columns desktop, 2 tablet, 1 mobile), each with a lucide icon, title and two-sentence description:
   • Technology Strategy: Independent advice on which systems, platforms and cloud services suit your needs and budget. We help you plan before you spend.
   • Software & App Development: Web and mobile applications built around how your business actually works, from first prototype to live release.
   • Data Engineering: Reliable pipelines that bring scattered data into one place. Clean, organised and ready to use.
   • Analytics & Reporting: Dashboards and reports that answer the questions your team asks every week, with statistical and machine learning models where they genuinely help.
   • Business Strategy: Structured thinking on where to focus, what to prioritise and how to measure progress.
   • Process & Automation: We map how work gets done, remove bottlenecks and automate the repetitive parts.
4. About: two columns. Left: heading "About Juleco" and two short paragraphs: Juleco combines technical skill with commercial sense. We are independent, hands-on and honest about what will and won't work, and we measure success by what changes in your business, not by the size of the report. Right: an abstract decorative graphic built in SVG/CSS (a geometric pattern of lines and circles in the brand colours) instead of a photo.
5. Approach: heading "How we work", four numbered steps in a row (stacked on mobile): Listen, Plan, Build, Support, one sentence each.
6. Contact: full-width band in the primary colour. Heading "Let's talk", line "Tell us what you're working on and we'll get back to you.", an "Email us" button (mailto:admin@juleco.co.za), and the email address and location shown as visible text.
7. Footer: "© 2026 [Juleco (Pty) Ltd]. Registration no. [20XX/XXXXXX/07]. [Cape Town], South Africa." plus links to Terms of Service, Privacy Policy and admin@juleco.co.za.

EXTRA PAGES (same header and footer, with a link back home):
- "/privacy": plain-language privacy policy for a South African company, aligned with POPIA. Covers what personal information we collect (only what people send us by email), how it is used, that we do not sell data, no tracking or advertising cookies, retention, the right to access, correct or delete information, and admin@juleco.co.za for privacy requests. Effective date: [DATE].
- "/terms": short terms of use for an informational website. Content is general information, not professional advice; site content belongs to Juleco; no liability for reliance on site content; external links are not endorsed; South African law applies; contact admin@juleco.co.za. Effective date: [DATE].

DESIGN
- Modern, confident, minimal, lots of whitespace. Palette: deep forest green #16352B (primary), warm off-white #F7F5F0 (background), brass #C39A45 (accent for icons, buttons and highlights), near-black #1A1A1A (text).
- Headings in Manrope, body in Inter (Google Fonts).
- Subtle hover lift on service cards, smooth scrolling for anchor links, fully responsive.
- Page title "Juleco | Technology, Data & Business Consulting", a meta description, and a simple "J" favicon.

RULES
- Do not invent testimonials, clients, logos, statistics, team members, years of experience, or a phone number.
- Do not use the phrases "data-driven decisions", "actionable insights", "unlock opportunities", "competitive advantage", "empower" or "cutting-edge".
- No "coming soon", lorem ipsum or placeholder text. Every link and button must work.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9a5304f2-dd05-433f-bc29-fc68777b7266).

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
