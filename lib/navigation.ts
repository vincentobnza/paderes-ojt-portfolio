export const CHAPTER_NUMBERS = [1, 2, 3, 4] as const;
export type ChapterNumber = (typeof CHAPTER_NUMBERS)[number];

/** Appendix A through R (inclusive). */
export const APPENDIX_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
] as const;
export type AppendixLetter = (typeof APPENDIX_LETTERS)[number];

export type StaticNavPath =
  | "/"
  | "/introduction"
  | "/table-of-contents"
  | "/acknowledgement"
  | "/stp"
  | "/personal-philosophy"
  | "/career-plan";

export type ChapterPath = `/chapter/${ChapterNumber}`;

export type AppendixPath = {
  [L in AppendixLetter]: `/appendix/${Lowercase<L>}`;
}[AppendixLetter];

export type NavHref = StaticNavPath | ChapterPath | AppendixPath;

export type NavLink = {
  readonly label: string;
  readonly href: NavHref;
};

export type StaticNavLink = {
  readonly label: string;
  readonly href: StaticNavPath;
};

export const STATIC_LINKS: readonly StaticNavLink[] = [
  { label: "Home", href: "/" },
  { label: "Introduction", href: "/introduction" },
  { label: "Table of Contents", href: "/table-of-contents" },
  { label: "Acknowledgement", href: "/acknowledgement" },
  { label: "STP", href: "/stp" },
  { label: "Personal Philosophy", href: "/personal-philosophy" },
  { label: "Career Plan", href: "/career-plan" },
] as const satisfies readonly StaticNavLink[];

/** Primary destinations for the top bar (subset of static routes). */
export const NAVBAR_LINKS: readonly StaticNavLink[] = [
  { label: "Home", href: "/" },
  { label: "Introduction", href: "/introduction" },
  { label: "Contents", href: "/table-of-contents" },
  { label: "STP", href: "/stp" },
  { label: "Philosophy", href: "/personal-philosophy" },
  { label: "Career", href: "/career-plan" },
  { label: "Acknowledgement", href: "/acknowledgement" },
] as const satisfies readonly StaticNavLink[];

/** Center links in the header — add `portfolio.pdf` and `resume.pdf` under `public/`. */
export const NAVBAR_TOP_LINKS = [
  { label: "PDF file", href: "/portfolio.pdf" },
  { label: "Resume", href: "/resume.pdf" },
] as const;

function chapterPath(n: ChapterNumber): ChapterPath {
  return `/chapter/${n}`;
}

function appendixPath(letter: AppendixLetter): AppendixPath {
  const slug = letter.toLowerCase() as Lowercase<AppendixLetter>;
  return `/appendix/${slug}` as AppendixPath;
}

export const CHAPTER_LINKS: readonly NavLink[] = CHAPTER_NUMBERS.map((n) => ({
  label: `Chapter ${n}`,
  href: chapterPath(n),
}));

export const APPENDIX_LINKS: readonly NavLink[] = APPENDIX_LETTERS.map((letter) => ({
  label: `Appendix ${letter}`,
  href: appendixPath(letter),
}));

export const NAV_ITEMS: readonly NavLink[] = [
  ...STATIC_LINKS,
  ...CHAPTER_LINKS,
  ...APPENDIX_LINKS,
];

export type ContentStaticPath = Exclude<StaticNavPath, "/">;

const STATIC_LABEL = new Map<StaticNavPath, string>(
  STATIC_LINKS.map((item) => [item.href, item.label]),
);

export function labelForNavHref(href: StaticNavPath): string {
  return STATIC_LABEL.get(href) ?? href;
}
