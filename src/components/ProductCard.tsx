import { Product } from "@/data/marketplace";

const ProductCard = ({ item }: { item: Product }) => {
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
        <p className="text-xs text-muted-foreground italic line-clamp-1">{item.material}</p>
        <div className="flex items-center justify-between pt-1">
          <p className="text-sm">€ {item.price.toLocaleString()}</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {item.sizes.length > 1 ? `${item.sizes[0]}–${item.sizes[item.sizes.length - 1]}` : item.sizes[0]}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
