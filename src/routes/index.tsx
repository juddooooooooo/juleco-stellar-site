import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Braces,
  CircuitBoard,
  GitBranch,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CircuitBoard,
    title: "Technology Strategy",
    description:
      "Independent advice on which systems, platforms and cloud services suit your needs and budget. We help you plan before you spend.",
  },
  {
    icon: Braces,
    title: "Software & App Development",
    description:
      "Web and mobile applications built around how your business actually works, from first prototype to live release.",
  },
  {
    icon: GitBranch,
    title: "Data Engineering",
    description:
      "Reliable pipelines that bring scattered data into one place. Clean, organised and ready to use.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Dashboards and reports that answer the questions your team asks every week, with statistical and machine learning models where they genuinely help.",
  },
  {
    icon: Boxes,
    title: "Business Strategy",
    description:
      "Structured thinking on where to focus, what to prioritise and how to measure progress.",
  },
  {
    icon: Workflow,
    title: "Process & Automation",
    description:
      "We map how work gets done, remove bottlenecks and automate the repetitive parts.",
  },
];

const steps = [
  ["Listen", "We start with your goals, constraints and the realities of how your organisation works."],
  ["Plan", "We agree on clear priorities, practical next steps and what success should look like."],
  ["Build", "We work alongside your team to turn the plan into useful, well-made solutions."],
  ["Support", "We stay involved through delivery, adoption and the improvements that follow."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juleco | Technology, Data & Business Consulting" },
      {
        name: "description",
        content:
          "Juleco is a South African consultancy helping organisations choose technology, make sense of data and improve operations.",
      },
      { property: "og:title", content: "Juleco | Technology, Data & Business Consulting" },
      {
        property: "og:description",
        content:
          "Independent, practical consulting across technology, data and business from Cape Town, South Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <section className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-24 top-16 size-80 rounded-full border border-accent/45 sm:size-[30rem]" />
          <div className="absolute -right-2 top-40 size-48 rounded-full border border-primary-foreground/25 sm:size-72" />
          <div className="absolute bottom-0 left-[58%] h-1/2 w-px bg-primary-foreground/20" />
          <div className="absolute bottom-24 left-[48%] h-px w-1/2 bg-accent/40" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="mb-7 font-display text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Technology · Data · Business
          </p>
          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.06] sm:text-7xl lg:text-[5.5rem]">
            Clear thinking for technology, data and business.
          </h1>
          <div className="mt-8 max-w-3xl space-y-3 text-base leading-7 text-primary-foreground/78 sm:text-lg sm:leading-8">
            <p>
              Juleco is a South African consultancy that helps organisations choose the right
              technology, make sense of their data and run their operations better.
            </p>
            <p>We work alongside your team from the first conversation through to delivery.</p>
          </div>
          <Button asChild variant="brass" size="lg" className="mt-10 w-fit">
            <a href="mailto:admin@juleco.co.za">
              Contact us <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="max-w-3xl">
          <p className="section-kicker">Services</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">What we do</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Six ways we help, across technology, data and business.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group min-h-72 bg-card p-7 transition duration-300 hover:relative hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >
                <Icon className="size-7 text-accent-strong" strokeWidth={1.7} aria-hidden="true" />
                <h3 className="mt-9 font-display text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <div>
            <p className="section-kicker">Who we are</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">About Juleco</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>Juleco combines technical skill with commercial sense.</p>
              <p>
                We are independent, hands-on and honest about what will and won't work, and we
                measure success by what changes in your business, not by the size of the report.
              </p>
            </div>
          </div>
          <div className="mx-auto aspect-square w-full max-w-lg" aria-hidden="true">
            <svg viewBox="0 0 500 500" className="size-full" role="presentation">
              <rect x="35" y="35" width="430" height="430" rx="8" fill="none" stroke="var(--color-border)" strokeWidth="2" />
              <path d="M35 160h220V35M255 465V250h210M110 465V325h145M465 125H350v125" fill="none" stroke="var(--color-primary)" strokeWidth="4" />
              <path d="M110 160 255 250 350 125M110 325l145-75 120 110" fill="none" stroke="var(--color-accent)" strokeWidth="3" />
              <circle cx="110" cy="160" r="18" fill="var(--color-accent)" />
              <circle cx="255" cy="250" r="27" fill="var(--color-primary)" />
              <circle cx="350" cy="125" r="13" fill="var(--color-primary)" />
              <circle cx="110" cy="325" r="13" fill="var(--color-primary)" />
              <circle cx="375" cy="360" r="20" fill="var(--color-accent)" />
              <circle cx="255" cy="35" r="8" fill="var(--color-accent)" />
            </svg>
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <p className="section-kicker">Approach</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">How we work</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map(([title, description], index) => (
            <article key={title} className="border-l border-border pl-6 lg:pr-8">
              <span className="font-display text-sm font-bold text-accent-strong">0{index + 1}</span>
              <h3 className="mt-5 font-display text-2xl font-bold text-primary">{title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">Let's talk</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/75">
              Tell us what you're working on and we'll get back to you.
            </p>
            <div className="mt-8 space-y-2 text-sm text-primary-foreground/80">
              <p>admin@juleco.co.za</p>
              <p>Cape Town, South Africa</p>
            </div>
          </div>
          <Button asChild variant="brass" size="lg" className="w-fit">
            <a href="mailto:admin@juleco.co.za">
              Email us <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}