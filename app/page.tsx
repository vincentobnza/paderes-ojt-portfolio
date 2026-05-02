export default function Home() {
  return (
    <article className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-950">
        Home
      </h1>
      <p className="mb-10 text-neutral-600">
        Main content scrolls here. The right column lists{" "}
        <code className="rounded bg-neutral-950/[0.04] px-1.5 py-0.5 text-sm">
          h2
        </code>{" "}
        and{" "}
        <code className="rounded bg-neutral-950/[0.04] px-1.5 py-0.5 text-sm">
          h3
        </code>{" "}
        under “On this page” (wide screens).
      </p>
      <h2 id="intro" className="mb-3 text-xl font-semibold text-neutral-950">
        Introduction
      </h2>
      <p className="mb-8 text-neutral-600">
        Example section for the table of contents.
      </p>
      <h2 id="details" className="mb-3 text-xl font-semibold text-neutral-950">
        Details
      </h2>
      <h3 id="subsection" className="mb-2 text-lg font-medium text-neutral-950">
        Subsection
      </h3>
      <p className="text-neutral-600">Nested heading demo for the sidebar.</p>
    </article>
  );
}
