import { ImageAlbum } from "@/components/ImageAlbum";
import { FALLBACK_IMAGE_SRC } from "@/lib/fallback-image";

const SLIDES = [
  "Weekly accomplishment report",
  "Daily Time Record",
  "Internship Progress Report",
  "Internship Analysis Report",
] as const;

export function Chapter3Content() {
  const slides = SLIDES.map((title) => ({
    src: FALLBACK_IMAGE_SRC,
    alt: title,
    caption: title,
  }));

  return (
    <>
      <h1 className="mb-10 border-b border-black/10 pb-10 text-balance text-3xl font-semibold text-black sm:text-4xl">
        Chapter 3
      </h1>

      <p className="mb-8 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
        Weekly and internship documents. Thumbnails use a placeholder until scans are
        added to{" "}
        <code className="rounded bg-black/[0.06] px-1.5 py-0.5 text-sm">
          public/
        </code>
        . Click any image to open the album; use arrows or keyboard to move between
        pages.
      </p>

      <section aria-labelledby="ch3-docs-heading">
        <h2
          id="ch3-docs-heading"
          className="mb-6 text-xl font-semibold text-black sm:text-2xl"
        >
          Weekly accomplishment report &amp; related documents
        </h2>
        <ImageAlbum slides={slides} />
      </section>
    </>
  );
}
