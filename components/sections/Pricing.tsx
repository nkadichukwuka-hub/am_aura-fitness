import Link from "next/link";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { pricingTiers } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="px-6 py-20 sm:py-28 bg-surface-deep">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-lg">
          <h2 id="pricing-heading" className="font-display text-4xl sm:text-5xl">
            Membership
          </h2>
          <p className="mt-4 text-muted">
            No initiation fee, no lock-in contract. Change plans whenever
            your training changes.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 lg:items-center">
          {pricingTiers.map((plan) => (
            <div
              key={plan.tier}
              className={
                plan.highlighted
                  ? "rounded-lg bg-accent text-surface-deep p-8 lg:scale-105 lg:py-10"
                  : "rounded-lg border border-border bg-surface p-8"
              }
            >
              {plan.highlighted && (
                <Badge variant="filled-graphite" className="mb-4">
                  Most Popular
                </Badge>
              )}

              <h3 className="text-sm font-semibold uppercase tracking-wide">
                {plan.tier}
              </h3>
              <p className="mt-2 font-display text-4xl">
                {plan.price}
                <span className="text-base normal-case align-top">
                  {plan.billingPeriod}
                </span>
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-2 text-sm">
                    {feature.included ? (
                      <Check className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <X
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-surface-deep/40" : "text-muted"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                    <span className={feature.included ? "" : plan.highlighted ? "text-surface-deep/50 line-through" : "text-muted line-through"}>
                      {feature.label}
                      {!feature.included && <span className="sr-only"> (not included)</span>}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.highlighted ? (
                <Link
                  href="#contact"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-surface-deep px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-deep"
                >
                  Get Started
                </Link>
              ) : (
                <Button href="#contact" variant="primary" className="mt-8 w-full">
                  Get Started
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
