import type { MouseEvent } from "react";

/**
 * Next.js's built-in same-page hash scrolling doesn't reliably scroll on
 * this project's Next version (the URL hash updates but the page never
 * moves), so anchor links call this too. It only adds the missing scroll —
 * it deliberately leaves preventDefault/history alone so Next's own Link
 * handler still owns the URL update, rather than fighting it.
 */
export function scrollToHash(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;

  const target = document.getElementById(href.slice(1));
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
