interface StatProps {
  value: string;
  label: string;
  labelClassName?: string;
}

export function Stat({ value, label, labelClassName = "text-muted" }: StatProps) {
  return (
    <div>
      <dt className="font-display text-3xl sm:text-4xl text-foreground">{value}</dt>
      <dd className={`mt-1 text-sm normal-case ${labelClassName}`}>{label}</dd>
    </div>
  );
}
