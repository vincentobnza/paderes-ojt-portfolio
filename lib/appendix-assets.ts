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
  M: {
    pdfs: [],
    images: [
      {
        src: "/appendix_m/apm1.png",
        alt: "Performance or proficiency rating sheet page 1",
        caption: "Performance/Proficiency Rating Sheet (1)",
      },
      {
        src: "/appendix_m/apm2.png",
        alt: "Performance or proficiency rating sheet page 2",
        caption: "Performance/Proficiency Rating Sheet (2)",
      },
      {
        src: "/appendix_m/apm3.png",
        alt: "Performance or proficiency rating sheet page 3",
        caption: "Performance/Proficiency Rating Sheet (3)",
      },
      {
        src: "/appendix_m/apm4.png",
        alt: "Performance or proficiency rating sheet page 4",
        caption: "Performance/Proficiency Rating Sheet (4)",
      },
      {
        src: "/appendix_m/apm5.png",
        alt: "Performance or proficiency rating sheet page 5",
        caption: "Performance/Proficiency Rating Sheet (5)",
      },
    ],
  },
  N: {
    pdfs: [],
    images: [
      {
        src: "/appendix_n/p1.png",
        alt: "Pictures during office works 1",
        caption: "Pictures During Office Works (1)",
      },
      {
        src: "/appendix_n/p2.png",
        alt: "Pictures during office works 2",
        caption: "Pictures During Office Works (2)",
      },
      {
        src: "/appendix_n/p3.png",
        alt: "Pictures during office works 3",
        caption: "Pictures During Office Works (3)",
      },
      {
        src: "/appendix_n/p4.png",
        alt: "Pictures during office works 4",
        caption: "Pictures During Office Works (4)",
      },
      {
        src: "/appendix_n/p5.png",
        alt: "Pictures during office works 5",
        caption: "Pictures During Office Works (5)",
      },
      {
        src: "/appendix_n/p6.png",
        alt: "Pictures during office works 6",
        caption: "Pictures During Office Works (6)",
      },
      {
        src: "/appendix_n/p7.png",
        alt: "Pictures during office works 7",
        caption: "Pictures During Office Works (7)",
      },
    ],
  },
  O: { pdfs: [], images: [] },
  P: {
    pdfs: ["/appendix_q/cv.pdf"],
    images: [],
  },
  Q: { pdfs: [], images: [] },
};
