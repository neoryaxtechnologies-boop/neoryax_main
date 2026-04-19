import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { PageLoader } from "@/components/PageLoader";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative z-10 max-w-md text-center font-mono">
        <div className="text-[11px] uppercase tracking-widest text-terminal-red">
          // signal lost
        </div>
        <h1 className="mt-3 text-7xl font-bold text-primary glow-text">404</h1>
        <h2 className="mt-4 text-xl text-foreground">node_not_found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          $ the requested route is not on the axis.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-primary bg-primary/10 px-5 py-2 text-xs uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            data-testid="notfound-home-link"
          >
            ← return to ~/
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NeoRyax — The New Axis of Technology" },
      {
        name: "description",
        content:
          "NeoRyax engineers the core of innovation. Web, mobile, payments, custom software, cloud & DevOps, UI/UX — built on precision.",
      },
      { name: "author", content: "NeoRyax" },
      { name: "theme-color", content: "#050505" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NeoRyax" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <PageLoader />
      <Outlet />
    </>
  );
}
