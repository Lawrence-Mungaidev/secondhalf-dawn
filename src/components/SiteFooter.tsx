import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { BrandMark, Wordmark } from "@/components/BrandMark";
import { PHONE_PRIMARY, PHONE_SECONDARY } from "@/lib/site";

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface text-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3"><BrandMark className="h-10 w-10" /><Wordmark /></div>
          <p className="mt-2 text-sm text-muted-foreground">Technology, built together.</p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-accent-hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-accent-hover">
                Services
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="transition-colors hover:text-accent-hover">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-accent-hover">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" hash="contact" className="transition-colors hover:text-accent-hover">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a
                href="mailto:secondhalftech@gmail.com"
                className="hover:text-accent-hover"
              >
                secondhalftech@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="hover:text-accent-hover">
                {PHONE_PRIMARY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a
                href={`tel:${PHONE_SECONDARY.replace(/\s/g, "")}`}
                className="hover:text-accent-hover"
              >
                {PHONE_SECONDARY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <XLogo className="h-4 w-4 text-accent" />
              <a
                href="https://x.com/Secondhalf_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-hover"
              >
                @Secondhalf_tech
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          © 2026 Secondhalf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}