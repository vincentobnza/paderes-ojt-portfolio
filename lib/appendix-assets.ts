import type { AlbumSlide } from "@/components/ImageAlbum";
import type { AppendixLetter } from "@/lib/navigation";

/** PDF paths under `public/` and image slides per appendix. Update when files are added. */
export type AppendixMedia = {
  readonly pdfs: readonly string[];
  readonly images: readonly AlbumSlide[];
};

export const APPENDIX_MEDIA: Record<AppendixLetter, AppendixMedia> = {
  A: {
    pdfs: ["/appendix_a/evaluation_of_student.pdf"],
    images: [],
  },
  B: {
    pdfs: ["/appendix_b/omsc.registration.form.pdf"],
    images: [],
  },
  C: {
    pdfs: [],
    images: [
      // Folder name in `public` is `appedix_c` (typo). Rename to `appendix_c` and update paths if you prefer.
      {
        src: "/appedix_c/id.jpg",
        alt: "Validated ID",
        caption: "Photocopy Validated ID",
      },
      {
        src: "/appedix_c/id2.jpg",
        alt: "Validated ID",
        caption: "Photocopy Validated ID",
      },
    ],
  },
  D: {
    pdfs: ["/appendix_d/parent_consent.PDF"],
    images: [],
  },
  E: {
    pdfs: ["/appendix_e/med_cert.pdf"],
    images: [],
  },
  F: { pdfs: [], images: [] },
  G: { pdfs: [], images: [] },
  H: {
    pdfs: ["/appendix_h/e_letter.PDF"],
    images: [],
  },
  I: { pdfs: [], images: [] },
  J: {
    pdfs: ["/appendix_j/dtr_record.PDF"],
    images: [],
  },
  K: { pdfs: [], images: [] },
  L: { pdfs: [], images: [] },
  M: { pdfs: [], images: [] },
  N: { pdfs: [], images: [] },
  O: { pdfs: [], images: [] },
  P: { pdfs: [], images: [] },
  Q: {
    pdfs: [
      "/appendix_q/cv.pdf"
    ], images: []
  },
  R: { pdfs: [], images: [] },
};
