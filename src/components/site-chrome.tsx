import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          aria-label="Juleco home"
          className="font-display text-xl font-extrabold tracking-[0.14em] text-primary"
        >
          JULECO
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {menuOpen ? (
        <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 font-display text-lg font-semibold text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
        <div>
          <Link to="/" className="font-display text-lg font-extrabold tracking-[0.14em]">
            JULECO
          </Link>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-footer-muted">
            © 2026 Juleco (Pty) Ltd. Registration no. 2020/933902/07{"\n"}
            Cape Town, South Africa
          </p>
        </div>
        <nav aria-label="Legal and contact" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link to="/terms" className="transition-colors hover:text-accent">
            Terms of Service
          </Link>
          <Link to="/privacy" className="transition-colors hover:text-accent">
            Privacy Policy
          </Link>
          <a
            href="mailto:admin@juleco.co.za"
            className="inline-flex items-center gap-1 transition-colors hover:text-accent"
          >
            admin@juleco.co.za <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
