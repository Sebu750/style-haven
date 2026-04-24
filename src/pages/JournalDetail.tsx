import { Link, useParams, Navigate } from "react-router-dom";
import { stories } from "@/data/journal";

const JournalDetail = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === id);

  if (!story) return <Navigate to="/journal" replace />;

  const idx = stories.findIndex((s) => s.id === story.id);
  const next = stories[(idx + 1) % stories.length];

  return (
    <article className="animate-fade-in">
      {/* HEADER */}
      <header className="container-luxe pt-16 pb-12 md:pt-24 md:pb-16 text-center max-w-3xl mx-auto">
        <Link to="/journal" className="eyebrow link-underline mb-8 inline-block">← The Journal</Link>
        <p className="eyebrow mt-4 mb-5">{story.category}</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8">
          {story.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          {story.dek}
        </p>
        <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>By {story.author}</span>
          <span className="h-px w-6 bg-border" />
          <span>{story.date}</span>
          <span className="h-px w-6 bg-border" />
          <span>{story.readTime}</span>
        </div>
      </header>

      {/* COVER */}
      <div className="container-luxe">
        <div className="aspect-[3/2] overflow-hidden bg-muted">
          <img
            src={story.image}
            alt={story.title}
            width={1280}
            height={1600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* BODY */}
      <section className="container-luxe py-20 md:py-28">
        <div className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/85">
          {story.body.map((p, i) => (
            <p
              key={i}
              className={i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-accent" : ""}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container-luxe text-center">
          <p className="eyebrow mb-5">Continue Reading</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mx-auto mb-8">
            <Link to={`/journal/${next.id}`} className="hover:text-accent transition-colors">
              {next.title}
            </Link>
          </h2>
          <Link to={`/journal/${next.id}`} className="btn-luxe">Next Story</Link>
        </div>
      </section>
    </article>
  );
};

export default JournalDetail;
