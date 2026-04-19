import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Global ambient layers */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-40" aria-hidden />
      <div className="noise-overlay" aria-hidden />
      <div className="scan-line" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1" data-testid="page-main">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
