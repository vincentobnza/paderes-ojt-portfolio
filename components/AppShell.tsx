import Navbar from "@/app/Navbar";
import { PrevNextNav } from "@/components/PrevNextNav";
import { Sidebar } from "@/app/Sidebar";
import { OnThisPage } from "@/app/OnThisPage";
import { cn } from "@/lib/utils";

function FadingRail({
  side,
  step,
  emphasis,
}: {
  side: "left" | "right";
  step: "0" | "1" | "2";
  emphasis: "strong" | "mid" | "soft";
}) {
  const via =
    emphasis === "strong"
      ? "via-black/22"
      : emphasis === "mid"
        ? "via-black/15"
        : "via-black/10";
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-0 h-full w-px bg-linear-to-b from-transparent to-transparent",
        via,
        side === "left" && step === "0" && "left-0",
        side === "left" && step === "1" && "left-1",
        side === "left" && step === "2" && "left-2",
        side === "right" && step === "0" && "right-0",
        side === "right" && step === "1" && "right-1",
        side === "right" && step === "2" && "right-2",
      )}
    />
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-white text-neutral-950">
      <Navbar />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <Sidebar />
        <main
          id="doc-content"
          className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-y-contain"
        >
          <div className="relative mx-auto min-h-full w-full max-w-2xl px-4 py-6 md:px-8 md:py-10">
            <FadingRail side="left" step="0" emphasis="strong" />
            <FadingRail side="left" step="1" emphasis="mid" />
            <FadingRail side="left" step="2" emphasis="soft" />
            <FadingRail side="right" step="0" emphasis="strong" />
            <FadingRail side="right" step="1" emphasis="mid" />
            <FadingRail side="right" step="2" emphasis="soft" />
            {children}
            <PrevNextNav />
          </div>
        </main>
        <aside className="hidden min-h-0 w-[220px] shrink-0 overflow-hidden border-l border-white/10 xl:block">
          <div className="sticky top-12 py-6 pr-3 sm:top-14 md:py-10 md:pr-4">
            <OnThisPage />
          </div>
        </aside>
      </div>
    </div>
  );
}
