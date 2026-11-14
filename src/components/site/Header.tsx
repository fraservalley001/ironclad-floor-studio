import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/ironclad-logo.png.asset.json";
import { business, services } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const linkCls =
  "relative px-1 py-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full";
const activeCls = "text-primary-glow after:w-full";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass py-3 shadow-deep" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label={`${business.name} — Home`}>
          <img
            src={logo.url}
            alt={business.name}
            width={1729}
            height={370}
            className={cn("w-auto transition-all duration-500", scrolled ? "h-10 md:h-11" : "h-11 md:h-14")}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          <Link to="/" className={linkCls} activeProps={{ className: activeCls }} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: activeCls }}>About Us</Link>
          <div className="group relative">
            <Link to="/services" className={cn(linkCls, "flex items-center gap-1")} activeProps={{ className: activeCls }}>
              Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="glass grid grid-cols-2 gap-2 rounded-2xl p-3 shadow-deep">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group/item flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent"
                  >
                    <img src={s.image} alt="" className="h-14 w-16 rounded-lg object-cover" loading="lazy" width={64} height={56} />
                    <div>
                      <p className="text-sm font-semibold group-hover/item:text-primary-glow">{s.name}</p>
                      <p className="line-clamp-1 text-xs text-muted-foreground">{s.headline}</p>
                    </div>
                  </Link>
                ))}
                <Link to="/services" className="col-span-2 mt-1 flex items-center justify-between rounded-xl border border-primary/30 px-4 py-3 text-sm font-medium text-primary-glow hover:bg-primary/10">
                  Explore all services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <Link to="/service-areas" className={linkCls} activeProps={{ className: activeCls }}>Service Areas</Link>
          <Link to="/gallery" className={linkCls} activeProps={{ className: activeCls }}>Gallery</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: activeCls }}>Contact Us</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="hero" className="hidden h-11 px-5 md:inline-flex">
            <a href={business.phoneHref}><Phone /> {business.phone}</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <img src={logo.url} alt={business.name} className="h-10 w-auto" width={1729} height={370} />
          <button type="button" onClick={() => setOpen(false)} className="glass flex h-11 w-11 items-center justify-center rounded-full" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 pt-6" aria-label="Mobile">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
          ].map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-2xl">{l.label}</Link>
          ))}
          <button type="button" onClick={() => setSvcOpen((v) => !v)} className="flex items-center justify-between border-b border-border py-4 text-left font-display text-2xl">
            Services <ChevronDown className={cn("h-5 w-5 transition-transform", svcOpen && "rotate-180")} />
          </button>
          {svcOpen && (
            <div className="flex flex-col gap-1 border-b border-border py-3 pl-4">
              <Link to="/services" onClick={() => setOpen(false)} className="py-2 text-primary-glow">All services</Link>
              {services.map((s) => (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)} className="py-2 text-muted-foreground">{s.name}</Link>
              ))}
            </div>
          )}
          {[
            { to: "/service-areas", label: "Service Areas" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact Us" },
          ].map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-2xl">{l.label}</Link>
          ))}
          <Button asChild variant="hero" size="xl" className="mt-8">
            <a href={business.phoneHref}><Phone /> {business.phone}</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
