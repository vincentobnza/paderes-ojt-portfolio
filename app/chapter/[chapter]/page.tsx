import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Chapter1Content } from "@/components/chapters/Chapter1Content";
import { Chapter2Content } from "@/components/chapters/Chapter2Content";
import { Chapter3Content } from "@/components/chapters/Chapter3Content";
import { Chapter4Content } from "@/components/chapters/Chapter4Content";
import { CHAPTER_NUMBERS, type ChapterNumber } from "@/lib/navigation";

function parseChapter(s: string): ChapterNumber | undefined {
  if (!/^[1-4]$/.test(s)) return undefined;
  const n = Number(s) as ChapterNumber;
  return (CHAPTER_NUMBERS as readonly number[]).includes(n) ? n : undefined;
}

export function generateStaticParams(): { chapter: string }[] {
  return CHAPTER_NUMBERS.map((chapter) => ({ chapter: String(chapter) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>;
}): Promise<Metadata> {
  const { chapter } = await params;
  const n = parseChapter(chapter);
  if (n === undefined) return {};
  if (n === 1) {
    return {
      title: "Chapter 1 — Introduction",
      description:
        "Importance and objectives of internship; time and place of OJT at Occidental Mindoro State College.",
    };
  }
  if (n === 2) {
    return {
      title: "Chapter 2 — Nature of Agency",
      description:
        "OMSC and the PDME office; mission, vision, goals, quality objectives, and history.",
    };
  }
  if (n === 3) {
    return {
      title: "Chapter 3 — Reports & records",
      description:
        "Weekly accomplishment, daily time record, internship progress and analysis reports.",
    };
  }
  if (n === 4) {
    return {
      title: "Chapter 4 — Student Internship Evaluation Form",
      description: "Student internship evaluation form.",
    };
  }
  return {
    title: `Chapter ${n}`,
    description: `Portfolio chapter ${n}.`,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;
  const n = parseChapter(chapter);
  if (n === undefined) notFound();

  if (n === 1) {
    return (
      <article className="w-full">
        <Chapter1Content />
      </article>
    );
  }

  if (n === 2) {
    return (
      <article className="w-full">
        <Chapter2Content />
      </article>
    );
  }

  if (n === 3) {
    return (
      <article className="w-full">
        <Chapter3Content />
      </article>
    );
  }

  if (n === 4) {
    return (
      <article className="w-full">
        <Chapter4Content />
      </article>
    );
  }

  return (
    <article className="w-full">
      <h1 className="mb-6 text-3xl font-semibold text-black">
        Chapter {n}
      </h1>
      <p className="text-black">Content coming soon.</p>
    </article>
  );
}
