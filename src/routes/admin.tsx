import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState, FormEvent } from "react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — NeoRyax" },
      { name: "description", content: "NeoRyax internal admin terminal." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleAuth(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const key = String(fd.get("key") ?? "");
    if (!key) {
      setError("admin key required");
      return;
    }
    // Backend not wired — UI-only. Any non-empty key reveals the placeholder console.
    setError(null);
    setUnlocked(true);
  }

  return (
    <Layout>
      <section className="border-b border-border py-16 md:py-20" data-testid="admin-hero">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="text-terminal-green">$</span> sudo ./access core
          </div>
          <h1 className="mt-3 font-mono text-3xl text-foreground md:text-4xl lg:text-5xl">
            admin<span className="text-primary">://</span>console
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="admin-section">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          {!unlocked ? (
            <form
              onSubmit={handleAuth}
              className="term-card p-6 md:p-8"
              data-testid="admin-auth-form"
            >
              <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-terminal-red" />
                  <span className="h-2 w-2 rounded-full bg-terminal-amber" />
                  <span className="h-2 w-2 rounded-full bg-terminal-green" />
                  <span className="ml-2">auth.required</span>
                </div>
                <span className="text-primary">tty.admin</span>
              </div>

              <div className="mt-6 font-mono text-sm">
                <div>
                  <span className="text-terminal-green">root@neoryax</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-primary">~</span>
                  <span className="text-muted-foreground">$ </span>
                  enter admin key
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="key"
                    className="mb-1.5 block text-[11px] uppercase tracking-widest text-muted-foreground"
                  >
                    <span className="text-primary">/</span> admin_key
                  </label>
                  <input
                    id="key"
                    name="key"
                    type="password"
                    autoFocus
                    placeholder="••••••••••••"
                    className="w-full border border-border bg-input px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    data-testid="admin-key-input"
                  />
                </div>

                {error && (
                  <div
                    className="mt-3 border border-destructive bg-destructive/10 px-3 py-2 text-xs text-destructive"
                    data-testid="admin-auth-error"
                  >
                    <span className="text-terminal-red">!</span> {error}
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span className="text-terminal-amber">!</span> backend pending
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-2 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.16_200/0.6)]"
                    data-testid="admin-auth-submit"
                  >
                    authenticate →
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="term-card p-6 md:p-8" data-testid="admin-console">
              <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <div className="flex items-center gap-2 text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse bg-terminal-green" />
                  session::active
                </div>
                <button
                  type="button"
                  onClick={() => setUnlocked(false)}
                  className="text-muted-foreground hover:text-primary"
                  data-testid="admin-logout"
                >
                  logout →
                </button>
              </div>

              <div className="mt-6 font-mono text-sm">
                <div className="text-foreground">
                  <span className="text-terminal-green">root@neoryax</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-primary">~/inquiries</span>
                  <span className="text-muted-foreground">$ </span>
                  list
                </div>

                <div className="mt-6 border border-border bg-background/60 p-6 text-center">
                  <div className="text-[11px] uppercase tracking-widest text-terminal-amber">
                    // module pending
                  </div>
                  <div className="mt-3 text-base text-foreground">
                    inquiry storage not connected
                  </div>
                  <p className="mt-3 mx-auto max-w-md text-xs text-muted-foreground">
                    this admin view is UI-only. connect a backend to wire up the inquiries
                    table, validation, and CRUD endpoints (list / view / delete) gated by an{" "}
                    <span className="text-primary">ADMIN_KEY</span> secret.
                  </p>
                </div>

                <div className="mt-4 grid gap-px border border-border bg-border md:grid-cols-3">
                  {["list", "view", "delete"].map((m) => (
                    <div
                      key={m}
                      className="bg-background p-4"
                      data-testid={`admin-module-${m}`}
                    >
                      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                        // module
                      </div>
                      <div className="mt-2 text-primary">inquiries.{m}()</div>
                      <div className="mt-1 text-[11px] uppercase tracking-widest text-terminal-red">
                        offline
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <span className="text-terminal-green">root@neoryax</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-primary">~/inquiries</span>
                  <span className="text-muted-foreground">$</span>
                  <span className="blink-caret" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
