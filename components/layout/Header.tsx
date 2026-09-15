"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-lg">
            AM<span className="text-accent">&apos;</span>AURA&apos;S
          </span>
          <span className="text-xs font-semibold tracking-widest text-muted">FITNESS</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
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

        <div className="hidden lg:flex items-center gap-6">
          <Link href="#contact" className="text-sm text-foreground hover:text-accent transition-colors">
            Log in
          </Link>
          <Button href="#contact" size="md">
            Join Now
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden text-foreground"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="lg:hidden border-t border-border bg-surface px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#contact" size="md" className="mt-2 w-full">
            Join Now
          </Button>
        </nav>
      )}
    </header>
  );
}
