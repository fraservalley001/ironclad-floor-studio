import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import lvpImg from "@/assets/service-lvp.jpg";
import { services } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Commercial Flooring Services | Ironclad Commercial Floors" },
      { name: "description", content: "Vinyl tile, luxury vinyl plank, carpet tile and cove base installation for commercial buildings in Vancouver and across Canada." },
      { property: "og:title", content: "Flooring Services — Ironclad Commercial Floors" },
      { property: "og:description", content: "Vinyl tile, LVP, carpet tile and cove base for commercial spaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Commercial floors, <span className="text-gradient">mastered.</span></>}
        text="Four specialized systems, each installed over a properly prepared substrate for performance that lasts."
        image={lvpImg}
        crumb={[{ label: "Services" }]}
      />
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl space-y-28">
          {services.map((s, i) => (
            <div key={s.slug} className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal dir={i % 2 ? "right" : "left"} className={i % 2 ? "lg:order-2" : ""}>
                <TiltCard className="rounded-3xl" max={6}>
                  <img src={s.image} alt={`${s.name} installation`} loading="lazy" width={1600} height={1072} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-deep" />
                </TiltCard>
              </Reveal>
              <Reveal delay={120}>
                <p className="font-mono text-xs tracking-[0.3em] text-primary-glow">0{i + 1} / SERVICE</p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{s.name}</h2>
                <p className="mt-5 text-lg text-muted-foreground">{s.short}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.benefits.map((b) => (
                    <li key={b.title} className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rotate-45 bg-primary" />{b.title}</li>
                  ))}
                </ul>
                <Button asChild variant="hero" size="xl" className="mt-8">
                  <Link to="/services/$slug" params={{ slug: s.slug }}>Explore {s.name} <ArrowUpRight /></Link>
                </Button>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
