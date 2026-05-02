import { ImageAlbum } from "@/components/ImageAlbum";
import { FALLBACK_IMAGE_SRC } from "@/lib/fallback-image";

const TITLE = "Student Internship Evaluation Form";

export function Chapter4Content() {
  return (
    <>
      <h1 className="mb-10 border-b border-black/10 pb-10 text-balance text-3xl font-semibold text-black sm:text-4xl">
        Chapter 4
      </h1>

      <p className="mb-8 text-base leading-relaxed text-black sm:text-[17px] sm:leading-[1.75]">
        Evaluation form (placeholder image until the scanned form is available).
      </p>

      <section aria-labelledby="ch4-eval-heading">
        <h2
          id="ch4-eval-heading"
          className="mb-6 text-xl font-semibold text-black sm:text-2xl"
        >
          {TITLE}
        </h2>
        <ImageAlbum
          slides={[
            {
              src: FALLBACK_IMAGE_SRC,
              alt: TITLE,
              caption: TITLE,
            },
          ]}
        />
      </section>
    </>
  );
}
