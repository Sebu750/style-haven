import { Collection } from "@/data/marketplace";

const ProductCard = ({ item }: { item: Collection }) => {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-5">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-background bg-foreground/70 px-3 py-1">
          {item.season}
        </div>
      </div>
      <div className="space-y-1">
        <p className="eyebrow">{item.designer}</p>
        <h3 className="font-display text-xl">{item.name}</h3>
        <p className="text-sm text-muted-foreground">€ {item.price.toLocaleString()}</p>
      </div>
    </article>
  );
};

export default ProductCard;
