"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { scrollToHash } from "@/lib/scroll";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-surface-deep hover:bg-accent-hover hover:shadow-glow",
  secondary:
    "border border-foreground/60 text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:text-accent underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${
    variant === "ghost" ? "" : sizeClasses[size]
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled}
        onClick={(e) => scrollToHash(e, href)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
