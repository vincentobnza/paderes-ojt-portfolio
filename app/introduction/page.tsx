import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { INTRO_SHORTCUT_GROUPS } from "@/lib/introduction-shortcuts";
import { outlineSurface } from "@/lib/outline-surface";
import { CONTACT_EMAIL } from "@/lib/site";
import { cn } from "@/lib/utils";

const iconProps = { size: 15, strokeWidth: 1.75 } as const;

const shortcutLinkClass = cn(
  "block px-3 py-2.5 text-sm text-black transition-colors font-medium tracking-tight",
  "hover:bg-neutral-950/5 hover:text-black",
  "focus-visible:bg-neutral-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black/15",
);

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "Vincent Obenza — BS Information Technology. OJT portfolio introduction.",
};

export default function IntroductionPage() {
  return (
    <article className="w-full">
      <header className="mb-12 border-b border-black/10 pb-12">
        <p className="mb-3 text-[11px] font-semibold uppercase text-black">
          Profile
        </p>
        <h1 className="mb-3 text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          Hello, I am John Joseph T. Paderes{" "}
          <span className="inline-block" aria-hidden>
            👋
          </span>
        </h1>
        <p className="text-lg leading-snug text-black tracking-tight sm:text-xl">
          Bachelor of Science in Information Technology
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/80">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={`mailto:${CONTACT_EMAIL}`}>
              Email Me
            </a>
          </Button>
        </div>
      </header>

      <section aria-labelledby="introduction">
        <h2
          id="introduction"
          className="mb-5 text-xl font-semibold tracking-tight text-black sm:text-2xl"
        >
          Introduction
        </h2>
        <p className="text-base leading-relaxed text-black tracking-tight sm:text-[17px] sm:leading-[1.75]">
          This portfolio is created to showcase the skills, knowledge, and various
          projects I have developed throughout my On-the-Job Training (OJT)
          internship. It reflects the experiences, challenges, and learnings I
          gained while working in a professional environment, highlighting my
          growth as an aspiring professional.
        </p>
      </section>

      <nav
        aria-labelledby="shortcuts-heading"
        className="mt-8 border-t border-black/10 pt-6"
      >
        <h2
          id="shortcuts-heading"
          className="mb-4 text-lg font-semibold tracking-tight text-black"
        >
          Shortcuts
        </h2>
        <div className="space-y-5">
          {INTRO_SHORTCUT_GROUPS.map((group) => (
            <div key={group.title ?? "main"}>
              {group.title ? (
                <h3 className="mb-2 text-xs sm:text-sm font-semibold uppercase text-black">
                  {group.title}
                </h3>
              ) : null}
              <ul
                className={cn(outlineSurface, "divide-y divide-black overflow-hidden")}
              >
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={shortcutLinkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </article>
  );
}
