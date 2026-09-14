import { createFileRoute, Link } from "@tanstack/react-router";
import { DiamondMark } from "@/components/DiamondMark";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { WHATSAPP_URL } from "@/lib/site";


export const Route = createFileRoute("/")({

  head: () => ({
    meta: [
      { title: "secondhalf technologies — technology, built together." },
      {
        name: "description",
        content:
          "Secondhalf helps businesses move into their next chapter with automation, AI solutions, web applications and systems integration.",
      },
      { property: "og:title", content: "secondhalf technologies" },
      {
        property: "og:description",
        content:
          "Automation, AI solutions, web apps and systems integration for businesses ready to modernise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Secondhalf Technologies",
          alternateName: [
            "Secondhalf",
            "Second Half Tech",
            "Second Half",
            "2ndhalf tech",
            "2ndhalf technology",
            "2nd half technology",
            "Secondhalf website",
          ],
          url: "https://www.secondhalf.tech",
          logo: "https://www.secondhalf.tech/favicon-512.png",
          sameAs: ["https://x.com/Secondhalf_tech"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+254-780-172069",
            contactType: "customer service",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const highlights = ["Automation", "AI solutions", "Web apps", "Systems integration"];

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
          <DiamondMark animated className="mb-8 w-24 text-ink sm:w-32" />
          <p className="font-heading text-sm font-semibold tracking-tight text-coral">
            secondhalf technologies
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Technology, built together.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            We help businesses move into their next chapter through smart automation and
            technology. This is your next chapter, and we build it together with you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-coral px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-coral-strong"
            >
              Get Started
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-ink/20 px-7 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink"
            >
              See our services
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-y border-ink/10 bg-ink text-cream">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-6 py-5 text-sm font-medium sm:gap-x-10">
          {highlights.map((item, i) => (
            <span key={item} className="flex items-center gap-6 sm:gap-10">
              {i > 0 ? <span className="text-coral">•</span> : null}
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl border-l-2 border-coral pl-6 sm:pl-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Our mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              We build the systems that run quietly behind a business automating the repetitive
              work, connecting the tools that never spoke to each other, and putting reliable
              information in front of the people making decisions. Our approach is practical:
              scope tightly, deliver early, and measure the result in hours saved and revenue
              recovered. We stay involved after launch, because a system is only as good as the
              years it keeps working.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center rounded-md border border-ink/20 px-6 py-3 text-base font-medium text-ink transition-colors hover:border-ink"
              >
                See what we've delivered
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
