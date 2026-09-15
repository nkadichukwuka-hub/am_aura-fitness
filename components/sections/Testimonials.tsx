import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 id="testimonials-heading" className="font-display text-4xl sm:text-5xl max-w-lg">
          From the studio floor
        </h2>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <li key={item.name} className="rounded-md border border-border bg-surface p-6">
              <div aria-label={`Rated ${item.rating} out of 5`} className="flex gap-1 text-accent">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    aria-hidden="true"
                    fill={i < item.rating ? "currentColor" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold">{item.name}</p>
              <p className="text-sm text-muted">{item.membershipTier}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
