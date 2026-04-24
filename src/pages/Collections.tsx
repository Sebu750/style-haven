import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { themedCollections, products } from "@/data/marketplace";
import ProductCard from "@/components/ProductCard";

const categories = ["All", "Bridal", "Menswear", "Pret"];

const Collections = () => {
  const [active, setActive] = useState("All");
  const filteredCollections = useMemo(() => {
    if (active === "All") return themedCollections;
    return themedCollections.filter((col) =>
      col.productIds.some((pid) => products.find((p) => p.id === pid)?.category === active)
    );
  }, [active]);

  return (
    <>
      <section className="container-luxe pt-20 md:pt-28 pb-12 text-center">
        <p className="eyebrow mb-5">Themed Editions</p>
        <h1 className="font-display text-5xl md:text-7xl mb-6">Collections</h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          A collection is a curated story — a colour palette and a concept, told through several pieces from a single atelier.
        </p>
      </section>

      <section className="container-luxe">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-y border-border py-5 mb-20">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${
                active === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-28 md:space-y-36 pb-24">
          {filteredCollections.map((col) => {
            const items = col.productIds
              .map((pid) => products.find((p) => p.id === pid)!)
              .filter(Boolean);
            return (
              <article key={col.id}>
                <header className="grid md:grid-cols-12 gap-8 mb-12 items-end">
                  <div className="md:col-span-7">
                    <p className="eyebrow mb-3">{col.season} · {col.theme}</p>
                    <h2 className="font-display text-4xl md:text-5xl leading-tight mb-3">
                      {col.name}
                    </h2>
                    <Link
                      to={`/designers/${col.designerId}`}
                      className="text-sm text-muted-foreground link-underline"
                    >
                      by {col.designer}
                    </Link>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-muted-foreground leading-relaxed">{col.statement}</p>
                  </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Collections;
