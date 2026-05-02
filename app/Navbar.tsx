"use client";

import { NavbarSearch } from "@/components/NavbarSearch";
import { NAVBAR_TOP_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const linkClass = cn(
  "text-sm font-medium text-black tracking-tight transition-colors",
  "hover:text-black",
  "focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
);

export default function Navbar() {
  return (
    <header className="grid h-12 grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-black/10 bg-white px-4 sm:h-14 sm:gap-4 sm:px-6">
      <div className="min-w-0 justify-self-start">
        <span className="truncate text-xs font-semibold tracking-tight text-black sm:text-sm">
          PADERES PORTFOLIO
        </span>
      </div>

      <nav
        aria-label="Quick links"
        className="flex items-center justify-center gap-6 sm:gap-10"
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

      <div className="justify-self-end">
        <NavbarSearch />
      </div>
    </header>
  );
}
