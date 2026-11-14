import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/ironclad-logo.png.asset.json";
import { business, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden border-t border-border bg-surface">
      <div className="grid-lines absolute inset-0 opacity-50" />
      <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logo.url} alt={business.name} className="h-14 w-auto" width={1729} height={370} loading="lazy" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Commercial, institutional and industrial flooring contractor based in Vancouver — vinyl tile, LVP, carpet tile and cove base installed with precision across Canada.
            </p>
            <a href={business.gmb} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm text-primary-glow transition-colors hover:bg-primary/10">
              Find us on Google <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/service-areas", label: "Service Areas" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}><Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary-glow">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted-foreground transition-colors hover:text-primary-glow">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="eyebrow mb-5">Contact Information</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span className="text-muted-foreground">{business.address}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={business.phoneHref} className="text-muted-foreground hover:text-primary-glow">{business.phone}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`mailto:${business.email}`} className="break-all text-muted-foreground hover:text-primary-glow">{business.email}</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span className="text-muted-foreground">{business.hours} — {business.hoursDetail}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Ironclad Commercial Floors location on Google Maps"
            src={business.mapEmbed}
            className="h-72 w-full grayscale-[0.6] invert-[0.9] hue-rotate-180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="font-mono tracking-[0.2em]">BUILT TO BEAR THE LOAD</p>
        </div>
      </div>
    </footer>
  );
}
