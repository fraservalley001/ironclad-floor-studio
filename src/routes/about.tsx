import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import crewImg from "@/assets/about-crew.jpg";
import lobbyImg from "@/assets/hero-lobby.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Ironclad Commercial Floors Vancouver" },
      { name: "description", content: "Meet Ironclad Commercial Floors — a Vancouver-based commercial flooring contractor built on subfloor-first craftsmanship." },
      { property: "og:title", content: "About Ironclad Commercial Floors" },
      { property: "og:description", content: "Subfloor-first commercial flooring specialists serving Vancouver and Canada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { title: "Below the surface first", text: "Every floor begins with moisture, flatness and bond testing — the work most people never see." },
  { title: "Respect for operations", text: "We plan around your hours, tenants and patients so the building keeps working." },
  { title: "Craft that shows", text: "Tight seams, true lines and clean corners are our signature on every job." },
  { title: "Straight talk", text: "Honest assessments, itemized quotes and no surprise extras." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Built from the <span className="text-gradient">subfloor up.</span></>}
        text="A Vancouver flooring contractor dedicated to commercial, institutional and industrial spaces that demand more from every square foot."
        image={lobbyImg}
        crumb={[{ label: "About Us" }]}
      />
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={<>Floors that carry <span className="text-gradient">real weight</span></>}
              text="Ironclad started with a crew of installers who were tired of seeing beautiful floors fail within a year because the slab underneath was never properly prepared. Today we bring that same discipline to schools, clinics, offices, retail and industrial facilities across the Lower Mainland and beyond."
            />
            <Reveal delay={120}>
              <ul className="mt-8 space-y-4">
                {["Commercial, institutional & industrial specialists", "Vinyl tile, LVP, carpet tile and cove base", "Night, weekend and phased scheduling", "Fully licensed, insured and WorkSafeBC covered"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" /> {t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal dir="right">
            <TiltCard className="rounded-3xl" max={6}>
              <img src={crewImg} alt="Ironclad crew installing commercial flooring" loading="lazy" width={1600} height={1072} className="w-full rounded-3xl object-cover shadow-deep" />
            </TiltCard>
          </Reveal>
        </div>
      </section>
      <section className="bg-surface px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="What We Stand For" title={<>Our <span className="text-gradient">values</span></>} />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <TiltCard className="h-full rounded-3xl">
                  <div className="card-luxe h-full rounded-3xl p-8">
                    <p className="font-mono text-xs tracking-[0.3em] text-primary-glow">0{i + 1}</p>
                    <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
