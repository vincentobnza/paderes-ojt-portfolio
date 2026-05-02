"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { outlineSurface } from "@/lib/outline-surface";
import { cn } from "@/lib/utils";

type Heading = { id: string; text: string; level: number };

function collectHeadings(root: HTMLElement): Heading[] {
  const nodes = root.querySelectorAll("h2, h3");
  const next: Heading[] = [];
  nodes.forEach((el, i) => {
    const tag = el.tagName.toLowerCase();
    const level = tag === "h2" ? 2 : 3;
    let id = el.id;
    if (!id) {
      id =
        el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") ?? `heading-${i}`;
      el.id = id;
    }
    next.push({ id, text: el.textContent ?? "", level });
  });
  return next;
}

function scrollHeadingIntoView(id: string) {
  const root = document.getElementById("doc-content");
  const el = document.getElementById(id);
  if (!root || !el) return;
  const offset = 16;
  const top =
    el.getBoundingClientRect().top -
    root.getBoundingClientRect().top +
    root.scrollTop -
    offset;
  root.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function OnThisPage() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const root = document.getElementById("doc-content");
    if (!root) return;

    let obs: IntersectionObserver | undefined;
    let cancelled = false;

    const setup = () => {
      obs?.disconnect();

      const next = collectHeadings(root);
      setHeadings(next);

      if (next.length === 0) {
        setActive(null);
        return;
      }

      obs = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length === 0) return;
          visible.sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );
          const id = visible[0]?.target.id;
          if (id) setActive(id);
        },
        {
          root,
          rootMargin: "-48px 0px -45% 0px",
          threshold: [0, 0.1, 1],
        },
      );

      root.querySelectorAll("h2, h3").forEach((n) => obs!.observe(n));
    };

    setup();

    const raf = requestAnimationFrame(() => {
      if (!cancelled) setup();
    });

    const t = window.setTimeout(() => {
      if (!cancelled && collectHeadings(root).length === 0) setup();
    }, 50);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      obs?.disconnect();
    };
  }, [pathname]);

  if (headings.length === 0) {
    return (
      <div className={cn(outlineSurface, "overflow-hidden")}>
        <div className="border-b border-black/10 bg-black/2 px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-tight text-black">
            On this page
          </p>
        </div>
        <div className="px-3 py-6 text-center">
          <p className="text-xs leading-relaxed text-black">
            No headings on this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(outlineSurface, "overflow-hidden")}>
      <div className="border-b border-black/10 bg-black/2 px-3 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-tight text-black">
          On this page
        </p>
      </div>
      <nav
        aria-label="Table of contents for this page"
        className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-y-contain p-2"
      >
        <ul className="space-y-0.5">
          {headings.map((h) => {
            const isActive = active === h.id;
            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={cn(
                    "block rounded-none border-l-2 py-1.5 pr-2 text-[13px] leading-snug tracking-tight transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                    h.level === 3
                      ? "ml-2 pl-2.5 text-[12px]"
                      : "pl-2.5",
                    "border-transparent text-black hover:border-black/25 hover:bg-black/3",
                    isActive &&
                    "border-black bg-black/6 font-semibold hover:border-black",
                  )}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollHeadingIntoView(h.id);
                    history.replaceState(null, "", `#${h.id}`);
                  }}
                >
                  {h.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
