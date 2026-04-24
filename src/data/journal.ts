import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";

export type Story = {
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

export const stories: Story[] = [
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
