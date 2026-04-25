import { useMemo, useState } from "react";
import { products, designers, Product } from "@/data/marketplace";
import ProductCard from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";

const Shop = () => {
  const designerNames = useMemo(() => designers.map((d) => d.name), []);
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<Product | null>(null);

  const grouped = useMemo(() => {
    const list = active === "All" ? designerNames : [active];
    return list
      .map((name) => ({
        designer: designers.find((d) => d.name === name)!,
        items: products.filter((c) => c.designer === name),
      }))
      .filter((g) => g.items.length > 0);
  }, [active, designerNames]);

  return (
    <>
      <section className="container-luxe pt-20 md:pt-28 pb-12 text-center">
        <p className="eyebrow mb-5">The Shop</p>
        <h1 className="font-display text-5xl md:text-7xl mb-6">By the Atelier</h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Browse pieces grouped by the designer who made them — each name a small house, each garment a signature.
        </p>
      </section>

      <section className="container-luxe">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-y border-border py-5 mb-20">
          {["All", ...designerNames].map((name) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              className={`text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${
                active === name ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="space-y-24 md:space-y-32 pb-24">
          {grouped.map(({ designer, items }) => (
            <div key={designer.id}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 pb-6 border-b border-border">
                <div>
                  <p className="eyebrow mb-3">{designer.title}</p>
                  <h2 className="font-display text-3xl md:text-4xl">{designer.name}</h2>
                  <p className="text-sm text-muted-foreground mt-2">{designer.city}</p>
                </div>
                <a
                  href={`/designers/${designer.id}`}
                  className="link-underline text-xs uppercase tracking-[0.25em] self-start md:self-end"
                >
                  Visit Atelier →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="text-left"
                    aria-label={`View details for ${item.name}`}
                  >
                    <ProductCard item={item} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductDetailModal
        product={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
};

export default Shop;
