import { MessageCircle, Phone } from "lucide-react";
import { PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_URL } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
          We look forward to hearing from you. Whether you already know what you want built or
          you're still working out where to start, a short conversation is usually enough to see
          the path forward. Tell us what's slowing your business down, and we'll help you take the
          next step.
        </p>

        <div className="mt-10 grid gap-4 sm:max-w-md">
          <a
            href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-lg border border-cream/15 px-5 py-4 transition-colors hover:border-coral"
          >
            <Phone className="h-5 w-5 text-coral" />
            <span className="text-lg">{PHONE_PRIMARY}</span>
          </a>
          <a
            href={`tel:${PHONE_SECONDARY.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-lg border border-cream/15 px-5 py-4 transition-colors hover:border-coral"
          >
            <Phone className="h-5 w-5 text-coral" />
            <span className="text-lg">{PHONE_SECONDARY}</span>
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-coral px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-coral-strong"
        >
          <MessageCircle className="h-5 w-5" />
          Get Started
        </a>
      </div>
    </section>
  );
}
