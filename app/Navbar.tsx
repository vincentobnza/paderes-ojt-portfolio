"use client";

import Image from "next/image";
import { NavbarSearch } from "@/components/NavbarSearch";
import { Button } from "@/components/ui/button";
import { NAVBAR_TOP_LINKS } from "@/lib/navigation";
import { SOCIAL_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkClass = cn(
  "text-sm font-medium text-black tracking-tight transition-colors",
  "hover:text-black",
  "focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
);

export default function Navbar() {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-black/10 bg-white px-4 sm:h-14 sm:gap-4 sm:px-6">
      <div className="min-w-0 flex items-center gap-20">
        <span className="truncate text-xs font-semibold tracking-tight text-black sm:text-sm">
          PADERES PORTFOLIO
        </span>

        <nav
          aria-label="Quick links"
          className="flex items-center justify-center gap-2 sm:gap-6"
        >
          {NAVBAR_TOP_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-6 lg:gap-10">
        <NavbarSearch />
        <nav aria-label="Social profiles" className="flex items-center gap-2">
          {SOCIAL_LINKS.map((item) => (
            <Button key={item.label} asChild variant="outline" size="icon" className="rounded-lg shadow-[2px_2px_0px_black]">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 grayscale hover:grayscale-0"
                  unoptimized
                />
              </a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
