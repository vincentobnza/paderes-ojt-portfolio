"use client";

import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/navigation";
import type { NavHref } from "@/lib/navigation";
import { outlineSurface, outlineSurfaceInput } from "@/lib/outline-surface";
import { cn } from "@/lib/utils";

const MAX_RESULTS = 12;

function SearchGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NavbarSearch({ className }: { className?: string }) {
  const router = useRouter();
  const navInputId = useId();
  const modalInputId = useId();
  const modalInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const displayed = useMemo(() => {
    const q = query.trim().toLowerCase();
    const items = q
      ? NAV_ITEMS.filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          item.href.toLowerCase().includes(q),
      )
      : NAV_ITEMS;
    return items.slice(0, MAX_RESULTS);
  }, [query]);

  const go = useCallback(
    (href: NavHref) => {
      router.push(href);
      setQuery("");
      setActive(0);
      setOpen(false);
    },
    [router],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (o) {
            setQuery("");
            setActive(0);
            return false;
          }
          return true;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const id = window.requestAnimationFrame(() => modalInputRef.current?.focus());
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  const activeIdx =
    displayed.length === 0 ? 0 : Math.min(active, displayed.length - 1);

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (!next) {
      setQuery("");
      setActive(0);
    }
  }, []);

  const syncQuery = useCallback((value: string) => {
    setQuery(value);
    setActive(0);
    setOpen(true);
  }, []);

  return (
    <div className={cn("hidden sm:block relative", className)}>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <label htmlFor={navInputId} className="sr-only">
          Search pages
        </label>
        <div className="relative flex items-center">
          <SearchGlyph className="pointer-events-none absolute left-2 size-3.5 text-black" />
          <input
            id={navInputId}
            type="search"
            value={query}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="Search…"
            aria-controls={open ? "site-search-panel" : undefined}
            className={cn(
              outlineSurfaceInput,
              "box-border h-8 sm:h-9! w-[min(100%,12rem)] py-0 pl-8 pr-14 text-xs font-medium leading-none tracking-tight text-black",
              "placeholder:text-black/50",
              "sm:h-10 w-full sm:w-60 lg:w-80",
            )}
            onChange={(e) => syncQuery(e.target.value)}
            onFocus={() => setOpen(true)}
          />
          <kbd
            className="pointer-events-none absolute right-1.5 hidden h-5 select-none items-center rounded-none border border-black bg-white px-1 font-mono text-[10px] tracking-tight text-black shadow-[2px_2px_0px_black] sm:inline-flex"
            aria-hidden
            title="Ctrl K"
          >
            ⌘K
          </kbd>
        </div>

        <DialogContent
          id="site-search-panel"
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="left-1/2 top-0 h-dvh max-h-dvh w-full max-w-3xl -translate-x-1/2"
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-black px-4 py-3">
            <DialogTitle className="text-base sm:text-lg">Search pages</DialogTitle>
            <DialogClose asChild>
              <Button type="button" variant="outline" size="icon" aria-label="Close search">
                <svg
                  aria-hidden
                  className="size-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </Button>
            </DialogClose>
          </div>
          <DialogDescription className="sr-only">
            Filter portfolio pages by name or path. Use arrows and Enter to open a page.
          </DialogDescription>

          <div className="flex min-h-0 flex-1 flex-col gap-3 p-4">
            <label htmlFor={modalInputId} className="sr-only">
              Filter pages
            </label>
            <div className="relative shrink-0">
              <SearchGlyph className="pointer-events-none absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-black" />
              <input
                ref={modalInputRef}
                id={modalInputId}
                type="search"
                value={query}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                placeholder="Search pages…"
                className={cn(
                  outlineSurfaceInput,
                  "box-border h-10 w-full py-0 pl-8 pr-14 text-sm font-medium leading-none tracking-tight text-black",
                  "placeholder:text-black/50",
                )}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (displayed.length === 0) return;
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((prev) => {
                      const len = displayed.length;
                      const cur = Math.min(prev, len - 1);
                      return (cur + 1) % len;
                    });
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((prev) => {
                      const len = displayed.length;
                      const cur = Math.min(prev, len - 1);
                      return (cur - 1 + len) % len;
                    });
                  } else if (e.key === "Enter") {
                    e.preventDefault();
                    const item = displayed[activeIdx];
                    if (item) go(item.href);
                  }
                }}
              />
              <kbd
                className="pointer-events-none absolute right-2 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center rounded-none border border-black bg-white px-1 font-mono text-[10px] tracking-tight text-black shadow-[2px_2px_0px_black] sm:inline-flex"
                aria-hidden
              >
                ⌘K
              </kbd>
            </div>

            <ul
              role="listbox"
              aria-label="Matching pages"
              className={cn(
                outlineSurface,
                "min-h-0 flex-1 overflow-y-auto py-0.5",
              )}
            >
              {displayed.length === 0 ? (
                <li className="px-3 py-3 text-sm tracking-tight text-black/70">
                  No matches
                </li>
              ) : (
                displayed.map((item, i) => (
                  <li key={item.href} role="option" aria-selected={i === activeIdx}>
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-center px-3 py-2.5 text-left text-sm tracking-tight text-black",
                        i === activeIdx && "bg-neutral-950/5",
                      )}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => go(item.href)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
