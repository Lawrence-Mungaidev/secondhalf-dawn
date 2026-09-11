import { createFileRoute } from "@tanstack/react-router";
import { DiamondMark } from "@/components/DiamondMark";

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
    <div className="min-h-screen bg-cream text-ink">
      {/* Nav */}
      <header className="bg-ink">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="flex flex-col items-start gap-1.5 text-cream">
            <DiamondMark className="h-7 w-10 shrink-0" />
            <span className="font-heading text-base font-semibold tracking-tight">
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
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
          <DiamondMark animated className="mb-8 w-24 text-ink sm:w-32" />
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            We build the systems running quietly behind your business.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
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
      <section className="border-t border-ink/10 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What we do
          </h2>

          <div className="mt-14 border-l-2 border-coral pl-6 sm:pl-10">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Business-process automation
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate">
              Most businesses lose hours a week to work a computer should be
              doing: copying details between apps, chasing confirmations,
              sending the same messages by hand. We connect the tools you
              already use so an order comes in and the invoice, the
              notification, and the record follow on their own.
            </p>
          </div>

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
                payments, records, reporting. Shaped around your process, and
                built to keep working as you grow.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-ink/10 pt-8">
            <p className="max-w-xl text-base leading-relaxed text-slate">
              <span className="font-medium text-ink">Websites, too.</span>{" "}
              When a project calls for it, we design and build the website to go
              with the system behind it. It's part of the work, not the
              headline.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What we're building */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What we're building
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
            Two products in active development, built from problems we've seen
            first-hand working with Kenyan businesses.
          </p>

          <div className="mt-14">
            <div className="grid gap-3 border-t border-ink/10 py-10 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-5">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Booking and scheduling
                </h3>
                <span className="mt-2 inline-block rounded-full bg-coral-light/40 px-3 py-1 text-xs font-medium text-ink">
                  In development
                </span>
              </div>
              <p className="max-w-xl leading-relaxed text-slate sm:col-span-7">
                A multi-tenant booking system for service businesses — salons,
                clinics, garages, consultants. Customers book online, the
                calendar stays in sync, reminders go out on their own.
              </p>
            </div>

            <div className="grid gap-3 border-t border-ink/10 py-10 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-5">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Rent and tenant management
                </h3>
                <span className="mt-2 inline-block rounded-full bg-coral-light/40 px-3 py-1 text-xs font-medium text-ink">
                  In development
                </span>
              </div>
              <p className="max-w-xl leading-relaxed text-slate sm:col-span-7">
                Landlords track units, tenants, and payments, with rent
                collected through M-Pesa and receipts issued automatically. No
                paper records, no end-of-month chasing.
              </p>
            </div>

            <div className="border-t border-ink/10 py-10">
              <p className="max-w-xl leading-relaxed text-slate">
                A third product is on the way — automation-driven, like
                everything else we build. More on that when it's ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who we are */}
      <section className="border-t border-ink/10 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Who we are
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              secondhalf is two co-founders. One works on backend systems and
              software architecture — the part that decides whether your
              software holds up in a year. The other is an automation and
              workflow engineer working in n8n — the part that decides whether
              you ever think about the boring work again. Between us, we take a
              business problem from "this eats our week" to a system that
              handles it, and we stay involved after it ships.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Contact */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Talk to us
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
            If there's a process in your business that eats time, or a system
            you wish existed, tell us about it. An email or a WhatsApp message
            is enough to start.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-lg sm:flex-row sm:items-center sm:gap-10">
            <a
              href="mailto:hello@secondhalf.co.ke"
              className="font-medium text-cream underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral-light"
            >
              hello@secondhalf.co.ke
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cream underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral-light"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cream/15 bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <DiamondMark className="w-16 text-cream" />
          <p className="mt-4 font-heading text-base font-semibold tracking-tight">
            secondhalf
          </p>
          <p className="mt-2 text-sm text-cream/60">
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
