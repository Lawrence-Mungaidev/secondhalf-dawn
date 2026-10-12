import { MessageCircle, Phone } from "lucide-react";
import { PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_URL } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We look forward to hearing from you. Whether you already know what you want built or
          you're still working out where to start, a short conversation is usually enough to see
          the path forward. Tell us what's slowing your business down, and we'll help you take the
          next step.
        </p>

        <div className="mt-10 grid gap-4 sm:max-w-md">
          <a
            href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-lg border border-border px-5 py-4 transition-colors hover:border-accent"
          >
            <Phone className="h-5 w-5 text-accent" />
            <span className="text-lg">{PHONE_PRIMARY}</span>
          </a>
          <a
            href={`tel:${PHONE_SECONDARY.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-lg border border-border px-5 py-4 transition-colors hover:border-accent"
          >
            <Phone className="h-5 w-5 text-accent" />
            <span className="text-lg">{PHONE_SECONDARY}</span>
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-base font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          <MessageCircle className="h-5 w-5" />
          Get Started
        </a>
      </div>
    </section>
  );
}
