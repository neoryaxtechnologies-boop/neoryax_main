import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/", label: "~/" },
  { to: "/services", label: "services" },
  { to: "/about", label: "about" },
  { to: "/case-studies", label: "case-studies" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md"
      data-testid="site-header"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2 text-primary transition-opacity hover:opacity-90"
          data-testid="nav-logo"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="NeoRyax"
            width={128}
            height={128}
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.05] md:h-12"
          />
          <span className="flex items-baseline font-mono text-sm tracking-wide md:text-base">
            <span className="text-primary">Neo</span>
            <span className="text-foreground">Ryax</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" data-testid="nav-desktop">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:bg-accent/40"
              data-testid={`nav-link-${item.label.replace(/[^a-z]/g, "")}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-2 border border-primary bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_oklch(0.82_0.16_200/0.4)]"
            data-testid="nav-cta-init"
          >
            <span className="h-1.5 w-1.5 animate-pulse bg-primary" />
            init://contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-border text-primary md:hidden"
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          <span className="font-mono text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-border bg-background md:hidden"
          data-testid="nav-mobile"
        >
          <div className="flex flex-col px-4 py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 px-2 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground last:border-b-0 hover:text-primary data-[status=active]:text-primary"
                data-testid={`nav-mobile-link-${item.label.replace(/[^a-z]/g, "")}`}
              >
                <span className="text-terminal-green">$</span> {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
