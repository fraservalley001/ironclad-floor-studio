import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";
import { TiltCard } from "./TiltCard";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <TiltCard className="group h-full rounded-3xl">
      <article className="card-luxe flex h-full flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={service.image}
            alt={`${service.name} commercial flooring installation`}
            loading="lazy"
            width={1600}
            height={1072}
            className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] tracking-[0.25em] text-primary-glow">
            0{index + 1}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl font-semibold">{service.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary-glow transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Explore Service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </article>
    </TiltCard>
  );
}
