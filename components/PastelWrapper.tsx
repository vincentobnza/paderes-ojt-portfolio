

import { cn } from "@/lib/utils";
import React from "react";

export default function PastelWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={cn("p-1 sm:p-2 shadow-[4px_4px_0px_black]", className)}>{children}</div>;
}
