import { Badge } from "@/components/ui/Badge";
import { classes } from "@/lib/content";

export function Classes() {
  return (
    <section id="classes" aria-labelledby="classes-heading" className="px-6 py-20 sm:py-28 bg-surface-deep">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-lg">
          <h2 id="classes-heading" className="font-display text-4xl sm:text-5xl">
            Find your class
          </h2>
          <p className="mt-4 text-muted">
            Six formats, one schedule. Drop into whichever fits your week —
            every class is coached, every level is welcome.
          </p>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.name}
                className="rounded-md border border-border bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                <div className="mt-5 flex gap-2">
                  <Badge>{item.duration}</Badge>
                  <Badge>{item.difficulty}</Badge>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
