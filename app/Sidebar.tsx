"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  APPENDIX_LINKS,
  CHAPTER_LINKS,
  STATIC_LINKS,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const linkClass = cn(
  "block rounded-md px-3 py-2.5 text-sm text-black active:bg-neutral-950/6 md:py-2 tracking-tight font-medium",
  "md:hover:bg-neutral-950/3 md:hover:text-black",
);

const triggerClass = cn(
  "flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm text-black outline-none md:py-2 tracking-tight font-medium",
  "md:hover:bg-neutral-950/3",
  "focus-visible:ring-2 focus-visible:ring-ring/50",
);

function SubNav({ children }: { children: ReactNode }) {
  return (
    <div className="ml-1 flex flex-col gap-0.5 border-l border-white/10 py-1 pl-2">
      {children}
    </div>
  );
}

function NavGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="px-3 text-[10px] font-semibold uppercase text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  const [chaptersOpen, setChaptersOpen] = useState(
    () => pathname.startsWith("/chapter"),
  );
  const [appendicesOpen, setAppendicesOpen] = useState(
    () => pathname.startsWith("/appendix"),
  );

  useEffect(() => {
    const wasCh = prevPath.current.startsWith("/chapter");
    const isCh = pathname.startsWith("/chapter");
    const wasAp = prevPath.current.startsWith("/appendix");
    const isAp = pathname.startsWith("/appendix");

    if (!wasCh && isCh) setChaptersOpen(true);
    if (wasCh && !isCh) setChaptersOpen(false);

    if (!wasAp && isAp) setAppendicesOpen(true);
    if (wasAp && !isAp) setAppendicesOpen(false);

    prevPath.current = pathname;
  }, [pathname]);

  return (
    <aside className="mt-6 sm:mt-8 hidden min-h-0 w-52 shrink-0 flex-col overflow-hidden border-r border-black/10 md:flex md:flex-col lg:w-56">
      <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto p-3 md:p-4">
        <NavGroup label="Portfolio">
          {STATIC_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </NavGroup>

        <hr
          className="my-5 border-0 border-t border-black/10"
          aria-hidden
        />

        <NavGroup label="Documents">
          <Collapsible
            className="group"
            open={chaptersOpen}
            onOpenChange={setChaptersOpen}
          >
            <CollapsibleTrigger className={triggerClass} type="button">
              Chapters
              <svg
                aria-hidden
                className="ml-auto size-4 shrink-0 text-neutral-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SubNav>
                {CHAPTER_LINKS.map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </SubNav>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            className="group"
            open={appendicesOpen}
            onOpenChange={setAppendicesOpen}
          >
            <CollapsibleTrigger className={triggerClass} type="button">
              Appendices
              <svg
                aria-hidden
                className="ml-auto size-4 shrink-0 text-neutral-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SubNav>
                {APPENDIX_LINKS.map((item) => (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </SubNav>
            </CollapsibleContent>
          </Collapsible>
        </NavGroup>
      </nav>

      <div className="shrink-0 border-t border-black/10 p-3 md:p-4">
        <div className="flex flex-col gap-3 sm:gap-6">
          <Button type="button" variant="outline" size="sm" className="w-full bg-amber-200 font-bold!">
            View PDF File
          </Button>
          <p className="text-center text-xs text-black">All rights reserved
            {" "}
            {new Date().getFullYear()}

          </p>
        </div>
      </div>
    </aside>
  );
}
