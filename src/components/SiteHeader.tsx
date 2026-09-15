import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DiamondMark } from "@/components/DiamondMark";
import { WHATSAPP_URL } from "@/lib/site";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact Us", to: "/" as const, hash: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-3">
        <Link to="/" className="flex items-center gap-3 text-ink" onClick={() => setOpen(false)}>
          <DiamondMark className="h-8 w-11 shrink-0" />
          <span className="font-heading text-lg font-semibold tracking-tight">secondhalf</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
           <Link
              key={item.label}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className="relative py-1 text-sm font-medium text-slate transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-coral after:transition-transform hover:after:scale-x-100"
              activeOptions={{ exact: item.to === "/" && !item.hash }}
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
          </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-coral px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-coral-strong"
          >
            Get Started
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-ink/10 bg-cream px-6 pb-6 pt-2 md:hidden">
          {navItems.map((item) => (
            <Link
                key={item.label}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="relative py-1 text-sm font-medium text-slate transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-coral after:transition-transform hover:after:scale-x-100"
                activeOptions={{ exact: item.to === "/" && !item.hash }}
                activeProps={{ className: "text-ink" }}
              >
                {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-md bg-coral px-5 py-2.5 text-sm font-medium text-white"
          >
            Get Started
          </a>
        </nav>
      ) : null}
    </header>
  );
}
