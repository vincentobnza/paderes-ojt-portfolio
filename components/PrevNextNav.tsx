"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/navigation";
import { outlineSurface } from "@/lib/outline-surface";
import { cn } from "@/lib/utils";

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function PrevNextNav() {
  const pathname = usePathname();
  const i = NAV_ITEMS.findIndex((item) => item.href === normalizePath(pathname));

  if (i < 0) return null;

  const prev = i > 0 ? NAV_ITEMS[i - 1]! : null;
  const next = i < NAV_ITEMS.length - 1 ? NAV_ITEMS[i + 1]! : null;

  if (!prev && !next) return null;

  const card = cn(
    outlineSurface,
    "block p-4 transition-shadow hover:shadow-[6px_6px_0px_black] bg-neutral-100",
  );

  return (
    <nav
      aria-label="Previous and next page"
      className="mt-12 flex flex-col gap-4 border-t border-black pt-8 sm:flex-row sm:items-stretch sm:justify-between sm:gap-6"
    >
      <div className="min-w-0 flex-1">
        {prev ? (
          <Link href={prev.href} className={card}>
            <span className="text-xs text-neutral-900 font-semibold">Previous</span>
            <span className="mt-1 block font-medium text-neutral-950">{prev.label}</span>
          </Link>
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        {next ? (
          <Link href={next.href} className={cn(card, "sm:text-right")}>
            <span className="text-xs text-neutral-900 font-semibold">Next</span>
            <span className="mt-1 block font-bold tracking-tight text-neutral-950">{next.label}</span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
