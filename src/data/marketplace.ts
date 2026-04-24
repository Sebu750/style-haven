import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import collection5 from "@/assets/collection-5.jpg";
import collection6 from "@/assets/collection-6.jpg";
import designer1 from "@/assets/designer-1.png";
import designer2 from "@/assets/designer-2.png";
import designer3 from "@/assets/desginers-3.png";
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

/**
 * PRODUCT — a single, standalone item for sale.
 * Focus: specifications (material, size, price) and individual utility.
 */
export type Product = {
  id: string;
  name: string;
  category: string;
  designer: string;
  collectionId: string; // which themed Collection this product belongs to
  season: string;
  price: number;
  image: string;
  material: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Structural Sheesh-Mahal Silk Shirt",
    category: "Luxury Ready-to-Wear",
    designer: "Mehrunissa Khan",
    collectionId: "col-sheeshmahal",
    season: "SS26",
    price: 1290,
    image: collection1,
    material: "Carbon black silk, gunmetal mirror work, hand-encased silk thread",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "p1",
    name: "Structural Sheesh-Mahal Silk Shirt",
    category: "Luxury Ready-to-Wear",
    designer: "Mehrunissa Khan",
    collectionId: "col-sheeshmahal",
    season: "SS26",
    price: 1290,
    image: collection2,
    material: "Carbon black silk, gunmetal mirror work, hand-encased silk thread",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "p3",
    name: "Charcoal Embroidered Sherwani",
    category: "Menswear",
    designer: "Hamza Sheheryar",
    collectionId: "col-sukoon",
    season: "FW24",
    price: 2150,
    image: collection3,
    material: "Raw silk, jamewar lining, hand-finished interior",
    sizes: ["38", "40", "42", "44"],
  },
  {
    id: "p4",
    name: "Ivory Raw Silk Sherwani",
    category: "Menswear",
    designer: "Hamza Sheheryar",
    collectionId: "col-sukoon",
    season: "FW24",
    price: 1980,
    image: collection4,
    material: "Aged raw silk, mother-of-pearl buttons",
    sizes: ["38", "40", "42", "44"],
  },
  {
    id: "p5",
    name: "Indigo Block-Print Kurta Set",
    category: "Pret",
    designer: "Sanam Maskatiya",
    collectionId: "col-mitti",
    season: "SS25",
    price: 540,
    image: collection5,
    material: "Khaddi cotton, natural indigo, hand block-print",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "p6",
    name: "Terracotta Handloom Shalwar Kameez",
    category: "Pret",
    designer: "Sanam Maskatiya",
    collectionId: "col-mitti",
    season: "SS25",
    price: 690,
    image: collection6,
    material: "Multani handloom, madder-root dye",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

/**
 * COLLECTION — a curated, themed group of Products launched together.
 * Focus: storytelling, color story, seasonal concept.
 */
export type Collection = {
  id: string;
  name: string;
  designer: string;
  designerId: string;
  season: string;
  theme: string; // one-line color/concept story
  statement: string;
  cover: string;
  productIds: string[];
};

export const themedCollections: Collection[] = [
  {
    id: "col-shahbano",
    name: "Shahbano",
    designer: "Mehrunissa Khan",
    designerId: "d1",
    season: "Bridal SS 2025",
    theme: "Ivory · Gold · Crimson",
    statement:
      "A Mughal reverie of ivory, gold and crimson — heirloom lehengas built on hand-loomed silk and finished with antique zardozi.",
    cover: collection1,
    productIds: ["p1", "p2"],
  },
  {
    id: "col-sukoon",
    name: "Sukoon",
    designer: "Hamza Sheheryar",
    designerId: "d2",
    season: "Menswear FW 2024",
    theme: "Charcoal · Ivory · Jade",
    statement:
      "Quiet tailoring for the modern Pakistani groom — soft shoulders, restrained palettes, hand-finished interiors.",
    cover: collection3,
    productIds: ["p3", "p4"],
  },
  {
    id: "col-mitti",
    name: "Mitti",
    designer: "Sanam Maskatiya",
    designerId: "d3",
    season: "Pret SS 2025",
    theme: "Indigo · Terracotta · Undyed",
    statement:
      "Undyed khaddi, indigo block-print and terracotta handloom — pieces designed to soften with every wash.",
    cover: collection5,
    productIds: ["p5", "p6"],
  },
];

// Backward-compat alias: existing pages import `collections` expecting product-shaped items.
// Keep this so Index/Shop/Search overlays continue to render product cards.
export const collections: Product[] = products;

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
