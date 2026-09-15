"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-2 w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");

    if (!email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }

    setError(null);
    setStatus("submitting");

    // No backend wired up yet — simulate submission so the form is fully
    // interactive and testable end to end.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-md border border-accent/40 bg-surface p-6">
        <p className="font-semibold text-accent">Message sent.</p>
        <p className="mt-2 text-sm text-muted">
          A coach will reach out within one business day to help you pick a
          plan and get you on the schedule.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "email-error" : undefined}
          className={inputClasses}
        />
        {error && (
          <p id="email-error" className="mt-2 text-sm text-error">
            {error}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="interest" className="text-sm font-medium">
          Interested in
        </label>
        <select id="interest" name="interest" defaultValue="Not sure yet" className={inputClasses}>
          <option>Basic</option>
          <option>Pro</option>
          <option>Elite</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
