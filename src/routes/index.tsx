import { createFileRoute } from "@tanstack/react-router";
import { SunriseMark } from "@/components/SunriseMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "secondhalf — custom software and automation for Kenyan SMEs" },
      {
        name: "description",
        content:
          "secondhalf builds custom backend systems and business-process automation for small and medium businesses in Kenya. Technology, built together.",
      },
      { property: "og:title", content: "secondhalf — technology, built together." },
      {
        property: "og:description",
        content:
          "Custom backend systems and business-process automation for Kenyan SMEs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-2.5 text-cream">
            <SunriseMark className="h-6 w-9" />
            <span className="font-heading text-lg font-semibold tracking-tight">
              secondhalf
            </span>
          </a>
          <a
            href="mailto:hello@secondhalf.co.ke"
            className="text-sm text-cream/70 transition-colors hover:text-cream"
          >
            hello@secondhalf.co.ke
          </a>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="relative flex min-h-svh items-center overflow-hidden bg-ink">
        <SunriseMark
          animated
          className="pointer-events-none absolute -right-10 top-1/2 w-[26rem] -translate-y-1/2 text-cream/15 sm:w-[34rem] lg:right-8 lg:w-[42rem]"
        />
        <div className="relative mx-auto w-full max-w-5xl px-6 py-32">
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            We build the systems running quietly behind your business.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/70">
            Custom software and automation for small and medium businesses in
            Kenya.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@secondhalf.co.ke?subject=Starting%20a%20project%20with%20secondhalf"
              className="inline-flex items-center justify-center rounded-md bg-coral px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-coral-strong"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>

      {/* 2. What we do */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What we do
          </h2>

          {/* Lead offering: automation */}
          <div className="mt-14 border-l-2 border-coral pl-6 sm:pl-10">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Business-process automation
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate">
              Most businesses lose hours every week to work a computer should be
              doing: copying details between apps, chasing confirmations,
              sending the same messages by hand. We connect the tools you
              already use so work happens automatically — an order comes in and
              the invoice, the notification, and the record follow on their own.
            </p>
          </div>

          {/* Lead offering: custom systems */}
          <div className="mt-16 grid gap-8 sm:grid-cols-12 sm:gap-12">
            <div className="sm:col-span-5">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Custom backend systems
              </h3>
            </div>
            <div className="sm:col-span-7">
              <p className="max-w-xl text-lg leading-relaxed text-slate">
                When off-the-shelf software doesn't fit how your business
                actually runs, we build the system that does — bookings,
                payments, records, reporting. Software shaped around your
                process, not the other way around, built to keep working as you
                grow.
              </p>
            </div>
          </div>

          {/* Secondary offering */}
          <div className="mt-16 border-t border-ink/10 pt-8">
            <p className="max-w-xl text-base leading-relaxed text-slate">
              <span className="font-medium text-ink">Websites, too.</span>{" "}
              When a project calls for it, we design and build the website to
              go with the system behind it. It's part of the work, not the
              headline.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What we're building */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What we're building
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/60">
            Two products in active development, built from problems we've seen
            first-hand working with Kenyan businesses.
          </p>

          <div className="mt-14 space-y-0">
            <div className="grid gap-3 border-t border-cream/15 py-10 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-5">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Booking and scheduling
                </h3>
                <p className="mt-1 text-sm text-coral">In development</p>
              </div>
              <p className="max-w-xl leading-relaxed text-cream/70 sm:col-span-7">
                A multi-tenant booking system for service businesses — salons,
                clinics, garages, consultants. Your customers book online, your
                calendar stays in sync, and reminders go out on their own.
              </p>
            </div>

            <div className="grid gap-3 border-t border-cream/15 py-10 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-5">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Rent and tenant management
                </h3>
                <p className="mt-1 text-sm text-coral">In development</p>
              </div>
              <p className="max-w-xl leading-relaxed text-cream/70 sm:col-span-7">
                A system for landlords to track units, tenants, and payments,
                with rent collected through M-Pesa and receipts issued
                automatically. No more paper records or end-of-month chasing.
              </p>
            </div>

            <div className="border-t border-cream/15 py-10">
              <p className="max-w-xl leading-relaxed text-cream/50">
                A third product is on the way — automation-driven, like
                everything else we build. More on that when it's ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How we work / who we are */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Who we are
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              secondhalf is two co-founders. One spends his time on backend
              systems and software architecture — the part that decides whether
              your software holds up in a year. The other is an automation and
              workflow engineer working in n8n — the part that decides whether
              you ever think about the boring work again. Between the two, we
              take a business problem from "this is eating our week" to a
              system that just handles it, and we stay involved after it ships.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Contact */}
      <section className="border-t border-ink/10 bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Talk to us
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
            If there's a process in your business that eats time, or a system
            you wish existed, we'd like to hear about it. A short email or a
            WhatsApp message is enough to start.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-lg sm:flex-row sm:items-center sm:gap-10">
            <a
              href="mailto:hello@secondhalf.co.ke"
              className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral"
            >
              hello@secondhalf.co.ke
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <SunriseMark className="h-12 w-[4.5rem] text-cream/40" />
          <p className="mt-6 text-sm text-cream/60">
            technology, built together.
          </p>
          <p className="mt-2 text-sm text-cream/40">
            © {new Date().getFullYear()} secondhalf. Nairobi, Kenya.
          </p>
        </div>
      </footer>
    </div>
  );
}
