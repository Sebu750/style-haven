import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import { Product, designers, themedCollections } from "@/data/marketplace";
import { useState, useEffect } from "react";

type Props = {
  product: Product | null;
  open: boolean;
  onClose: () => void;
};

const ProductDetailModal = ({ product, open, onClose }: Props) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] ?? null);
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) return null;

  const designer = designers.find((d) => d.name === product.designer);
  const collection = themedCollections.find((c) => c.id === product.collectionId);

  // Build a small gallery: hero + a couple of related visuals from the same collection
  const related = collection
    ? collection.productIds
        .map((id) => themedCollections.flatMap((c) => c.productIds).includes(id) ? id : null)
        .filter(Boolean) as string[]
    : [];
  const gallery = Array.from(
    new Set([
      product.image,
      ...(designer?.latestCollection.moodboard.slice(0, 3) ?? []),
    ])
  );

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-6xl w-[95vw] p-0 gap-0 overflow-hidden max-h-[92vh] overflow-y-auto border-border">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <DialogDescription className="sr-only">{product.material}</DialogDescription>

        <div className="grid md:grid-cols-2">
          {/* Gallery */}
          <div className="bg-secondary">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={activeImage ?? product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-1 p-1">
                {gallery.slice(0, 4).map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(src)}
                    className={`aspect-square overflow-hidden bg-muted transition-opacity ${
                      activeImage === src ? "opacity-100 ring-1 ring-foreground" : "opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-8 md:p-12 flex flex-col">
            <p className="eyebrow mb-3">{product.season} · {product.category}</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-2">
              {product.name}
            </h2>
            {designer && (
              <Link
                to={`/designers/${designer.id}`}
                onClick={onClose}
                className="text-sm text-muted-foreground link-underline w-fit mb-6"
              >
                by {designer.name}
              </Link>
            )}

            <p className="text-2xl font-display mb-8">€ {product.price.toLocaleString()}</p>

            {/* Description */}
            <div className="space-y-5 mb-8">
              <div>
                <p className="eyebrow mb-2">Description</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {collection?.statement ?? `A signature piece from ${product.designer}'s atelier — hand-finished in small batches and built to be worn for a lifetime.`}
                </p>
              </div>

              <div>
                <p className="eyebrow mb-2">Material</p>
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  {product.material}
                </p>
              </div>

              {/* Sizes */}
              <div>
                <p className="eyebrow mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-[44px] px-3 h-11 text-xs uppercase tracking-[0.2em] border transition-colors ${
                        selectedSize === s
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
              <button className="btn-luxe flex-1">Add to Bag</button>
              {designer && (
                <Link
                  to={`/designers/${designer.id}`}
                  onClick={onClose}
                  className="text-xs uppercase tracking-[0.25em] self-center link-underline"
                >
                  Visit Atelier →
                </Link>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
