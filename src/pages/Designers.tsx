import { designers } from "@/data/marketplace";

const Designers = () => {
  return (
    <>
      <section className="container-luxe pt-20 md:pt-28 pb-16 text-center">
        <p className="eyebrow mb-5">The Maison</p>
        <h1 className="font-display text-5xl md:text-7xl mb-6">Designers</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Independent ateliers from Paris, Milan, Copenhagen and beyond — chosen for their devotion to craft and the integrity of their making.
        </p>
      </section>

      <section className="container-luxe pb-24 space-y-32">
        {designers.map((d, i) => (
          <article
            key={d.id}
            className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={d.image}
                alt={`Portrait of ${d.name}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">{d.title} — {d.city}</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">{d.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">{d.bio}</p>
              <div className="flex items-center gap-8 mb-10">
                <div>
                  <div className="font-display text-3xl">{d.pieces}</div>
                  <div className="eyebrow mt-1">Pieces</div>
                </div>
                <div>
                  <div className="font-display text-3xl">SS25</div>
                  <div className="eyebrow mt-1">Season</div>
                </div>
              </div>
              <a href="/collections" className="btn-luxe">View Collection</a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Designers;
