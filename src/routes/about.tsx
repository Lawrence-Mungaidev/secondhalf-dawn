import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { ReadMoreList, type ReadMoreItem } from "@/components/ReadMoreList";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "How we are shaped — secondhalf technologies" },
      {
        name: "description",
        content:
          "Trust, integrity, innovation, excellence, security and impact — the principles that shape how Secondhalf builds technology.",
      },
      { property: "og:title", content: "How we are shaped — secondhalf technologies" },
      {
        property: "og:description",
        content: "The principles behind how Secondhalf works with its clients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const values: ReadMoreItem[] = [
  {
    title: "Trust",
    body: "Clients hand us the systems their revenue depends on, and that is not given lightly. We earn it by being straightforward about what a project will take, saying so early when something isn't working, and doing what we said we would do.",
  },
  {
    title: "Integrity",
    body: "We recommend what the business actually needs, even when a smaller engagement is the honest answer. Scope, timelines and costs are set out plainly, and we do not sell capability a client has no use for.",
  },
  {
    title: "Innovation",
    body: "New tools matter only where they solve a real problem better than the current approach. We test emerging automation and AI capabilities against genuine workloads before they go anywhere near a client's operations.",
  },
  {
    title: "Excellence",
    body: "A system is finished when it runs reliably under real conditions, not when the last feature compiles. We hold our work to the standard of the person who will depend on it at the busiest hour of their week.",
  },
  {
    title: "Security",
    body: "Business and customer data is handled with strict access controls, encrypted storage and clear boundaries on what any system can reach. Security decisions are made at design time, not patched on once something is already live.",
  },
  {
    title: "Impact",
    body: "Every engagement is measured against something the business can see: hours recovered, errors removed, enquiries converted, costs reduced. If a system cannot show its effect, it has not finished doing its job.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="border-b border-ink/10 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            How we are shaped
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Companies are shaped less by what they claim and more by the decisions they make when a
            project gets difficult. Secondhalf was shaped by years spent close to how businesses
            really run — the workarounds, the systems nobody trusts, the reports built by hand at
            month end. Six principles came out of that work, and they set how we build.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <ReadMoreList items={values} idPrefix="value" />
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
