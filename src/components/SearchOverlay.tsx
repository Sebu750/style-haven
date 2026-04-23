import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { collections, designers } from "@/data/marketplace";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SearchOverlay = ({ open, onClose }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const q = query.trim().toLowerCase();

  const designerHits = useMemo(() => {
    if (!q) return [];
    return designers.filter((d) =>
      [d.name, d.title, d.city, d.bio].some((f) => f.toLowerCase().includes(q))
    );
  }, [q]);

  const collectionHits = useMemo(() => {
    if (!q) return [];
    return collections.filter((c) =>
      [c.name, c.category, c.designer, c.season].some((f) => f.toLowerCase().includes(q))
    );
  }, [q]);

  const hasResults = designerHits.length + collectionHits.length > 0;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="container-luxe pt-8">
        <div className="flex items-center justify-between border-b border-border pb-5">
          <p className="eyebrow">Search</p>
          <button
            aria-label="Close search"
            onClick={onClose}
            className="hover:text-muted-foreground transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        <div className="flex items-center gap-4 border-b border-border py-8">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" strokeWidth={1.25} />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search designers, collections, seasons…"
            className="w-full bg-transparent border-0 outline-none font-display text-3xl md:text-5xl placeholder:text-muted-foreground/50"
          />
        </div>

        {!q && (
          <div className="py-16 text-center">
            <p className="eyebrow mb-4">Suggestions</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {["Evening", "Outerwear", "Paris", "SS25", "Isolde", "Cashmere"].map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {q && !hasResults && (
          <div className="py-24 text-center">
            <p className="font-display text-2xl mb-2">No results for "{query}"</p>
            <p className="text-sm text-muted-foreground">Try a different designer, season, or category.</p>
          </div>
        )}

        {q && designerHits.length > 0 && (
          <section className="py-12 border-b border-border">
            <p className="eyebrow mb-8">Designers · {designerHits.length}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {designerHits.map((d) => (
                <Link
                  key={d.id}
                  to={`/designers/${d.id}`}
                  onClick={onClose}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-muted mb-4">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="eyebrow mb-1">{d.city}</p>
                  <h3 className="font-display text-xl">{d.name}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {q && collectionHits.length > 0 && (
          <section className="py-12 pb-24">
            <p className="eyebrow mb-8">Pieces · {collectionHits.length}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {collectionHits.map((c) => (
                <Link
                  key={c.id}
                  to="/collections"
                  onClick={onClose}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-muted mb-3">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="eyebrow mb-1">{c.designer}</p>
                  <h3 className="font-display text-base mb-0.5">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">€ {c.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
