import { useMemo, useState } from "react";
import { collections } from "@/data/marketplace";
import ProductCard from "@/components/ProductCard";

const categories = ["All", "Evening", "Outerwear", "Knitwear", "Accessories", "Footwear"];

const Collections = () => {
  const [active, setActive] = useState("All");
  const items = useMemo(
    () => (active === "All" ? collections : collections.filter((c) => c.category === active)),
    [active]
  );

  return (
    <>
      <section className="container-luxe pt-20 md:pt-28 pb-12 text-center">
        <p className="eyebrow mb-5">Spring / Summer 2025</p>
        <h1 className="font-display text-5xl md:text-7xl mb-6">Collections</h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          A seasonal edit of pieces from our maison of independent designers — quietly considered, carefully crafted.
        </p>
      </section>

      <section className="container-luxe">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-y border-border py-5 mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-24">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Collections;
