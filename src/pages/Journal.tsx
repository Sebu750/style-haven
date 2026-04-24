import { Link } from "react-router-dom";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";

type Story = {
  id: string;
  title: string;
  dek: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

const stories: Story[] = [
  {
    id: "j1",
    title: "Inside the Petites Mains of Place Vendôme",
    dek: "A morning with Isolde Moreau and the seamstresses who carry centuries of couture in their fingertips.",
    category: "Atelier",
    author: "Camille Aubert",
    date: "April 2025",
    readTime: "6 min read",
    image: journal1,
    body: [
      "It is just past seven when the first lamp flickers on above a worktable in the rue Cambon. Outside, Paris is still grey. Inside, a length of ivory silk catches the warm pool of light and seems to breathe with it.",
      "Isolde Moreau moves through the room without speaking. There is no need. Her seamstresses — the petites mains — have been threading the same hand-rolled hems for twenty seasons, and the choreography of a couture morning runs on something older than instruction.",
      "\"A gown is finished when no one can tell where it began,\" she says, finally, holding a seam to the window. The stitches are invisible. The silk falls like water. This is the quiet luxury that no campaign can manufacture: time, given generously, by hands that know.",
    ],
  },
  {
    id: "j2",
    title: "The Slow Blue: Indigo Dyeing in Tokushima",
    dek: "Following Elara Chen to a four-hundred-year-old dye house, where colour is a season unto itself.",
    category: "Craft",
    author: "Mariko Tanaka",
    date: "March 2025",
    readTime: "8 min read",
    image: journal2,
    body: [
      "There are eighty-six vats sunk into the earthen floor of the Watanabe workshop, and each one is, in a sense, alive. The indigo ferments. It breathes. It must be fed — with sake, with lime, with attention — every day for a hundred years.",
      "Elara Chen has come to learn, not to commission. She lowers a length of undyed linen into the vat and watches it surface a deep, mossy green that will only turn blue once it meets the air. \"You can't rush a colour that old,\" she says. \"You can only show up for it.\"",
      "The pieces dyed here will become part of her Terre Vivante collection — a small run, numbered, sold with a card that names the vat. The blue will soften over years of wear. That, she tells me, is the point.",
    ],
  },
  {
    id: "j3",
    title: "A Walk Through Brera with Silas Vance",
    dek: "On soft shoulders, second-generation tailoring, and the Milanese art of dressing without effort.",
    category: "Conversation",
    author: "Tomas Reali",
    date: "February 2025",
    readTime: "5 min read",
    image: journal3,
    body: [
      "Silas Vance walks the way his father cuts a jacket — without hurry, without waste. We meet in the small courtyard behind his Brera atelier, the same one he played in as a child while his father chalked muslin upstairs.",
      "\"A suit should disappear,\" he tells me, lighting a cigarette he won't finish. \"If you notice it before you notice the person, I've failed.\" His Sotto Voce collection is built around this disappearance: soft shoulders, raw inner construction, fabrics chosen for the way they'll look in a decade.",
      "We end at a bar near the Pinacoteca, where he orders an espresso and adjusts nothing. The camel coat moves with him. Nobody turns to look. He would consider this a compliment.",
    ],
  },
];

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
          <div className="aspect-[4/5] overflow-hidden bg-muted order-1 md:order-none">
            <img
              src={hero.image}
              alt={hero.title}
              width={1280}
              height={1600}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-5">{hero.category} · Featured</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              {hero.title}
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
            <a href={`#${hero.id}`} className="btn-luxe">Read the Story</a>
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
              <a key={s.id} href={`#${s.id}`} className="group block">
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FULL STORIES */}
      <section className="container-luxe py-24 md:py-32 space-y-32">
        {stories.map((s, idx) => (
          <article key={s.id} id={s.id} className="scroll-mt-24 max-w-3xl mx-auto">
            <p className="eyebrow text-center mb-5">Story {String(idx + 1).padStart(2, "0")} · {s.category}</p>
            <h2 className="font-display text-4xl md:text-6xl text-center leading-[1.1] mb-8">
              {s.title}
            </h2>
            <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12">
              <span>By {s.author}</span>
              <span className="h-px w-6 bg-border" />
              <span>{s.date}</span>
              <span className="h-px w-6 bg-border" />
              <span>{s.readTime}</span>
            </div>
            <div className="aspect-[3/2] overflow-hidden bg-muted mb-12">
              <img
                src={s.image}
                alt={s.title}
                width={1280}
                height={1600}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85 first-letter:font-display">
              {s.body.map((p, i) => (
                <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-accent" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Journal;
