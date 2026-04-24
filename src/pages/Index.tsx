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

      {/* SHOP BY OCCASION */}
      <section className="container-luxe py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Curated For</p>
          <h2 className="font-display text-4xl md:text-5xl">Shop by Occasion</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { label: "Bridal", caption: "Heirloom couture", image: collections[0].image },
            { label: "Festive", caption: "Eid & celebrations", image: collections[1].image },
            { label: "Menswear", caption: "Sherwanis & formals", image: collections[2].image },
            { label: "Everyday Pret", caption: "Quiet daily wear", image: collections[4].image },
          ].map((o) => (
            <Link key={o.label} to="/collections" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <img
                  src={o.image}
                  alt={`${o.label} — ${o.caption}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-background">
                  <h3 className="font-display text-2xl mb-1">{o.label}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-background/85">{o.caption}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ATELIER PROMISE */}
      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="container-luxe">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">The Aurelia Promise</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
              Considered at every stitch.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: "Hand-Crafted",
                body: "Every piece is made in independent ateliers — by karigars, weavers and cutters whose names we know.",
              },
              {
                title: "Traceable Provenance",
                body: "From the dye house to the final stitch, each garment carries a record of the hands that shaped it.",
              },
              {
                title: "Lifetime Care",
                body: "Complimentary alterations, mending and seasonal restoration — pieces meant to be passed on.",
              },
            ].map((p) => (
              <div key={p.title} className="text-center">
                <div className="w-12 h-px bg-foreground/40 mx-auto mb-6" />
                <h3 className="font-display text-2xl mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">{p.body}</p>
              </div>
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
            From bespoke fittings in Lahore's Walled City to the slow craft of ajrak block-printing in Bhit Shah, our editorial follows the makers who shape the seasons.
          </p>
          <Link to="/journal" className="btn-luxe">Read the Journal</Link>
        </div>
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img src={collections[3].image} alt="Editorial story" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-border">
        <div className="container-luxe py-24 md:py-32 text-center max-w-2xl">
          <p className="eyebrow mb-5">The Correspondence</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            Letters from the atelier.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Seasonal previews, private viewings and dispatches from our designers — delivered to a considered few.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:border-b sm:border-foreground/30 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-transparent py-3 px-1 text-sm placeholder:text-muted-foreground focus:outline-none border-b sm:border-b-0 border-foreground/30"
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.25em] py-3 px-2 hover:opacity-60 transition-opacity"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Index;
