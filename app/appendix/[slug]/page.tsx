import { notFound } from "next/navigation";
import { APPENDIX_LETTERS, type AppendixLetter } from "@/lib/navigation";

function parseAppendix(slug: string): AppendixLetter | undefined {
  return APPENDIX_LETTERS.find((L) => L.toLowerCase() === slug);
}

export function generateStaticParams(): { slug: string }[] {
  return APPENDIX_LETTERS.map((L) => ({ slug: L.toLowerCase() }));
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
    <article className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
        Appendix {letter}
      </h1>
      <p className="text-neutral-600">Content coming soon.</p>
    </article>
  );
}
