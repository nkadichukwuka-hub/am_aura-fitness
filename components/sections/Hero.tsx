import Image from "next/image";
import { ArrowRight, RefreshCcw, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroImage } from "@/lib/content";

export function Hero() {
  return (
    <section className="px-4 pt-8 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-hero border-[3px] border-accent p-2 sm:p-3">
        <div className="relative rounded-hero bg-surface-deep overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover grayscale"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-surface-deep via-surface-deep/80 to-surface-deep/20"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-2 gap-8 p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col justify-center animate-[fade-up_0.6s_ease-out]">
              <h1 className="font-display leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
                <span className="block">Train hard.</span>
                <span className="block text-accent">Live strong.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted normal-case">
                Strength training, conditioning, and a coaching team that
                knows your name. Six days a week, one studio.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#contact" size="lg" variant="primary">
                  Join Now
                </Button>
                <Button href="#classes" size="lg" variant="secondary">
                  View Classes
                </Button>
              </div>
            </div>
          </div>

          <div className="relative grid sm:grid-cols-3 gap-px bg-border">
            <div className="bg-foreground text-surface-deep p-6">
              <Users className="h-6 w-6" aria-hidden="true" />
              <p className="mt-4 font-display text-xl leading-tight">
                500+ members
              </p>
              <p className="mt-2 text-sm normal-case text-surface-deep/70">
                Personalized training and nutrition plans that adapt to your
                progress.
              </p>
            </div>

            <div className="bg-glass-fill backdrop-blur p-6">
              <div className="flex items-center justify-between">
                <ArrowRight className="h-6 w-6 text-foreground" aria-hidden="true" />
                <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted">
                  Free trial
                </span>
              </div>
              <p className="mt-4 font-display text-xl leading-tight">
                Try any class, free
              </p>
              <p className="mt-2 text-sm normal-case text-muted">
                One week on us — no card required, no pressure at the desk.
              </p>
            </div>

            <div className="bg-accent text-surface-deep p-6">
              <RefreshCcw className="h-6 w-6" aria-hidden="true" />
              <p className="mt-4 font-display text-xl leading-tight">
                Book a free session
              </p>
              <p className="mt-2 text-sm normal-case text-surface-deep/70">
                Meet a coach, walk the floor, plan your first month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
