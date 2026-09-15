import type { LucideIcon } from "lucide-react";

interface PhotoPlaceholderProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export function PhotoPlaceholder({ icon: Icon, label, className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden bg-surface ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 20%, rgba(245,244,236,0.08), transparent 55%)",
      }}
    >
      <Icon className="h-10 w-10 text-muted" strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
}
