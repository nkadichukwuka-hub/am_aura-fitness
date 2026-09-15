import { Clock, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { studioInfo } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-6 py-20 sm:py-28 bg-surface-deep">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
        <div>
          <h2 id="contact-heading" className="font-display text-4xl sm:text-5xl">
            Start training
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Tell us a bit about yourself and a coach will follow up to help
            you find the right class and plan.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:pt-2">
          <div className="flex gap-4">
            <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-semibold">Am&apos;aura&apos;s Fitness</p>
              {studioInfo.address.map((line) => (
                <p key={line} className="text-muted">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <dl className="text-sm">
              {studioInfo.hours.map((entry) => (
                <div key={entry.days} className="flex gap-2">
                  <dt className="font-semibold">{entry.days}</dt>
                  <dd className="text-muted">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex gap-4">
            <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <a href={`tel:${studioInfo.phone.replace(/[^\d+]/g, "")}`} className="text-sm hover:text-accent">
              {studioInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
