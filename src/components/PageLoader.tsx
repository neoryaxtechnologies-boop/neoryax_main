import { useEffect, useState } from "react";

const DURATION_MS = 2000;

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeAt = setTimeout(() => setFading(true), DURATION_MS - 300);
    const hideAt = setTimeout(() => setVisible(false), DURATION_MS);
    return () => {
      clearTimeout(fadeAt);
      clearTimeout(hideAt);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      data-testid="page-loader"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-3xl" />
          <img
            src="/loader.png"
            alt=""
            width={320}
            height={320}
            className="h-48 w-48 object-contain sm:h-60 sm:w-60 md:h-72 md:w-72"
          />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-terminal-green">$</span> booting axis…
          </div>

          <div className="h-[2px] w-56 overflow-hidden bg-border md:w-72">
            <div
              className="h-full bg-primary"
              style={{
                width: "100%",
                animation: `loader-progress ${DURATION_MS}ms linear forwards`,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loader-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
