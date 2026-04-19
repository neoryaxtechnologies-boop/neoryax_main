import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NeoRyax" },
      {
        name: "description",
        content:
          "Web, mobile, payments, custom software, cloud & DevOps, UI/UX. Engineered at the core by NeoRyax.",
      },
      { property: "og:title", content: "Services — NeoRyax" },
      {
        property: "og:description",
        content: "The full service matrix. Built on precision, designed for control.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "01",
    name: "Web Development",
    desc: "Production-grade web apps and marketing sites. SSR, SEO, accessibility, performance budgets — non-negotiable.",
    stack: ["React", "TypeScript", "Next/TanStack", "Tailwind", "Edge"],
  },
  {
    id: "02",
    name: "Mobile Applications",
    desc: "Native-feel iOS and Android apps. Cross-platform where it makes sense, native where it must.",
    stack: ["React Native", "Expo", "Swift", "Kotlin"],
  },
  {
    id: "03",
    name: "Payment Integration",
    desc: "Checkouts that convert. Subscriptions, marketplaces, multi-currency, on-chain settlements.",
    stack: ["Stripe", "Razorpay", "Paddle", "Web3 wallets"],
  },
  {
    id: "04",
    name: "Custom Software",
    desc: "Internal tools, dashboards, automations, AI features. Solving the problem your team actually has.",
    stack: ["Node", "Python", "Postgres", "Workers", "LLMs"],
  },
  {
    id: "05",
    name: "Cloud & DevOps",
    desc: "Infrastructure that scales without surprise. CI/CD, IaC, observability, cost control.",
    stack: ["AWS", "GCP", "Cloudflare", "Terraform", "Docker"],
  },
  {
    id: "06",
    name: "UI/UX Design",
    desc: "Interfaces with intent. Design systems, prototyping, motion, accessibility from day zero.",
    stack: ["Figma", "Design tokens", "Framer", "Prototyping"],
  },
];

const PROCESS = [
  ["align", "scope, constraints, success metrics"],
  ["architect", "core-first design, no surprises"],
  ["assemble", "iterate in small, shipped increments"],
  ["amplify", "observability, optimization, evolution"],
];

function ServicesPage() {
  return (
    <Layout>
      <section className="border-b border-border py-16 md:py-24" data-testid="services-hero">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="text-terminal-green">$</span> cat services.json
          </div>
          <h1 className="mt-4 font-mono text-4xl text-foreground md:text-5xl lg:text-6xl">
            services<span className="text-primary">/</span>
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm text-muted-foreground md:text-base">
            <span className="text-terminal-green">{"//"}</span> six disciplines, one axis. each one
            engineered to be correct at the core.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24" data-testid="services-grid-section">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader index="01" label="matrix" title="what we engineer" />

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                className="group relative bg-background p-8 transition-colors hover:bg-card"
                data-testid={`service-${s.id}`}
              >
                <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-widest">
                  <span className="text-primary">/{s.id}</span>
                  <span className="text-muted-foreground">module</span>
                </div>

                <h2 className="mt-6 font-mono text-2xl text-foreground transition-colors group-hover:text-primary">
                  {s.name}
                </h2>
                <p className="mt-3 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="border border-border bg-card/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      data-testid={`service-${s.id}-stack-${t}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24" data-testid="services-process">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader index="02" label="process" title="how the work moves" />

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {PROCESS.map(([k, v], i) => (
              <div key={k} className="term-card p-6" data-testid={`process-${k}`}>
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  step.0{i + 1}
                </div>
                <div className="mt-3 font-mono text-lg text-primary">{k}</div>
                <p className="mt-2 font-mono text-sm text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="services-cta">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-mono text-3xl text-foreground md:text-4xl">
            need a system that <span className="text-primary glow-text">aligns</span>?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 border border-primary bg-primary px-8 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.16_200/0.6)]"
            data-testid="services-cta-button"
          >
            init://project →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
