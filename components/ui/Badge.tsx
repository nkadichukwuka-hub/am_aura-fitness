import type { ReactNode } from "react";

type BadgeVariant = "outline" | "filled-volt" | "filled-graphite";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  outline: "border border-border text-muted",
  "filled-volt": "bg-accent text-surface-deep",
  "filled-graphite": "bg-surface text-foreground",
};

export function Badge({ variant = "outline", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
