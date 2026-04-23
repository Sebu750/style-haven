import { Link, useParams } from "react-router-dom";
import { designers } from "@/data/marketplace";
import { GraduationCap, MapPin, CalendarDays, ArrowUpRight, ArrowLeft } from "lucide-react";

const DesignerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const designer = designers.find((d) => d.id === id);

  if (!designer) {
    return (
      <section className="container-luxe py-32 text-center">
        <p className="eyebrow mb-5">Not Found</p>
        <h1 className="font-display text-4xl mb-6">This designer is no longer with the maison.</h1>
        <Link to="/designers" className="btn-luxe">Back to Designers</Link>
      </section>
    );
  }

  return (
    <>
      {/* Back link */}
      <div className="container-luxe pt-12">
        <Link
          to="/designers"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All Designers
        </Link>
      </div>

      {/* Profile header */}
      <section className="container-luxe pt-12 pb-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={designer.image}
                alt={`Portrait of ${designer.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:pt-6">
            <p className="eyebrow mb-4">{designer.title}</p>
            <h1 className="font-display text-5xl md:text-6xl mb-6 leading-[1.05]">{designer.name}</h1>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl">{designer.bio}</p>

            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8 mb-10">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-muted-foreground" />
                <div>
                  <dt className="eyebrow mb-1">Based</dt>
                  <dd className="text-sm">{designer.city}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 mt-1 text-muted-foreground" />
                <div>
                  <dt className="eyebrow mb-1">Trained</dt>
                  <dd className="text-sm leading-relaxed">{designer.university}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="w-4 h-4 mt-1 text-muted-foreground" />
                <div>
                  <dt className="eyebrow mb-1">Class of</dt>
                  <dd className="text-sm">{designer.graduationYear}</dd>
                </div>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-border">
              <span className="eyebrow">Follow</span>
              {designer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm hover:text-muted-foreground transition-colors"
                >
                  {s.label}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Collection — Moodboard */}
      <section className="container-luxe pb-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">Latest Collection — {designer.latestCollection.season}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {designer.latestCollection.name}
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted-foreground leading-relaxed">
              {designer.latestCollection.statement}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[140px] md:auto-rows-[180px] gap-3 md:gap-4">
          {designer.latestCollection.moodboard.map((src, i) => {
            const patterns = [
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-2",
              "col-span-2 row-span-1",
              "col-span-1 row-span-1",
              "col-span-1 row-span-2",
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
            ];
            return (
              <figure
                key={i}
                className={`${patterns[i % patterns.length]} overflow-hidden bg-muted group`}
              >
                <img
                  src={src}
                  alt={`${designer.latestCollection.name} moodboard ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </figure>
            );
          })}
        </div>
      </section>

      {/* Previous Collections */}
      <section className="container-luxe pb-24">
        <div className="border-t border-border pt-12 mb-10">
          <p className="eyebrow mb-4">Archive</p>
          <h2 className="font-display text-4xl md:text-5xl">Previous Collections</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {designer.previousCollections.map((c) => (
            <article key={c.id} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-muted mb-5">
                <img
                  src={c.image}
                  alt={`${c.name} — ${c.season}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <p className="eyebrow mb-2">{c.season}</p>
              <h3 className="font-display text-2xl">{c.name}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container-luxe pb-32">
        <div className="border-t border-border pt-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">In their words</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              About {designer.name.split(" ")[0]}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-foreground/90 mb-10 max-w-2xl">
              {designer.about}
            </p>
            <dl className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <dt className="eyebrow mb-2">University</dt>
                <dd className="text-sm leading-relaxed">{designer.university}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Location</dt>
                <dd className="text-sm">{designer.city}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Graduated</dt>
                <dd className="text-sm">{designer.graduationYear}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignerDetail;
