import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { ReadMoreList, type ReadMoreItem } from "@/components/ReadMoreList";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions secondhalf technologies" },
      {
        name: "description",
        content:
          "Automated operations, custom software, lead systems, integrations, AI assistants and reporting dashboards delivered for real businesses.",
      },
      { property: "og:title", content: "Solutions secondhalf technologies" },
      {
        property: "og:description",
        content:
          "What we have delivered: automation, integration and AI solutions with measurable results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SolutionsPage,
});

const solutions: ReadMoreItem[] = [
  {
    title: "Automated business processes",
    body: "We have taken processes that consumed days of staff time each month and reduced them to workflows that run unattended. Orders, approvals, invoicing and notifications now trigger from a single action instead of a chain of manual steps. Clients see the saving immediately in hours recovered and in errors that stop recurring. The same approach applies to almost any routine, rules-based process.",
  },
  {
    title: "Custom software built to the workflow",
    body: "Rather than forcing a business into a generic product, we build the system around how the work actually happens. That has meant scheduling tools for service teams, records systems for property managers, and operational tools for businesses whose process has no commercial equivalent. Adoption is high because nothing has to be worked around, and the software keeps pace as the process evolves.",
  },
  {
    title: "Lead capture and follow-up systems",
    body: "Enquiries that arrived by phone, WhatsApp and web form were being lost between channels. We consolidated them into one pipeline with automatic acknowledgement, assignment and timed follow-up. Missed enquiries became booked appointments, and management gained a clear view of which sources convert. Nothing now depends on somebody remembering to call back.",
  },
  {
    title: "Connecting siloed tools",
    body: "Spreadsheets, calendars, accounting software and messaging apps rarely share data on their own. We have linked these into a single automated flow, so one entry updates every system that depends on it. Reconciliation work disappears along with the conflicting versions it was created to resolve. Teams stop working from separate copies of the truth.",
  },
  {
    title: "AI assistants and chatbots",
    body: "Our first project is Alex, an AI assistant that replies to guest messages on WhatsApp for short stay hosts. The same approach suits any business that answers the same questions again and again: prices, availability, directions, house rules. The assistant handles the routine messages at any hour, and the owner steps in only when a conversation needs a person.",
  },
  {
    title: "Dashboards and operational reporting",
    body: "Owners were making decisions on figures that were weeks old. We built reporting layers that pull live data from operational systems into clear dashboards covering revenue, throughput and outstanding work. Problems now surface while they can still be acted on, and monthly reporting takes minutes rather than days.",
  },
];

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Solutions
          </h1>
          <h2 className="mt-10 font-heading text-2xl font-semibold tracking-tight">Capabilities</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We automate operations, build AI-driven tools, connect systems that were never designed
            to work together, and deliver results a business can measure. Our experience spans
            service businesses, property management, sales teams and back office operations, which
            means we usually recognise the problem before it is fully described. We are equally
            comfortable building something new and improving what already exists. Every engagement
            starts with the outcome you need and works backwards to the smallest system that
            delivers it. What follows is a sample of the work.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <p className="text-sm font-medium text-accent">Featured project</p>
          <h2 className="mt-3 max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Alex, an AI assistant for WhatsApp
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Alex answers guest messages for short stay hosts on WhatsApp, at any hour, so the
            host is no longer the one replying at midnight.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            <div className="border-l-2 border-accent pl-5">
              <h3 className="font-heading text-lg font-semibold">The problem</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Guests message at all hours with the same questions, and slow replies cost hosts
                bookings and good reviews.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <h3 className="font-heading text-lg font-semibold">What we built</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                An assistant that reads each incoming WhatsApp message and replies on the
                host's behalf, in a natural tone, without anyone typing.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <h3 className="font-heading text-lg font-semibold">How it runs</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Automated workflows in n8n, the WhatsApp Cloud API for messaging, and Claude
                for understanding and writing the replies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Our solutions
          </h2>
          <div className="mt-10">
            <ReadMoreList items={solutions} idPrefix="solution" />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-3xl border-l-2 border-accent pl-6 sm:pl-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Staying ahead of industry changes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Automation and AI are moving faster than any single project cycle, and a system built
              on last year's assumptions ages quickly. We treat keeping current as part of the job:
              testing new models and platforms against real workloads, tracking where costs and
              capabilities are heading, and retiring approaches that have been overtaken. That
              discipline shows up in the architecture we choose systems built so a component can
              be replaced without disturbing everything around it. Clients get early access to
              capabilities that genuinely help, and none of the disruption of chasing every
              announcement. We revisit delivered systems as the landscape shifts, so improvements
              arrive continuously instead of in a costly rebuild. The point is not novelty; it is
              making sure the technology you invested in is still the right one in three years.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}