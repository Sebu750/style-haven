import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import collection5 from "@/assets/collection-5.jpg";
import collection6 from "@/assets/collection-6.jpg";
import designer1 from "@/assets/designer-1.jpg";
import designer2 from "@/assets/designer-2.jpg";
import designer3 from "@/assets/designer-3.jpg";
import moodZs1 from "@/assets/mood-zs-1.jpg";
import moodZs2 from "@/assets/mood-zs-2.jpg";
import moodZs3 from "@/assets/mood-zs-3.jpg";
import moodHsy1 from "@/assets/mood-hsy-1.jpg";
import moodHsy2 from "@/assets/mood-hsy-2.jpg";
import moodHsy3 from "@/assets/mood-hsy-3.jpg";
import moodSm1 from "@/assets/mood-sm-1.jpg";
import moodSm2 from "@/assets/mood-sm-2.jpg";
import moodSm3 from "@/assets/mood-sm-3.jpg";
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
  { id: "c1", name: "Shahbano Ivory Bridal Lehenga", category: "Bridal", designer: "Mehrunissa Khan", price: 4890, image: collection1, season: "SS25" },
  { id: "c2", name: "Qirmizi Banarsi Dupatta", category: "Bridal", designer: "Mehrunissa Khan", price: 1290, image: collection2, season: "SS25" },
  { id: "c3", name: "Charcoal Embroidered Sherwani", category: "Menswear", designer: "Hamza Sheheryar", price: 2150, image: collection3, season: "FW24" },
  { id: "c4", name: "Ivory Raw Silk Sherwani", category: "Menswear", designer: "Hamza Sheheryar", price: 1980, image: collection4, season: "FW24" },
  { id: "c5", name: "Indigo Block-Print Kurta Set", category: "Pret", designer: "Sanam Maskatiya", price: 540, image: collection5, season: "SS25" },
  { id: "c6", name: "Terracotta Handloom Shalwar Kameez", category: "Pret", designer: "Sanam Maskatiya", price: 690, image: collection6, season: "SS25" },
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

// Helper to fill a 14-slot moodboard with 3 cohesive images (cycled in a pleasing pattern)
const cycle = (a: string, b: string, c: string): string[] => [
  a, b, c, a, b, c, a, c, b, a, c, b, a, b,
];

export const designers: Designer[] = [
  {
    id: "d1",
    name: "Mehrunissa Khan",
    title: "Bridal Couture",
    city: "Lahore, Pakistan",
    bio: "Trained in the karkhanas of Anarkali, Mehrunissa builds Mughal-inspired bridals where every motif is hand-embroidered in zardozi, kora and pearl.",
    image: designer1,
    pieces: 28,
    about:
      "Mehrunissa Khan launched her atelier in the Walled City of Lahore in 2017, after a decade apprenticing under the master karigars of Liberty and Anarkali. Her practice is rooted in the slow rituals of Mughal craft — zardozi worked on wooden adda frames, gota dyed in small dyebaths, and silk khaddi sourced directly from Multan weavers. Each bridal takes between four and seven months to complete and carries the signature of the karigar who finished its final stitch.",
    university: "Pakistan Institute of Fashion & Design (PIFD), Lahore",
    graduationYear: 2011,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Pinterest", href: "https://pinterest.com" },
      { label: "Atelier", href: "#" },
    ],
    latestCollection: {
      name: "Shahbano",
      season: "Bridal Spring / Summer 2025",
      statement:
        "A Mughal reverie of ivory, gold and crimson — heirloom lehengas built on hand-loomed silk and finished with antique zardozi.",
      moodboard: cycle(moodZs1, moodZs2, moodZs3),
    },
    previousCollections: [
      { id: "p1", name: "Noor Mahal", season: "Bridal FW 2024", image: prev1 },
      { id: "p2", name: "Anarkali", season: "Festive 2024", image: prev2 },
      { id: "p3", name: "Mehrgarh", season: "Bridal SS 2023", image: prev3 },
    ],
  },
  {
    id: "d2",
    name: "Hamza Sheheryar",
    title: "Menswear & Sherwanis",
    city: "Karachi, Pakistan",
    bio: "A second-generation tailor reimagining the sherwani for a quieter, more architectural Pakistan — soft shoulders, restrained palettes, hand-finished interiors.",
    image: designer2,
    pieces: 36,
    about:
      "Born above his father's tailoring shop in Saddar, Hamza Sheheryar grew up among bolts of raw silk and chalk-marked muslin. His house, founded in 2016, strips the Pakistani sherwani down to its essentials — soft shoulders, raw inner construction, jamewar linings, and embroidery placed with the discretion of a signature. He works almost exclusively with karigars from Hyderabad and ages every fabric for six months before cutting.",
    university: "Indus Valley School of Art and Architecture, Karachi",
    graduationYear: 2013,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Behance", href: "https://behance.net" },
      { label: "Atelier", href: "#" },
    ],
    latestCollection: {
      name: "Sukoon",
      season: "Menswear Fall / Winter 2024",
      statement:
        "Quiet tailoring for the modern Pakistani groom — charcoal, ivory and jade, cut close to the body and worn without ornament.",
      moodboard: cycle(moodHsy1, moodHsy2, moodHsy3),
    },
    previousCollections: [
      { id: "p1", name: "Saddar", season: "Menswear SS 2024", image: prev2 },
      { id: "p2", name: "Shab", season: "Menswear FW 2023", image: prev1 },
      { id: "p3", name: "Bagh", season: "Festive 2023", image: prev3 },
    ],
  },
  {
    id: "d3",
    name: "Sanam Maskatiya",
    title: "Sustainable Pret",
    city: "Islamabad, Pakistan",
    bio: "A pioneer of regenerative khaddi and indigenous block-print, Sanam designs daily-wear pieces meant to soften, fade and be passed on.",
    image: designer3,
    pieces: 22,
    about:
      "Sanam Maskatiya builds garments the way one might build a house — for permanence. Working from a studio in the foothills of the Margallas, she partners with khaddi weavers in Multan, ajrak block-printers in Bhit Shah and natural dyers in Hala. Every kurta is logged, traceable, and offered with a lifetime mending service. Her commitment is to the slow disappearance of synthetic dyes from Pakistani pret.",
    university: "National College of Arts (NCA), Lahore",
    graduationYear: 2015,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Substack", href: "https://substack.com" },
      { label: "Studio", href: "#" },
    ],
    latestCollection: {
      name: "Mitti",
      season: "Pret Spring / Summer 2025",
      statement:
        "Undyed khaddi, indigo block-print and terracotta handloom — pieces designed to soften with every wash and outlast the season that made them.",
      moodboard: cycle(moodSm1, moodSm2, moodSm3),
    },
    previousCollections: [
      { id: "p1", name: "Sindh", season: "Pret FW 2024", image: prev2 },
      { id: "p2", name: "Hala", season: "Pret SS 2024", image: prev3 },
      { id: "p3", name: "Margalla", season: "Pret FW 2023", image: prev1 },
    ],
  },
];
