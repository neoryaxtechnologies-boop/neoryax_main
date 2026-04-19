import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { AxisLogo } from "@/components/AxisLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeoRyax — Engineering the Core of Innovation" },
      {
        name: "description",
        content:
          "NeoRyax is the new axis of technology. We build clean, scalable, precise systems — web, mobile, payments, custom software, cloud, and design.",
      },
      { property: "og:title", content: "NeoRyax — Engineering the Core of Innovation" },
      {
        property: "og:description",
        content: "Where systems align. Built on precision. Powering the axis of technology.",
      },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { id: "01", name: "Web Development", desc: "fast, accessible, SEO-grade interfaces" },
  { id: "02", name: "Mobile Applications", desc: "iOS / Android, native-feel cross-platform" },
  { id: "03", name: "Payment Integration", desc: "Stripe, Razorpay, wallets, on-chain" },
  { id: "04", name: "Custom Software", desc: "internal tools, dashboards, automation" },
  { id: "05", name: "Cloud & DevOps", desc: "CI/CD, infra-as-code, observability" },
  { id: "06", name: "UI/UX Design", desc: "interfaces with intent and clarity" },
];

const PRINCIPLES = [
  { k: "core_first", v: "foundation before features" },
  { k: "clarity", v: "simple systems win" },
  { k: "precision", v: "less but better" },
  { k: "evolution", v: "future-proof thinking" },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="axis-bg relative overflow-hidden border-b border-border"
        data-testid="hero"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:gap-6 md:px-8 md:py-28 lg:py-36">
          {/* Left: copy */}
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-2 self-start border border-border bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 animate-pulse bg-terminal-green" />
              axis::online — v1.0
            </div>

            <h1 className="font-mono text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              the new
              <br />
              <span className="text-primary glow-text">axis</span>
              <span className="text-muted-foreground"> of </span>
              <br />
              technology<span className="text-primary">.</span>
            </h1>

            <p className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
              <span className="text-terminal-green">{"//"}</span> NeoRyax engineers the core
              of digital systems. We don&apos;t build on the surface — we build the axis
              everything else depends on.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.16_200/0.6)]"
                data-testid="hero-cta-primary"
              >
                <span className="h-1.5 w-1.5 bg-primary-foreground" />
                init://project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                data-testid="hero-cta-secondary"
              >
                ./view_services
              </Link>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 border border-border font-mono">
              {[
                ["systems", "12+"],
                ["uptime", "99.9%"],
                ["focus", "core"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="border-r border-border p-3 last:border-r-0"
                  data-testid={`hero-stat-${k}`}
                >
                  <div className="text-lg font-semibold text-primary">{v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {k}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: rotating axis */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />
              <AxisLogo size={420} spin className="hidden md:block max-w-full" />
              <AxisLogo size={260} spin className="md:hidden" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
                  ∎ core
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee tag line */}
        <div className="overflow-hidden border-y border-border bg-card/40 py-3">
          <div className="marquee-track flex gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-12">
                {[
                  "engineering the core of innovation",
                  "built on precision",
                  "powering the axis of technology",
                  "where systems align",
                  "core first // clarity // precision // evolution",
                ].map((t, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center gap-12">
                    <span className="text-primary">◆</span>
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section
        className="border-b border-border py-20 md:py-28"
        data-testid="services-preview"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader index="02" label="services" title="what we engineer" />

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="group relative bg-background p-6 transition-colors hover:bg-card"
                data-testid={`service-card-${s.id}`}
              >
                <div className="flex items-start justify-between font-mono">
                  <div className="text-[11px] uppercase tracking-widest text-primary">
                    /{s.id}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </div>
                </div>
                <h3 className="mt-6 font-mono text-lg text-foreground transition-colors group-hover:text-primary">
                  {s.name}
                </h3>
                <p className="mt-2 font-mono text-sm text-muted-foreground">
                  <span className="text-terminal-green">{">"}</span> {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-border px-5 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              data-testid="services-preview-cta"
            >
              full service matrix →
            </Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-border py-20 md:py-28" data-testid="principles">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader index="03" label="principles" title="how we operate" />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.k}
                className="term-card p-6"
                data-testid={`principle-${p.k}`}
              >
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  0{i + 1}.
                </div>
                <div className="mt-3 font-mono text-base text-primary">
                  {p.k}
                </div>
                <div className="mt-2 font-mono text-sm text-muted-foreground">
                  {p.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden py-20" data-testid="home-cta">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
            // ready when you are
          </div>
          <h2 className="mt-4 font-mono text-3xl text-foreground sm:text-4xl md:text-5xl">
            align your <span className="text-primary glow-text">core</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-mono text-sm text-muted-foreground">
            $ initialize a conversation. we&apos;ll respond on-axis.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 border border-primary bg-primary px-8 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.16_200/0.6)]"
            data-testid="home-cta-button"
          >
            run ./contact <span className="blink-caret" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export function SectionHeader({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span className="text-primary">/{index}</span>
        <span className="h-px flex-1 bg-border" />
        <span className="text-primary">{label}</span>
      </div>
      <h2 className="mt-4 font-mono text-3xl text-foreground md:text-4xl">{title}</h2>
    </div>
  );
}
