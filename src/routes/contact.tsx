import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "./index";
import { useState, FormEvent } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NeoRyax" },
      {
        name: "description",
        content:
          "Initialize a project with NeoRyax. We respond on-axis. Tell us about your system and we'll align.",
      },
      { property: "og:title", content: "Contact — NeoRyax" },
      {
        property: "og:description",
        content: "init://project — tell us what you're building.",
      },
    ],
  }),
  component: ContactPage,
});

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile Applications",
  "Payment Integration",
  "Custom Software",
  "Cloud & DevOps",
  "UI/UX Design",
  "Other",
];

const InquirySchema = z.object({
  name: z.string().trim().min(1, "name required").max(100),
  email: z.string().trim().email("invalid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().min(1, "select a service"),
  message: z.string().trim().min(10, "min 10 chars").max(2000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = InquirySchema.safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "invalid input");
      setStatus("error");
      return;
    }

    const webhook = import.meta.env.VITE_SHEETS_WEBHOOK_URL as string | undefined;
    if (!webhook) {
      setError("webhook not configured");
      setStatus("error");
      return;
    }

    try {
      const honeypot = String(formData.get("website") ?? "");
      const res = await fetch(webhook, {
        method: "POST",
        // text/plain avoids a CORS preflight; Apps Script reads the body as-is.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...parsed.data, website: honeypot }),
      });
      const result = (await res.json().catch(() => ({ ok: false }))) as {
        ok: boolean;
        error?: string;
      };
      if (!result.ok) {
        setError(result.error ?? "transmission failed");
        setStatus("error");
        return;
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("network error — try again");
      setStatus("error");
    }
  }

  return (
    <Layout>
      <section className="border-b border-border py-16 md:py-24" data-testid="contact-hero">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="text-terminal-green">$</span> ./init project.sh
          </div>
          <h1 className="mt-4 font-mono text-4xl text-foreground md:text-5xl lg:text-6xl">
            init<span className="text-primary">://</span>contact
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm text-muted-foreground md:text-base">
            <span className="text-terminal-green">{"//"}</span> tell us about the system you&apos;re
            building. we respond on-axis, usually within 48h.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="contact-form-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1fr_2fr] md:px-8">
          {/* Left: signal info */}
          <div>
            <SectionHeader index="01" label="signal" title="reach the core" />
            <div className="mt-8 space-y-6 font-mono text-sm">
              <div className="term-card p-5" data-testid="signal-email">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  // primary
                </div>
                <a
                  href="mailto:neoryaxtechnologies@gmail.com"
                  className="mt-2 block break-all text-primary transition-colors hover:underline"
                >
                  neoryaxtechnologies@gmail.com
                </a>
              </div>
              <div className="term-card p-5" data-testid="signal-status">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  // status
                </div>
                <div className="mt-2 flex items-center gap-2 text-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse bg-terminal-green" />
                  axis online — accepting projects
                </div>
              </div>
              <div className="term-card p-5" data-testid="signal-response">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  // response time
                </div>
                <div className="mt-2 text-foreground">~24–48h on weekdays</div>
              </div>

            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="term-card p-6 md:p-8"
            data-testid="contact-form"
          >
            <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[11px] uppercase tracking-widest">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-terminal-red" />
                <span className="h-2 w-2 rounded-full bg-terminal-amber" />
                <span className="h-2 w-2 rounded-full bg-terminal-green" />
                <span className="ml-2">project_brief.form</span>
              </div>
              <span className="text-primary">tx://outbound</span>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field label="name" name="name" placeholder="ada lovelace" testId="field-name" required />
              <Field
                label="email"
                name="email"
                type="email"
                placeholder="ada@core.io"
                testId="field-email"
                required
              />
              <Field
                label="company"
                name="company"
                placeholder="optional"
                testId="field-company"
              />
              <SelectField
                label="service"
                name="service"
                options={SERVICE_OPTIONS}
                testId="field-service"
                required
              />
            </div>

            <div className="mt-5">
              <Label name="message">message</Label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="$ describe the system, the constraints, the desired outcome..."
                className="w-full border border-border bg-input px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                data-testid="field-message"
              />
            </div>

            {/* Honeypot — hidden from humans, bots fill it and get dropped. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            {status === "error" && error && (
              <div
                className="mt-4 border border-destructive bg-destructive/10 px-3 py-2 font-mono text-xs text-destructive"
                data-testid="form-error"
              >
                <span className="text-terminal-red">!</span> {error}
              </div>
            )}

            {status === "success" && (
              <div
                className="mt-4 border border-primary bg-primary/10 px-3 py-2 font-mono text-xs text-primary"
                data-testid="form-success"
              >
                <span className="text-terminal-green">{"✓"}</span> signal received. we&apos;ll respond
                on-axis within 48h.
              </div>
            )}

            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                $ encrypted in-transit
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-3 border border-primary bg-primary px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.16_200/0.6)] disabled:cursor-not-allowed disabled:opacity-50"
                data-testid="form-submit"
              >
                {status === "submitting" ? (
                  <>transmitting<span className="blink-caret" /></>
                ) : (
                  <>transmit signal →</>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Label({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={name}
      className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
    >
      <span className="text-primary">/</span> {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  testId,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  testId: string;
}) {
  return (
    <div>
      <Label name={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-border bg-input px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        data-testid={testId}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  testId,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  testId: string;
}) {
  return (
    <div>
      <Label name={name}>{label}</Label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full border border-border bg-input px-3 py-2.5 font-mono text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        data-testid={testId}
      >
        <option value="" disabled>
          -- select --
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
