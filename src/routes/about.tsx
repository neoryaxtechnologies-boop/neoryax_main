import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { AxisLogo } from "@/components/AxisLogo";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NeoRyax" },
      {
        name: "description",
        content:
          "NeoRyax is the new axis of technology. Read the origin, philosophy, and principles behind systems engineered at the core.",
      },
      { property: "og:title", content: "About — NeoRyax" },
      {
        property: "og:description",
        content:
          "Power is not about size — it's about control. NeoRyax brings order to complexity.",
      },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  { k: "core_first", v: "Build foundation before features." },
  { k: "clarity_over_complexity", v: "Simple systems win." },
  { k: "precision_over_volume", v: "Less but better." },
  { k: "evolution_over_trend", v: "Future-proof thinking." },
];

const TAGLINES = [
  "Engineering the Core of Innovation",
  "Built on Precision",
  "Powering the Axis of Technology",
  "Where Systems Align",
];

function AboutPage() {
  return (
    <Layout>
      {/* Origin hero */}
      <section
        className="axis-bg relative overflow-hidden border-b border-border py-20 md:py-28"
        data-testid="about-hero"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div className="relative z-10">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="text-terminal-green">$</span> cat about/origin.md
            </div>
            <h1 className="mt-4 font-mono text-4xl text-foreground md:text-5xl lg:text-6xl">
              the <span className="text-primary glow-text">axis</span>
              <br />
              behind the system<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
              In every system — software, business, machine — there exists a center.
              An unseen force. An axis that holds everything together.
              <br />
              <br />
              <span className="text-primary">NeoRyax was created for the core.</span>
            </p>
          </div>
          <div className="relative mx-auto">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <AxisLogo size={320} spin />
          </div>
        </div>
      </section>

      {/* Meaning */}
      <section className="border-b border-border py-16 md:py-24" data-testid="about-meaning">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader index="01" label="meaning" title="the name decoded" />

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
            <div className="bg-background p-8" data-testid="meaning-neo">
              <div className="font-mono text-[11px] uppercase tracking-widest text-primary">/neo</div>
              <div className="mt-3 font-mono text-3xl text-foreground">new · evolution · future</div>
              <p className="mt-3 font-mono text-sm text-muted-foreground">
                $ a forward signal. an intent to redefine.
              </p>
            </div>
            <div className="bg-background p-8" data-testid="meaning-ryax">
              <div className="font-mono text-[11px] uppercase tracking-widest text-primary">/ryax</div>
              <div className="mt-3 font-mono text-3xl text-foreground">
                inspired by <span className="text-primary">axis</span>
              </div>
              <p className="mt-3 font-mono text-sm text-muted-foreground">
                $ the central point of control.
              </p>
            </div>
          </div>

          <div className="mt-8 border border-primary bg-primary/5 p-6 text-center">
            <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
              // result
            </div>
            <div className="mt-2 font-mono text-xl text-foreground md:text-2xl">
              NeoRyax = <span className="text-primary glow-text">The New Axis of Technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy + Vision */}
      <section className="border-b border-border py-16 md:py-24" data-testid="about-philosophy">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader index="02" label="philosophy" title="alignment over noise" />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="term-card p-6 md:col-span-2" data-testid="philosophy-card">
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                # philosophy
              </div>
              <p className="mt-3 font-mono text-base leading-relaxed text-foreground">
                Technology today is chaotic — too many tools, too many frameworks, too much noise.
                But real power is not in <span className="text-muted-foreground line-through">more tools</span>.
                It is in <span className="text-primary">alignment</span> and{" "}
                <span className="text-primary">clarity</span>.
              </p>
              <p className="mt-4 font-mono text-sm text-muted-foreground">
                <span className="text-terminal-green">{">"}</span> If the core is strong,
                everything else works.
              </p>
            </article>

            <article className="term-card p-6" data-testid="vision-card">
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                # vision
              </div>
              <ul className="mt-3 space-y-2 font-mono text-sm">
                {["simple", "scalable", "precise"].map((w) => (
                  <li key={w} className="flex items-center gap-2 text-foreground">
                    <span className="text-primary">→</span> {w}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-sm text-muted-foreground">
                Not flashy. Not overcomplicated. Just{" "}
                <span className="text-primary">correct at the core</span>.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-border py-16 md:py-24" data-testid="about-principles">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader index="03" label="principles" title="core operating laws" />
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.k}
                className="bg-background p-6"
                data-testid={`about-principle-${p.k}`}
              >
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  law.0{i + 1}
                </div>
                <div className="mt-3 font-mono text-base text-primary">{p.k}</div>
                <p className="mt-2 font-mono text-sm text-muted-foreground">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity / Taglines */}
      <section className="py-20" data-testid="about-identity">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
            // identity
          </div>
          <p className="mt-4 font-mono text-2xl leading-snug text-foreground md:text-3xl">
            NeoRyax is where <span className="text-primary glow-text">technology</span>
            <br /> finds its <span className="text-primary glow-text">center</span>.
          </p>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {TAGLINES.map((t) => (
              <div
                key={t}
                className="border border-border bg-card/40 px-4 py-3 font-mono text-sm text-muted-foreground"
                data-testid={`tagline-${t.replace(/\W+/g, "-").toLowerCase()}`}
              >
                <span className="text-primary">“</span>
                {t}
                <span className="text-primary">”</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-primary bg-primary px-8 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.16_200/0.6)]"
              data-testid="about-cta-button"
            >
              align with the axis →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
