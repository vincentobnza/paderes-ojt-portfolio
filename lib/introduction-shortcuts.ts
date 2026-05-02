import type { NavHref } from "@/lib/navigation";
import { APPENDIX_LINKS, CHAPTER_LINKS } from "@/lib/navigation";

export type IntroShortcutGroup = {
  readonly title: string | null;
  readonly links: readonly { readonly label: string; readonly href: NavHref }[];
};

/** Shortcuts list for the Introduction page — mirrors portfolio routes. */
export const INTRO_SHORTCUT_GROUPS: readonly IntroShortcutGroup[] = [
  {
    title: null,
    links: [
      { label: "Table of Contents", href: "/table-of-contents" },
      { label: "Title Page", href: "/" },
      { label: "Acknowledgement", href: "/acknowledgement" },
      { label: "Student Trainee Prayer", href: "/stp" },
      { label: "Personal Philosophy", href: "/personal-philosophy" },
      { label: "Career Plan", href: "/career-plan" },
    ],
  },
  {
    title: "Chapters",
    links: CHAPTER_LINKS,
  },
  {
    title: "Appendices",
    links: APPENDIX_LINKS,
  },
];
