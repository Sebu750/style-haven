import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import collection5 from "@/assets/collection-5.jpg";
import collection6 from "@/assets/collection-6.jpg";
import designer1 from "@/assets/designer-1.jpg";
import designer2 from "@/assets/designer-2.jpg";
import designer3 from "@/assets/designer-3.jpg";
import mood1 from "@/assets/mood-1.jpg";
import mood2 from "@/assets/mood-2.jpg";
import mood3 from "@/assets/mood-3.jpg";
import mood4 from "@/assets/mood-4.jpg";
import mood5 from "@/assets/mood-5.jpg";
import mood6 from "@/assets/mood-6.jpg";
import mood7 from "@/assets/mood-7.jpg";
import mood8 from "@/assets/mood-8.jpg";
import mood9 from "@/assets/mood-9.jpg";
import mood10 from "@/assets/mood-10.jpg";
import mood11 from "@/assets/mood-11.jpg";
import mood12 from "@/assets/mood-12.jpg";
import mood13 from "@/assets/mood-13.jpg";
import mood14 from "@/assets/mood-14.jpg";
import prev1 from "@/assets/prev-1.jpg";
import prev2 from "@/assets/prev-2.jpg";
import prev3 from "@/assets/prev-3.jpg";

export type Collection = {
  id: string;
  name: string;
  category: string;
  designer: string;
  price: number;
  image: string;
  season: string;
};

export const collections: Collection[] = [
  { id: "c1", name: "Soie Aurora Gown", category: "Evening", designer: "Isolde Moreau", price: 2890, image: collection1, season: "SS25" },
  { id: "c2", name: "Camel Tailored Coat", category: "Outerwear", designer: "Silas Vance", price: 1750, image: collection2, season: "FW24" },
  { id: "c3", name: "Marbré Leather Tote", category: "Accessories", designer: "Elara Chen", price: 1290, image: collection3, season: "SS25" },
  { id: "c4", name: "Ivory Cashmere Knit", category: "Knitwear", designer: "Elara Chen", price: 690, image: collection4, season: "FW24" },
  { id: "c5", name: "Noir Silhouette Dress", category: "Evening", designer: "Isolde Moreau", price: 2150, image: collection5, season: "SS25" },
  { id: "c6", name: "Heritage Leather Boots", category: "Footwear", designer: "Silas Vance", price: 1180, image: collection6, season: "FW24" },
];

export type SocialLink = { label: string; href: string };
export type PreviousCollection = {
  id: string;
  name: string;
  season: string;
  image: string;
};

export type Designer = {
  id: string;
  name: string;
  title: string;
  city: string;
  bio: string;
  image: string;
  pieces: number;
  about: string;
  university: string;
  graduationYear: number;
  socials: SocialLink[];
  latestCollection: {
    name: string;
    season: string;
    statement: string;
    moodboard: string[];
  };
  previousCollections: PreviousCollection[];
};

export const designers: Designer[] = [
  {
    id: "d1",
    name: "Isolde Moreau",
    title: "Haute Couture",
    city: "Paris, France",
    bio: "Trained at the ateliers of the Place Vendôme, Isolde crafts gowns that carry the weight of memory and the lightness of breath.",
    image: designer1,
    pieces: 24,
    about:
      "Isolde Moreau founded her eponymous house in 2018 after a decade spent inside the petites mains workrooms of Paris. Her practice is rooted in the slow rituals of couture — hand-rolled hems, silk threads dyed in small batches, garments built to be worn across decades rather than seasons. Each piece begins as a graphite sketch and ends in the hands of a single seamstress who signs the inner seam.",
    university: "École de la Chambre Syndicale de la Couture Parisienne",
    graduationYear: 2012,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Pinterest", href: "https://pinterest.com" },
      { label: "Journal", href: "#" },
    ],
    latestCollection: {
      name: "Lumière Tendre",
      season: "Spring / Summer 2025",
      statement:
        "A study in morning light — translucent silks, hand-pleated organza and the quiet architecture of a body at rest.",
      moodboard: [
        mood1, mood2, mood3, mood4, mood5, mood6, mood7,
        mood8, mood9, mood10, mood11, mood12, mood13, mood14,
      ],
    },
    previousCollections: [
      { id: "p1", name: "Nocturne", season: "FW 2024", image: prev1 },
      { id: "p2", name: "Méridien", season: "Resort 2024", image: prev2 },
      { id: "p3", name: "Première Aube", season: "SS 2023", image: prev3 },
    ],
  },
  {
    id: "d2",
    name: "Silas Vance",
    title: "Tailoring & Menswear",
    city: "Milan, Italy",
    bio: "A second-generation tailor reinterpreting Italian sartorialism through deconstructed lines and modern proportion.",
    image: designer2,
    pieces: 32,
    about:
      "Born above his father's tailoring shop in Brera, Silas Vance grew up among bolts of wool and chalk-marked muslin. His collections strip the Milanese suit down to its skeletal essentials — soft shoulders, raw inner construction, fabrics chosen for the way they age rather than the way they photograph.",
    university: "Politecnico di Milano — Fashion Design",
    graduationYear: 2014,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Are.na", href: "https://are.na" },
      { label: "Atelier", href: "#" },
    ],
    latestCollection: {
      name: "Sotto Voce",
      season: "Fall / Winter 2024",
      statement:
        "Quiet tailoring for the modern flâneur — camel, ink and bone, cut close to the body and worn with ease.",
      moodboard: [
        mood2, mood11, mood4, mood6, mood14, mood1, mood12,
        mood3, mood7, mood10, mood13, mood5, mood9, mood8,
      ],
    },
    previousCollections: [
      { id: "p1", name: "Brera", season: "SS 2024", image: prev2 },
      { id: "p2", name: "Notturno", season: "FW 2023", image: prev1 },
      { id: "p3", name: "Giardino", season: "Resort 2023", image: prev3 },
    ],
  },
  {
    id: "d3",
    name: "Elara Chen",
    title: "Sustainable Luxury",
    city: "Copenhagen, Denmark",
    bio: "A pioneer of regenerative materials, Elara designs pieces meant to outlive the seasons that conceived them.",
    image: designer3,
    pieces: 18,
    about:
      "Elara Chen builds garments the way one might build a house — for permanence. Working from a studio overlooking Copenhagen's harbour, she partners with regenerative farms across Scandinavia to source linen, hemp and undyed wool. Every piece is logged, traceable, and offered with a lifetime mending service.",
    university: "Royal Danish Academy — Design",
    graduationYear: 2016,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Substack", href: "https://substack.com" },
      { label: "Studio", href: "#" },
    ],
    latestCollection: {
      name: "Terre Vivante",
      season: "Spring / Summer 2025",
      statement:
        "Undyed linens, vegetable-tanned leathers and pieces designed to soften, fade and be passed on.",
      moodboard: [
        mood4, mood14, mood7, mood1, mood12, mood6, mood10,
        mood3, mood5, mood9, mood2, mood13, mood11, mood8,
      ],
    },
    previousCollections: [
      { id: "p1", name: "Hav", season: "FW 2024", image: prev2 },
      { id: "p2", name: "Jord", season: "SS 2024", image: prev3 },
      { id: "p3", name: "Skog", season: "FW 2023", image: prev1 },
    ],
  },
];
