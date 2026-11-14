import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getService, services } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.name} Installation Vancouver | Ironclad Commercial Floors` : "Service | Ironclad Commercial Floors";
    const desc = s?.short ?? "Commercial flooring services by Ironclad Commercial Floors.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const others = services.filter((o) => o.slug !== s.slug);
  return (
    <>
      <PageHero eyebrow={`Service · ${s.name}`} title={s.headline} text={s.short} image={s.image} crumb={[{ label: "Services", to: "/services" }, { label: s.name }]} />
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={<>Why <span className="text-gradient">{s.name}</span></>} text={s.intro} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {s.benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 90}>
                  <TiltCard className="h-full rounded-2xl">
                    <div className="card-luxe h-full rounded-2xl p-6">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                      <h3 className="mt-4 font-semibold">{b.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal dir="right" className="lg:col-span-5">
            <div className="glass sticky top-28 rounded-3xl p-8">
              <p className="eyebrow">Specifications</p>
              <dl className="mt-6 divide-y divide-border">
                {s.specs.map((sp) => (
                  <div key={sp.label} className="flex justify-between gap-4 py-4 text-sm">
                    <dt className="text-muted-foreground">{sp.label}</dt>
                    <dd className="text-right font-medium">{sp.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="eyebrow mt-8">Ideal For</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.idealFor.map((t) => <span key={t} className="rounded-full border border-primary/30 px-3 py-1 text-xs">{t}</span>)}
              </div>
              <Link to="/contact" className="bg-gradient-primary mt-8 flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold text-primary-foreground shadow-glow">
                Get a {s.name} Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-surface px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Process" title={<>From slab to <span className="text-gradient">sign-off</span></>} />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {s.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card-luxe h-full rounded-3xl p-7">
                  <p className="font-display text-4xl font-semibold text-gradient">0{i + 1}</p>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="More Services" title="Explore other systems" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Reveal key={o.slug}><ServiceCard service={o} index={services.indexOf(o)} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
