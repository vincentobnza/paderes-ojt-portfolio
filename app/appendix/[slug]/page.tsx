import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppendixDocContent } from "@/components/AppendixDocContent";
import { APPENDIX_TITLES } from "@/lib/appendix-titles";
import { APPENDIX_LETTERS, type AppendixLetter } from "@/lib/navigation";

function parseAppendix(slug: string): AppendixLetter | undefined {
  return APPENDIX_LETTERS.find((L) => L.toLowerCase() === slug);
}

export function generateStaticParams(): { slug: string }[] {
  return APPENDIX_LETTERS.map((L) => ({ slug: L.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const letter = parseAppendix(slug);
  if (letter === undefined) return {};
  const title = APPENDIX_TITLES[letter];
  return {
    title: `Appendix ${letter} — ${title}`,
    description: title,
  };
}

export default async function AppendixPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const letter = parseAppendix(slug);
  if (letter === undefined) notFound();

  return (
    <article className="w-full">
      <AppendixDocContent letter={letter} />
    </article>
  );
}
