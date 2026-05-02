"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  APPENDIX_LINKS,
  CHAPTER_LINKS,
  NAVBAR_LINKS,
  NAVBAR_TOP_LINKS,
} from "@/lib/navigation";
import { SOCIAL_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

const rowLink = cn(
  "block border-b border-black/10 px-4 py-3 text-sm font-medium tracking-tight text-black",
  "hover:bg-neutral-950/5 active:bg-neutral-950/8",
);

const sectionLabel = "px-4 pb-1 pt-4 text-[10px] font-semibold uppercase text-muted-foreground";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      className="size-5 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      {open ? (
        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
      ) : (
        <>
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function NavbarMobileMenu() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [open, setOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(() =>
    pathname.startsWith("/chapter"),
  );
  const [appendicesOpen, setAppendicesOpen] = useState(() =>
    pathname.startsWith("/appendix"),
  );

  const closeMenu = useCallback(() => setOpen(false), []);

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
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="shrink-0 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <MenuIcon open={open} />
      </Button>

      <DialogContent
        id="mobile-nav-panel"
        aria-describedby={undefined}
        className={cn(
          "left-auto! right-0! top-0! h-dvh max-h-dvh w-[min(100vw,20rem)] max-w-sm translate-x-0 gap-0 border-y-0 border-r-0 p-0",
        )}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-black px-4 py-3">
          <DialogTitle className="text-base font-semibold">Menu</DialogTitle>
          <DialogClose asChild>
            <Button type="button" variant="outline" size="icon" aria-label="Close menu">
              <MenuIcon open />
            </Button>
          </DialogClose>
        </div>
        <DialogDescription className="sr-only">
          Portfolio navigation and links
        </DialogDescription>

        <nav
          aria-label="Mobile navigation"
          className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain pb-6"
        >
          <p className={sectionLabel}>Site</p>
          <ul className="border-b border-black/10">
            {NAVBAR_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={rowLink} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className={sectionLabel}>Documents</p>
          <Collapsible
            className="group"
            open={chaptersOpen}
            onOpenChange={setChaptersOpen}
          >
            <CollapsibleTrigger
              type="button"
              className={cn(
                "flex w-full items-center justify-between border-b border-black/10 px-4 py-3 text-left text-sm font-medium text-black",
                "hover:bg-neutral-950/5",
              )}
            >
              Chapters
              <svg
                aria-hidden
                className="size-4 shrink-0 text-neutral-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="border-b border-black/10 bg-neutral-50/80">
                {CHAPTER_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(rowLink, "pl-6 text-[13px]")}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            className="group"
            open={appendicesOpen}
            onOpenChange={setAppendicesOpen}
          >
            <CollapsibleTrigger
              type="button"
              className={cn(
                "flex w-full items-center justify-between border-b border-black/10 px-4 py-3 text-left text-sm font-medium text-black",
                "hover:bg-neutral-950/5",
              )}
            >
              Appendices
              <svg
                aria-hidden
                className="size-4 shrink-0 text-neutral-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="max-h-48 overflow-y-auto border-b border-black/10 bg-neutral-50/80">
                {APPENDIX_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(rowLink, "pl-6 text-[13px]")}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <p className={sectionLabel}>Files</p>
          <ul className="border-b border-black/10">
            {NAVBAR_TOP_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <p className={cn(sectionLabel, "pt-2")}>Social</p>
          <div className="flex flex-wrap gap-2 px-4 pb-2">
            {SOCIAL_LINKS.map((item) => (
              <Button key={item.label} asChild variant="outline" size="icon">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  onClick={closeMenu}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                    unoptimized
                  />
                </a>
              </Button>
            ))}
          </div>
        </nav>
      </DialogContent>
    </Dialog>
  );
}
