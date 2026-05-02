"use client";

import { useState } from "react";
import { outlineSurface } from "@/lib/outline-surface";
import { cn } from "@/lib/utils";

function viewerSrc(base: string, showSidebar: boolean) {
  const path = base.replace(/#.*$/, "");
  return `${path}#view=FitH&navpanes=${showSidebar ? 1 : 0}`;
}

export function AppendixPdfViewer({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const [showSidebar, setShowSidebar] = useState(true);
  const iframeSrc = viewerSrc(src, showSidebar);

  return (
    <div className={cn(outlineSurface, "flex flex-col overflow-hidden bg-neutral-50")}>
      <iframe
        key={iframeSrc}
        src={iframeSrc}
        title={label}
        className="min-h-[70vh] w-full border-0 sm:min-h-[90vh]"
      />
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black px-3 py-2 text-xs">
        <span className="font-bold text-black/70">PDF</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowSidebar((v) => !v)}
            aria-pressed={showSidebar}
            className="hidden sm:block border border-black bg-violet-300 p-2 font-bold text-black shadow-[4px_4px_0_0_black] hover:opacity-80"
          >
            {showSidebar ? "Hide sidebar view" : "Show sidebar view"}
          </button>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black bg-blue-300 p-2 font-bold text-black shadow-[4px_4px_0_0_black] hover:opacity-80"
          >
            Open PDF in new tab
          </a>
        </div>
      </div>
    </div>
  );
}
