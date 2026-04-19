import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteFooter() {
  const [buildHash, setBuildHash] = useState("——————");

  useEffect(() => {
    setBuildHash(Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0"));
  }, []);

  return (
    <footer
      className="relative z-10 mt-24 border-t border-border bg-background"
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="NeoRyax"
                width={128}
                height={128}
                className="h-12 w-auto object-contain md:h-14"
              />
              <div>
                <div className="font-mono text-base tracking-wide">
                  <span className="text-primary">Neo</span>
                  <span className="text-foreground">Ryax</span>
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  the new axis of technology
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
              <span className="text-terminal-green">{">"}</span> Engineering the core of innovation.
              Where systems align — built on precision, designed for control.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
              // navigate
            </div>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              {[
                ["/services", "services"],
                ["/about", "about"],
                ["/case-studies", "case-studies"],
                ["/contact", "contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to as "/services"}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    data-testid={`footer-link-${label}`}
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
              // signal
            </div>
            <ul className="mt-4 space-y-2 font-mono text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:neoryaxtechnologies@gmail.com"
                  className="break-all transition-colors hover:text-primary"
                >
                  neoryaxtechnologies@gmail.com
                </a>
              </li>
              <li className="text-terminal-amber">status: online</li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse bg-terminal-green" />
                axis::stable
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} neoryax // all systems aligned</div>
          <div className="flex items-center gap-3">
            <span className="text-terminal-green">$</span>
            <span>build.hash: 0x{buildHash}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
