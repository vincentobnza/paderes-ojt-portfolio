"use client";

import { useEffect } from "react";
import { DEVELOPER_GITHUB_URL, DEVELOPER_NAME } from "@/lib/site";

/** Logs a dev credit once when the app shell mounts (devtools → Console). */
export function ShvtTheFvckUp() {
  useEffect(() => {
    console.log(`dv: ${DEVELOPER_NAME}`);
    console.log(`g: ${DEVELOPER_GITHUB_URL}`);
  }, []);

  return null;
}
