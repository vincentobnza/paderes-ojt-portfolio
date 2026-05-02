import { ImageAlbum } from "@/components/ImageAlbum";
import { APPENDIX_TITLES } from "@/lib/appendix-titles";
import { FALLBACK_IMAGE_SRC } from "@/lib/fallback-image";
import type { AppendixLetter } from "@/lib/navigation";

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
    </>
  );
}
