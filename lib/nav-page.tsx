import type { ContentStaticPath } from "@/lib/navigation";
import { labelForNavHref } from "@/lib/navigation";

export function createStaticNavPage(path: ContentStaticPath) {
  const title = labelForNavHref(path);
  return function StaticNavPage() {
    return (
      <article className="w-full">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
          {title}
        </h1>
        <p className="text-neutral-600">Content coming soon.</p>
      </article>
    );
  };
}
