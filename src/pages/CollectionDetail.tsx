import { Link, useParams } from "react-router-dom";
import { themedCollections, products } from "@/data/marketplace";
import ProductCard from "@/components/ProductCard";

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const collection = themedCollections.find((c) => c.id === id);

  if (!collection) {
    return (
      <section className="container-luxe py-32 text-center">
        <p className="eyebrow mb-4">Not found</p>
        <h1 className="font-display text-4xl mb-6">Collection unavailable</h1>
        <Link to="/collections" className="link-underline text-sm">
          Return to all collections
        </Link>
      </section>
    );
  }

  const items = collection.productIds
    .map((pid) => products.find((p) => p.id === pid))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* Cover */}
      <section className="relative h-[68vh] min-h-[440px] w-full overflow-hidden">
        <img
          src={collection.cover}
          alt={collection.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 container-luxe h-full flex flex-col justify-end pb-16 text-background">
          <p className="eyebrow mb-4 text-background/80">
            {collection.season} · {collection.theme}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            {collection.name}
          </h1>
          <Link
            to={`/designers/${collection.designerId}`}
            className="mt-4 text-sm text-background/85 link-underline w-fit"
          >
            by {collection.designer}
          </Link>
        </div>
      </section>

      {/* Story */}
      <section className="container-luxe py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">The Story</p>
            <h2 className="font-display text-3xl leading-tight">{collection.theme}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-muted-foreground leading-relaxed first-letter:font-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              {collection.statement}
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container-luxe pb-28">
        <div className="flex items-end justify-between border-b border-border pb-5 mb-12">
          <div>
            <p className="eyebrow mb-2">The Pieces</p>
            <h2 className="font-display text-3xl">{items.length} {items.length === 1 ? "Look" : "Looks"}</h2>
          </div>
          <Link to="/collections" className="text-xs uppercase tracking-[0.25em] link-underline">
            All Collections
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {items.map((item) => (
            <article key={item.id} className="space-y-5">
              <ProductCard item={item} />
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>Material</span>
                  <span>Sizes</span>
                </div>
                <div className="flex justify-between gap-6 text-xs">
                  <p className="italic text-muted-foreground leading-relaxed flex-1">
                    {item.material}
                  </p>
                  <p className="tracking-[0.15em] whitespace-nowrap">
                    {item.sizes.join(" · ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default CollectionDetail;
