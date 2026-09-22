import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <Button asChild variant="link" className="mb-10 h-auto p-0">
            <a href="/">
              <ArrowLeft aria-hidden="true" /> Back home
            </a>
          </Button>
          <p className="section-kicker">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-primary sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p>
          <p className="mt-8 text-sm font-semibold text-foreground">Effective 22 September 2026</p>
        </div>
      </section>
      <article className="legal-copy mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">{children}</article>
    </main>
  );
}
