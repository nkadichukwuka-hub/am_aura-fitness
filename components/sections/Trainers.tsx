import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { trainers } from "@/lib/content";

export function Trainers() {
  return (
    <section id="trainers" aria-labelledby="trainers-heading" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-lg">
          <h2 id="trainers-heading" className="font-display text-4xl sm:text-5xl">
            Meet the coaches
          </h2>
          <p className="mt-4 text-muted">
            Every class on the schedule is led by someone who trains here
            too, not a rotating cast of substitutes.
          </p>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <li key={trainer.name} className="rounded-md overflow-hidden border border-border bg-surface">
              <div className="relative aspect-square w-full">
                <Image
                  src={trainer.photoSrc}
                  alt={trainer.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{trainer.name}</h3>
                <Badge variant="filled-graphite" className="mt-2">
                  {trainer.specialty}
                </Badge>
                <p className="mt-3 text-sm text-muted leading-relaxed">{trainer.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
