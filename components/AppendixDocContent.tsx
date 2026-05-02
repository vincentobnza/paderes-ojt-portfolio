import Link from "next/link";
import { AppendixPdfViewer } from "@/components/AppendixPdfViewer";
import { ImageAlbum } from "@/components/ImageAlbum";
import { APPENDIX_MEDIA } from "@/lib/appendix-assets";
import { APPENDIX_TITLES } from "@/lib/appendix-titles";
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
  const media = APPENDIX_MEDIA[letter];
  const hasPdfs = media.pdfs.length > 0;
  const hasImages = media.images.length > 0;
  const empty = !hasPdfs && !hasImages;

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

        <div className="flex flex-col gap-8">
          {media.pdfs.map((src, i) => (
            <AppendixPdfViewer
              key={src}
              src={src}
              label={
                media.pdfs.length > 1 ? `${title} (${i + 1})` : title
              }
            />
          ))}
          {hasImages ? <ImageAlbum slides={[...media.images]} /> : null}
          {empty ? (
            <p
              className={cn(
                outlineSurface,
                "px-4 py-6 text-sm leading-relaxed text-black/70",
              )}
            >
              No PDF or image files are configured for this appendix yet. Add
              assets under{" "}
              <code className="rounded-none bg-neutral-100 px-1 font-mono text-xs text-black">
                public/appendix_{letter.toLowerCase()}
              </code>{" "}
              and register them in{" "}
              <code className="rounded-none bg-neutral-100 px-1 font-mono text-xs text-black">
                lib/appendix-assets.ts
              </code>
              .
            </p>
          ) : null}
        </div>
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
