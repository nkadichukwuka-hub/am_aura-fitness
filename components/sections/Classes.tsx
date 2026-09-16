import Image from "next/image";
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
                className="rounded-md overflow-hidden border border-border bg-surface transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.photoSrc}
                    alt={item.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale"
                  />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-deep/80 backdrop-blur">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" strokeWidth={1.5} />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                  <div className="mt-5 flex gap-2">
                    <Badge>{item.duration}</Badge>
                    <Badge>{item.difficulty}</Badge>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
