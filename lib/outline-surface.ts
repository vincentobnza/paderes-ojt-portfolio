import { cn } from "@/lib/utils";

/** Matches Button `outline`: black border, white fill, hard offset shadow, no radius. */
export const outlineSurface =
  "rounded-none border border-black bg-white shadow-[4px_4px_0px_black]";

export const outlineSurfaceInput = cn(
  outlineSurface,
  "transition-all focus:border-black focus:shadow-[6px_6px_0px_black] focus:outline-none focus-visible:ring-0",
);
