import Link from "next/link";
import { navLinks } from "@/lib/content";

const connectLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Email us", href: "mailto:hello@amaurasfitness.com" },
];

export function Footer() {
  return (
    <footer className="bg-surface-deep border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 sm:grid-cols-3">
        <div>
          <span className="font-display text-lg">
            AM<span className="text-accent">&apos;</span>AURA&apos;S FITNESS
          </span>
          <p className="mt-3 text-sm text-muted max-w-xs">
            Strength, conditioning, and a studio that knows your name.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">Studio</span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Connect" className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">Connect</span>
          {connectLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Am&apos;aura&apos;s Fitness</span>
          <span className="text-accent font-display text-base" aria-hidden="true">
            &apos;
          </span>
        </div>
      </div>
    </footer>
  );
}
