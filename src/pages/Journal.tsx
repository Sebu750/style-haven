import { Link } from "react-router-dom";
import { stories } from "@/data/journal";

const Journal = () => {
  const [hero, ...rest] = stories;

  return (
    <>
      {/* HEADER */}
      <section className="container-luxe pt-20 pb-16 md:pt-28 md:pb-20 text-center animate-fade-in">
        <p className="eyebrow mb-5">The Journal</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl mx-auto mb-6">
          Stories from the atelier floor.
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Dispatches from the workrooms, dye houses and quiet courtyards where the season is being slowly made.
        </p>
      </section>

      {/* HERO STORY */}
      <section className="container-luxe pb-24 md:pb-32">
        <article className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Link to={`/journal/${hero.id}`} className="aspect-[4/5] overflow-hidden bg-muted order-1 md:order-none group">
            <img
              src={hero.image}
              alt={hero.title}
              width={1280}
              height={1600}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
          </Link>
          <div>
            <p className="eyebrow mb-5">{hero.category} · Featured</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              <Link to={`/journal/${hero.id}`} className="hover:text-accent transition-colors">
                {hero.title}
              </Link>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-md">
              {hero.dek}
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span>{hero.author}</span>
              <span className="h-px w-6 bg-border" />
              <span>{hero.date}</span>
              <span className="h-px w-6 bg-border" />
              <span>{hero.readTime}</span>
            </div>
            <Link to={`/journal/${hero.id}`} className="btn-luxe">Read the Story</Link>
          </div>
        </article>
      </section>

      {/* MORE STORIES — INDEX */}
      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="container-luxe">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="eyebrow mb-3">Recent Dispatches</p>
              <h2 className="font-display text-4xl md:text-5xl">More from the Journal</h2>
            </div>
            <Link to="/collections" className="hidden md:inline-block link-underline text-xs uppercase tracking-[0.25em]">
              Shop the Edit
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {rest.map((s) => (
              <Link key={s.id} to={`/journal/${s.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-muted">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="eyebrow mb-3">{s.category} · {s.date}</p>
                <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">{s.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journal;
