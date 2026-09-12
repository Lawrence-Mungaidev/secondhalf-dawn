import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { ReadMoreList, type ReadMoreItem } from "@/components/ReadMoreList";
import { WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — secondhalf technologies" },
      {
        name: "description",
        content:
          "Automation systems, scalable platforms, AI-powered applications, web apps, systems integration and lead management for growing businesses.",
      },
      { property: "og:title", content: "Services — secondhalf technologies" },
      {
        property: "og:description",
        content:
          "Practical automation, integration and AI services built with businesses ready to modernise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesPage,
});

const services: ReadMoreItem[] = [
  {
    title: "Automation systems for business",
    body: "We start by mapping the work your team repeats every week — the copying between systems, the manual follow-ups, the reports assembled by hand. Those steps become automated workflows that run on their own, accurately, every time. The result is fewer errors, faster turnaround, and staff hours returned to work that actually needs judgement. We build the automation around your existing process rather than asking you to change how you operate.",
  },
  {
    title: "Scalable systems",
    body: "Systems usually fail not because they were built badly, but because they were built for the volume of the day they launched. We design data models, integrations and infrastructure that hold up as transactions, users and branches multiply. That means predictable performance under load and headroom to add capability without a rebuild. You invest once and extend from there.",
  },
  {
    title: "AI-powered applications",
    body: "We embed AI where it measurably improves a task, not as a novelty layer. That may be classifying and routing incoming requests, drafting accurate responses from your own documentation, or surfacing predictive signals from operational data. Each model is wired into the tools your team already uses, with clear boundaries and human review where accuracy matters. The aim is faster, better-informed decisions in everyday work.",
  },
  {
    title: "Web applications",
    body: "When off-the-shelf software forces awkward workarounds, we build the application that matches your workflow exactly. Bookings, inventory, records, approvals, reporting — scoped to what your business genuinely needs and nothing it doesn't. Interfaces are designed for the people who use them daily, on desktop and on phones. Everything is documented and built to be maintained over years, not months.",
  },
  {
    title: "Systems integration",
    body: "Most businesses already own the right tools; the tools simply don't talk to each other. We connect CRMs, spreadsheets, calendars, accounting packages and messaging platforms so data moves automatically between them. One update becomes the single source of truth across every system that needs it. That removes double entry, reconciliation work and the version conflicts that follow it.",
  },
  {
    title: "Lead generation and lead management",
    body: "Enquiries arrive across calls, WhatsApp, forms and social channels, and the ones that go unanswered are the ones that cost most. We build systems that capture every lead in one place, score them by intent and value, and trigger structured follow-up automatically. Sales teams get a clear, prioritised queue instead of a scattered inbox. Over time, the data shows which channels genuinely convert.",
  },
  {
    title: "AI-powered solutions",
    body: "Beyond individual features, we design end-to-end solutions around a specific operational challenge. That begins with a close look at the problem, the data available and the outcome worth paying for, then a solution combining automation, integration and AI in the proportions the problem actually calls for. We build, deploy, measure and refine against agreed metrics. You get a working system with evidence of its impact, not a proof of concept.",
  },
];

const whyUs: ReadMoreItem[] = [
  {
    title: "Personalised attention",
    body: "You work directly with the people building your system, not an account manager relaying messages. We learn how your business actually runs before proposing anything, and the solution reflects that understanding.",
  },
  {
    title: "Specialised expertise",
    body: "Our focus is narrow by design: automation, integration and applied AI for business operations. That depth means we recognise patterns quickly and avoid the expensive detours that come with unfamiliar territory.",
  },
  {
    title: "Cost-effective",
    body: "We scope tightly, build in stages and put the highest-return work first, so value arrives early rather than at the end of a long project. You are never paying for capability your business has no use for.",
  },
  {
    title: "Flexibility",
    body: "Requirements shift as a business grows, and our systems are designed to absorb that change. We adjust scope, sequence and delivery around your priorities instead of holding you to a fixed plan that no longer fits.",
  },
  {
    title: "Reliability",
    body: "Systems that run your operations have to work without supervision, so we test thoroughly, monitor after launch and respond when something needs attention. We stay involved after delivery rather than handing over and disappearing.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="border-b border-ink/10 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Services
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Secondhalf is a technology partner for businesses ready to modernise how they operate.
            We work with growing companies — service businesses, property managers, distributors,
            professional firms — that have outgrown manual, repetitive and disconnected ways of
            working. The problem is rarely a lack of software; it is work handed between people and
            tools that were never designed to talk to each other. We fix that with practical,
            scalable technology: automated workflows, connected systems and applications shaped
            around your process. Everything is built together with your team, so the people who use
            it every day recognise it as their own.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-md bg-coral px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-coral-strong"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            What we offer
          </h2>
          <div className="mt-10">
            <ReadMoreList items={services} idPrefix="service" />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Why customers choose Secondhalf
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
            The work speaks for itself, but here is what clients tell us keeps them with us.
          </p>
          <div className="mt-10">
            <ReadMoreList items={whyUs} idPrefix="why" />
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
