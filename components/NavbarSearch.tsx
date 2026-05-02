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
import { NAV_ITEMS } from "@/lib/navigation";
import type { NavHref } from "@/lib/navigation";
import { outlineSurface, outlineSurfaceInput } from "@/lib/outline-surface";
import { cn } from "@/lib/utils";

const MAX_RESULTS = 12;

export function NavbarSearch({ className }: { className?: string }) {
  const router = useRouter();
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return NAV_ITEMS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.href.toLowerCase().includes(q),
    ).slice(0, MAX_RESULTS);
  }, [query]);

  const showList = open && query.trim().length > 0;

  const go = useCallback(
    (href: NavHref) => {
      router.push(href);
      setQuery("");
      setOpen(false);
      setActive(0);
    },
    [router],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(0);
  }, [filtered.length, query]);

  return (
    <div className={cn("relative", className)}>
      <label htmlFor={id} className="sr-only">
        Search pages
      </label>
      <div className="relative flex items-center">
        <svg
          aria-hidden
          className="pointer-events-none absolute left-2 size-3.5 text-black"
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
        <input
          ref={inputRef}
          id={id}
          type="search"
          value={query}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Search…"
          className={cn(
            outlineSurfaceInput,
            "box-border h-8 w-[min(100%,11rem)] py-0 pl-8 pr-14 text-xs font-medium leading-none tracking-tight text-black",
            "placeholder:text-black/50",
            "sm:h-9 sm:w-44 lg:w-52",
          )}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            window.setTimeout(() => setOpen(false), 120);
          }}
          onKeyDown={(e) => {
            if (!showList || filtered.length === 0) return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => (i + 1) % filtered.length);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => (i - 1 + filtered.length) % filtered.length);
            } else if (e.key === "Enter") {
              e.preventDefault();
              go(filtered[active]!.href);
            } else if (e.key === "Escape") {
              setOpen(false);
              inputRef.current?.blur();
            }
          }}
        />
        <kbd
          className="pointer-events-none absolute right-1.5 hidden h-5 select-none items-center rounded-none border border-black bg-white px-1 font-mono text-[10px] tracking-tight text-black shadow-[2px_2px_0px_black] sm:inline-flex"
          aria-hidden
          title="Ctrl K"
        >
          ⌘K
        </kbd>
      </div>
      {showList && (
        <ul
          role="listbox"
          className={cn(
            outlineSurface,
            "absolute right-0 top-full z-50 mt-1 max-h-72 min-w-full overflow-y-auto py-0.5",
          )}
        >
          {filtered.length === 0 ? (
            <li className="px-2 py-1.5 text-xs tracking-tight text-black">No matches</li>
          ) : (
            filtered.map((item, i) => (
              <li key={item.href} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center px-2 py-1.5 text-left text-xs tracking-tight text-black",
                    i === active && "bg-neutral-950/5",
                  )}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => go(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
