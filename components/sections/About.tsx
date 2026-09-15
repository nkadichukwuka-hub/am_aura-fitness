import Image from "next/image";
import { Stat } from "@/components/ui/Stat";
import { aboutImage } from "@/lib/content";

const values = [
  {
    title: "Coached, not just supervised",
    body: "Every class has a trainer watching your form, not just counting reps.",
  },
  {
    title: "Built for consistency",
    body: "Class times and a schedule that actually fits a real week.",
  },
];

const stats = [
  { value: "500+", label: "Members" },
  { value: "20+", label: "Classes weekly" },
  { value: "10", label: "Expert trainers" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 id="about-heading" className="font-display text-4xl sm:text-5xl">
              Why we train
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Am&apos;aura&apos;s Fitness started as one strength class in a
              rented gym space. Six years later we run a full studio because
              the same idea still works: show up consistently, train with
              people who push you, and progress takes care of itself. We
              coach beginners and competitors in the same room.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.body}</p>
              </div>
            ))}
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-3 divide-x divide-border border-t border-border pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 first:pl-0">
              <Stat value={stat.value} label={stat.label} />
            </div>
          ))}
        </dl>

        <div className="relative mt-16 aspect-[21/9] w-full overflow-hidden rounded-md">
          <Image
            src={aboutImage.src}
            alt={aboutImage.alt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
