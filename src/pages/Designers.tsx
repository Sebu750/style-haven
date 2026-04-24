import { Link } from "react-router-dom";
import { designers } from "@/data/marketplace";
import { ArrowUpRight } from "lucide-react";

const Designers = () => {
  const featured = designers.slice(0, 2);
  const all = designers;

  return (
    <>
      {/* Intro */}
      <section className="container-luxe pt-20 md:pt-28 pb-16 text-center">
        <p className="eyebrow mb-5">The Maison</p>
        <h1 className="font-display text-5xl md:text-7xl mb-6">Designers</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Independent ateliers from Lahore, Karachi and Islamabad — chosen for their devotion to Pakistani craft and the integrity of their making.
        </p>
      </section>

      {/* Featured Designers */}
      <section className="container-luxe pb-24">
        <div className="flex items-end justify-between border-b border-border pb-5 mb-12">
          <div>
            <p className="eyebrow mb-3">In Focus</p>
            <h2 className="font-display text-3xl md:text-4xl">Featured Designers</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
            This season's spotlight on the makers shaping our maison.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {featured.map((d) => (
            <Link
              key={d.id}
              to={`/designers/${d.id}`}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted mb-6">
                <img
                  src={d.image}
                  alt={`Portrait of ${d.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow mb-3">{d.title} — {d.city}</p>
                  <h3 className="font-display text-3xl md:text-4xl mb-3 leading-tight">{d.name}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">{d.bio}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 mt-2 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Designers */}
      <section className="container-luxe pb-32">
        <div className="flex items-end justify-between border-b border-border pb-5 mb-12">
          <div>
            <p className="eyebrow mb-3">The Directory</p>
            <h2 className="font-display text-3xl md:text-4xl">All Designers</h2>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {all.length} Ateliers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {all.map((d) => (
            <Link key={d.id} to={`/designers/${d.id}`} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-muted mb-5">
                <img
                  src={d.image}
                  alt={`Portrait of ${d.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <p className="eyebrow mb-2">{d.city}</p>
              <h3 className="font-display text-2xl mb-1">{d.name}</h3>
              <p className="text-sm text-muted-foreground">{d.title} · {d.pieces} Pieces</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Designers;
