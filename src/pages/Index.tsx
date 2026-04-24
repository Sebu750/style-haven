import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import { collections, designers } from "@/data/marketplace";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const featured = collections.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Aurelia Spring Summer 2025 hero — model in flowing silk gown"
          width={1600}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative container-luxe h-full flex flex-col justify-end pb-20 md:pb-28 animate-fade-in">
          <p className="eyebrow text-background/80 mb-6">Spring / Summer 2025</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-background max-w-4xl leading-[1.05] mb-8">
            The Art of Adornment.
            <br />
            <span className="italic font-light">Quietly Extraordinary.</span>
          </h1>
          <p className="text-background/85 max-w-md text-base md:text-lg leading-relaxed mb-10">
            A curated marketplace of independent ateliers — for those who measure luxury in craftsmanship, not logos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/collections" className="btn-luxe-light">Shop Collections</Link>
            <Link to="/designers" className="text-background/90 link-underline text-xs uppercase tracking-[0.25em] self-center">
              Meet the Designers →
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL STATEMENT */}
      <section className="container-luxe py-24 md:py-32 text-center">
        <p className="eyebrow mb-8">A Maison of Makers</p>
        <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
          Aurelia exists for the considered wardrobe — pieces conceived in small ateliers and chosen with intention.
        </h2>
      </section>

      {/* FEATURED PIECES */}
      <section className="container-luxe pb-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-3">The Edit</p>
            <h2 className="font-display text-4xl md:text-5xl">Featured Pieces</h2>
          </div>
          <Link to="/collections" className="hidden md:inline-block link-underline text-xs uppercase tracking-[0.25em]">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {featured.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* DESIGNERS PREVIEW */}
      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="container-luxe">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">In Conversation With</p>
            <h2 className="font-display text-4xl md:text-5xl">Featured Designers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {designers.map((d) => (
              <Link key={d.id} to="/designers" className="group text-center">
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-muted">
                  <img
                    src={d.image}
                    alt={`Portrait of ${d.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="eyebrow mb-2">{d.title}</p>
                <h3 className="font-display text-2xl mb-1">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.city}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL CTA */}
      <section className="container-luxe py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">The Journal</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            Stories from the atelier floor.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            From bespoke fittings in Milanese workrooms to the slow craft of Japanese indigo dyeing, our editorial follows the makers who shape the seasons.
          </p>
          <Link to="/journal" className="btn-luxe">Read the Journal</Link>
        </div>
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img src={collections[3].image} alt="Editorial story" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </section>
    </>
  );
};

export default Index;
