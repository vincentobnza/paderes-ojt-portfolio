"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  FALLBACK_IMAGE_HEIGHT,
  FALLBACK_IMAGE_SRC,
  FALLBACK_IMAGE_WIDTH,
} from "@/lib/fallback-image";

export type AlbumSlide = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageAlbumProps = {
  slides: AlbumSlide[];
};

function thumbSize(w: number, h: number, maxW: number) {
  const scale = maxW / w;
  return { w: maxW, h: Math.round(h * scale) };
}

export function ImageAlbum({ slides }: ImageAlbumProps) {
  const labelId = useId();
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const maxIdx = slides.length - 1;
  const go = useCallback(
    (dir: -1 | 1) => {
      setOpen((i) => {
        if (i === null) return i;
        const next = i + dir;
        if (next < 0) return maxIdx;
        if (next > maxIdx) return 0;
        return next;
      });
    },
    [maxIdx],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go]);

  if (slides.length === 0) return null;

  const tw = thumbSize(FALLBACK_IMAGE_WIDTH, FALLBACK_IMAGE_HEIGHT, 720);

  return (
    <>
      <ul className="grid list-none grid-cols-1 gap-5 sm:grid-cols-2" aria-label="Document gallery">
        {slides.map((slide, i) => (
          <li key={`${slide.src}-${i}`}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span className="relative block overflow-hidden rounded-none border border-black shadow-[4px_4px_0px_black] bg-neutral-50 transition">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={tw.w}
                  height={tw.h}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 640px) 100vw, 360px"
                />
              </span>
              {slide.caption ? (
                <span className="mt-2 block text-sm leading-snug text-black font-bold">
                  {slide.caption}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      {open !== null ? (
        <div
          className="fixed inset-0 z-[300] flex flex-col bg-black/92 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          onClick={() => setOpen(null)}
        >
          <div
            className="flex min-h-0 min-w-0 flex-1 flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 px-4 py-3 text-white">
              <p id={labelId} className="min-w-0 truncate text-sm font-medium">
                {slides[open]?.caption ?? slides[open]?.alt}{" "}
                <span className="text-white/60">
                  ({open + 1} / {slides.length})
                </span>
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(null)}
                className="shrink-0 rounded-md px-3 py-1.5 text-sm text-white/90 outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white"
              >
                Close
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6">
              {slides.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => go(-1)}
                    className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-2.5 py-2 text-lg text-white hover:bg-white/20 sm:left-2 sm:px-3"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => go(1)}
                    className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-2.5 py-2 text-lg text-white hover:bg-white/20 sm:right-2 sm:px-3"
                  >
                    ›
                  </button>
                </>
              ) : null}

              <div className="relative max-h-[min(85dvh,900px)] max-w-full">
                <Image
                  src={slides[open]?.src ?? FALLBACK_IMAGE_SRC}
                  alt={slides[open]?.alt ?? ""}
                  width={FALLBACK_IMAGE_WIDTH}
                  height={FALLBACK_IMAGE_HEIGHT}
                  className="max-h-[min(85dvh,900px)] w-auto max-w-full object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
