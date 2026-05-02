import Navbar from "@/app/Navbar";
import { PrevNextNav } from "@/components/PrevNextNav";
import { Sidebar } from "@/app/Sidebar";
import { OnThisPage } from "@/app/OnThisPage";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-white text-neutral-950">
      <Navbar />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <Sidebar />
        <main
          id="doc-content"
          className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-6 md:border-x md:border-white/10 md:px-8 md:py-10"
        >
          {children}
          <PrevNextNav />
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
