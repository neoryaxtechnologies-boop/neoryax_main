import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "./index";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — NeoRyax" },
      {
        name: "description",
        content:
          "NeoRyax case studies — engineered systems, soon to be published. Currently aligning the first cohort.",
      },
      { property: "og:title", content: "Case Studies — NeoRyax" },
      {
        property: "og:description",
        content: "Soon: real systems, real outcomes. The axis is being calibrated.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <Layout>
      <section className="border-b border-border py-16 md:py-24" data-testid="case-studies-hero">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="text-terminal-green">$</span> ls case-studies/
          </div>
          <h1 className="mt-4 font-mono text-4xl text-foreground md:text-5xl lg:text-6xl">
            case<span className="text-primary">-</span>studies<span className="text-primary">/</span>
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm text-muted-foreground md:text-base">
            <span className="text-terminal-green">{"//"}</span> a curated record of systems we&apos;ve
            aligned. transparent metrics. real outcomes.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28" data-testid="case-studies-empty">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader index="01" label="status" title="cohort_00 — calibrating" />

          {/* Empty terminal window */}
          <div className="term-card mt-12" data-testid="terminal-window">
            <div className="flex items-center justify-between border-b border-border bg-card/60 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-terminal-red" />
                <span className="h-2.5 w-2.5 rounded-full bg-terminal-amber" />
                <span className="h-2.5 w-2.5 rounded-full bg-terminal-green" />
                <span className="ml-3">/neoryax/case-studies</span>
              </div>
              <span className="text-primary">tty.0</span>
            </div>

            <div className="bg-background/60 p-6 font-mono text-sm leading-relaxed md:p-8">
              <div>
                <span className="text-terminal-green">neoryax@core</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~/case-studies</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">ls -la</span>
              </div>

              <div className="mt-4 text-muted-foreground">
                total 0
              </div>
              <div className="text-muted-foreground">drwxr-xr-x &nbsp; 2 core core 0 .</div>
              <div className="text-muted-foreground">drwxr-xr-x &nbsp; 4 core core 0 ..</div>

              <div className="mt-6">
                <span className="text-terminal-green">neoryax@core</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~/case-studies</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">cat README.md</span>
              </div>

              <div className="mt-3 border-l-2 border-primary pl-4 text-foreground">
                <p>
                  <span className="text-primary"># status</span>
                </p>
                <p className="mt-2 text-muted-foreground">
                  No projects published — <span className="text-terminal-amber">yet</span>.
                </p>
                <p className="mt-3 text-muted-foreground">
                  NeoRyax is currently aligning its first cohort of partners. Case studies will be
                  published once outcomes are measured and verified — no vanity metrics, no smoke.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Want to be the first?
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="text-terminal-green">neoryax@core</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~/case-studies</span>
                <span className="text-muted-foreground">$</span>
                <span className="blink-caret" />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.16_200/0.6)]"
              data-testid="case-studies-cta-contact"
            >
              become cohort_00 →
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              data-testid="case-studies-cta-services"
            >
              explore services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
