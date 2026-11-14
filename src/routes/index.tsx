import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { ArrowUpRight, Phone, Star, Quote, PlayCircle } from "lucide-react";
import heroVideo from "@/assets/videos/hero_floor_glide.mp4.asset.json";
import heroPoster from "@/assets/hero-lobby.jpg";
import crewImg from "@/assets/about-crew.jpg";
import healthImg from "@/assets/gallery-healthcare.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TiltCard } from "@/components/site/TiltCard";
import { Counter } from "@/components/site/Counter";
import { CtaBand } from "@/components/site/CtaBand";
import { business, services, whyChoose, reviews, faqs, stats } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ironclad Commercial Floors | Vancouver Commercial Flooring Contractor" },
      { name: "description", content: "Luxury-grade commercial vinyl tile, LVP, carpet tile and cove base installed 24/7 across Vancouver and the Lower Mainland. Free on-site estimates." },
      { property: "og:title", content: "Ironclad Commercial Floors — Vancouver" },
      { property: "og:description", content: "Heavy-duty commercial flooring: vinyl tile, LVP, carpet tile and cove base. Call (604) 540-3999." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <ServicesSection />
      <WhyChoose />
      <Reviews />
      <Faqs />
      <CtaBand />
    </>
  );
}

function Hero() {
  const layer = useRef<HTMLDivElement>(null);
  const stack = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (layer.current) layer.current.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0)`;
      if (stack.current) stack.current.style.transform = `rotateY(${x * 14}deg) rotateX(${y * -10}deg)`;
    };
    const onScroll = () => {
      if (layer.current) layer.current.style.opacity = String(Math.max(0, 1 - window.scrollY / 700));
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="noise relative flex min-h-screen items-center overflow-hidden pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="bg-overlay-side absolute inset-0" />
      <div className="bg-overlay absolute inset-0" />
      <div className="grid-lines absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-24 lg:grid-cols-12">
        <div ref={layer} className="lg:col-span-7" style={{ transition: "transform 0.4s ease-out" }}>
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" /> Vancouver · Lower Mainland · Canada
            </p>
            <h1 className="text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl xl:text-7xl">
              Floors forged for <span className="text-gradient">the heaviest days.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Canada's heavy-duty commercial, institutional and industrial flooring specialist — from meticulous subfloor prep to flawless vinyl tile, LVP, carpet tile and cove base finishes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">Explore Services <ArrowUpRight /></Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
            </div>
            <a href={business.phoneHref} className="mt-8 inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary-glow">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40"><Phone className="h-4 w-4 text-primary" /></span>
              24/7 dispatch · <span className="font-semibold text-foreground">{business.phone}</span>
            </a>
          </Reveal>
        </div>

        {/* 3D floor tile stack */}
        <div className="relative hidden h-[520px] lg:col-span-5 lg:block perspective-1200">
          <div ref={stack} className="absolute inset-0 preserve-3d" style={{ transition: "transform 0.6s ease-out" }}>
            <div className="tile-stack absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
              {services.map((s, i) => (
                <div
                  key={s.slug}
                  className="absolute inset-0 overflow-hidden rounded-2xl border border-primary/30 shadow-deep"
                  style={{ transform: `translateZ(${i * 55}px)` }}
                >
                  <img src={s.image} alt={s.name} className="h-full w-full object-cover" width={300} height={300} />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.3em] text-primary-glow">{s.name.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass absolute bottom-4 right-0 flex items-center gap-3 rounded-2xl px-4 py-3 animate-float-slow">
            <PlayCircle className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-semibold">4 floor systems</p>
              <p className="text-xs text-muted-foreground">Hover the stack to explode it</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-muted-foreground">
        SCROLL
        <span className="h-12 w-px overflow-hidden bg-border">
          <span className="block h-1/2 w-full animate-[scan_1.8s_ease-in-out_infinite] bg-primary" />
        </span>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Vinyl Tile", "Luxury Vinyl Plank", "Carpet Tile", "Cove Base", "Subfloor Prep", "Night Shifts", "Healthcare", "Education", "Retail", "Offices"];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-xl text-foreground/70 md:text-2xl">
            {t}
            <span className="h-2 w-2 rotate-45 bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function AboutPreview() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal dir="left" className="relative">
          <TiltCard className="rounded-3xl" max={6}>
            <img src={crewImg} alt="Ironclad flooring crew installing plank flooring" loading="lazy" width={1600} height={1072} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-deep" />
          </TiltCard>
          <div className="glass absolute -bottom-8 -right-4 w-56 rounded-2xl p-5 md:-right-10">
            <p className="font-display text-4xl font-semibold text-primary-glow">24/7</p>
            <p className="mt-1 text-sm text-muted-foreground">Crews scheduled around your operating hours</p>
          </div>
          <img src={healthImg} alt="" loading="lazy" width={400} height={300} className="absolute -left-6 -top-8 hidden w-40 rotate-[-6deg] rounded-2xl border border-border object-cover shadow-deep md:block" />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About Ironclad"
            title={<>Craft you can stand on. <span className="text-gradient">Every square foot.</span></>}
            text="Ironclad was founded on one simple belief: commercial floors fail from the bottom up. That's why every project starts below the surface — testing, grinding and levelling — before our installers lay a single tile, plank or base."
          />
          <Reveal delay={150}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Institutional & industrial focus", "Certified, insured installers", "Phased, after-hours installs", "Clear itemized proposals"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm"><Icons.CheckCircle2 className="h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-10">
              <Link to="/about">More About Us <ArrowUpRight /></Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative px-6 py-28">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title={<>Four systems. <span className="text-gradient">Zero compromises.</span></>}
            text="Each service is delivered by specialists with the right tools, adhesives and prep for commercial-grade performance."
          />
          <Reveal>
            <Button asChild variant="glass" size="xl"><Link to="/services">Explore All Services <ArrowUpRight /></Link></Button>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 120} className="h-full">
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-28">
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading align="center" eyebrow="Why Choose Us" title={<>The Ironclad <span className="text-gradient">difference</span></>} text="What facility managers, contractors and owners count on when they call us." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[w.icon] ?? Icons.Check;
            return (
              <Reveal key={w.title} delay={i * 90}>
                <TiltCard className="h-full rounded-3xl">
                  <div className="card-luxe group h-full rounded-3xl p-8 transition-colors hover:border-primary/40">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary-glow transition-transform group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-border p-8 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gradient md:text-5xl"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Customer Reviews" title={<>Trusted on the <span className="text-gradient">toughest sites</span></>} />
          <Reveal>
            <a href={business.gmb} target="_blank" rel="noreferrer" className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-colors hover:border-primary/50">
              <div className="flex text-primary-glow">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <span className="text-sm">Read us on Google <ArrowUpRight className="ml-1 inline h-4 w-4" /></span>
            </a>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 100} dir={i % 2 ? "right" : "left"}>
              <TiltCard className="h-full rounded-3xl">
                <figure className="card-luxe relative h-full rounded-3xl p-8">
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
                  <div className="flex text-primary-glow">{Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
                  <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground/90">"{r.text}"</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-primary-foreground">
                      {r.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{r.name}</span>
                      <span className="block text-xs text-muted-foreground">{r.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="relative bg-surface px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="FAQs" title={<>Answers before <span className="text-gradient">you ask</span></>} text="Still curious? Our estimators are a phone call away, day or night." />
          <Reveal delay={100}>
            <Button asChild variant="hero" size="xl" className="mt-8"><a href={business.phoneHref}><Phone /> Call {business.phone}</a></Button>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" dir="right">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="card-luxe rounded-2xl border px-6">
                <AccordionTrigger className="py-5 text-left font-display text-base hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
