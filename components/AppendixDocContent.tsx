import Link from "next/link";
import { ImageAlbum } from "@/components/ImageAlbum";
import { APPENDIX_TITLES } from "@/lib/appendix-titles";
import { FALLBACK_IMAGE_SRC } from "@/lib/fallback-image";
import { outlineSurface } from "@/lib/outline-surface";
import { APPENDIX_LINKS, type AppendixLetter } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const shortcutLinkClass = cn(
  "block px-3 py-2.5 text-sm text-black transition-colors font-medium tracking-tight",
  "hover:bg-neutral-950/5 hover:text-black",
  "focus-visible:bg-neutral-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black/15",
);

export function AppendixDocContent({ letter }: { letter: AppendixLetter }) {
  const title = APPENDIX_TITLES[letter];
  const headingId = `appendix-${letter}-title`;

  return (
    <>
      <h1 className="mb-10 border-b border-black/10 pb-10 text-balance text-3xl font-semibold text-black sm:text-4xl">
        Appendix {letter}
      </h1>

      <section aria-labelledby={headingId}>
        <h2
          id={headingId}
          className="mb-6 text-xl font-semibold leading-snug text-black sm:text-2xl"
        >
          {title}
        </h2>
        <ImageAlbum
          slides={[
            {
              src: FALLBACK_IMAGE_SRC,
              alt: title,
              caption: title,
            },
          ]}
        />
      </section>

      <nav
        aria-labelledby="appendix-shortcuts-heading"
        className="mt-12 border-t border-black/10 pt-6"
      >
        <h2
          id="appendix-shortcuts-heading"
          className="mb-4 text-lg font-semibold tracking-tight text-black"
        >
          All appendices
        </h2>
        <ul
          className={cn(outlineSurface, "divide-y divide-black overflow-hidden")}
        >
          {APPENDIX_LINKS.map((item) => {
            const active = item.label === `Appendix ${letter}`;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(shortcutLinkClass, active && "bg-neutral-950/6")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
