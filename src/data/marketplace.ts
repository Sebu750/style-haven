import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import collection5 from "@/assets/collection-5.jpg";
import collection6 from "@/assets/collection-6.jpg";
import designer1 from "@/assets/designer-1.png";
import designer2 from "@/assets/designer-2.png";
import designer3 from "@/assets/desginers-3.png";
import designer4 from "@/assets/designer-4.jpg";
import designer5 from "@/assets/designer-5.jpg";
import designer6 from "@/assets/designer-6.jpg";
import designer7 from "@/assets/designer-7.jpg";
import designer8 from "@/assets/designer-8.jpg";
import moodZs1 from "@/assets/mood-zs-1.jpg";
import moodZs2 from "@/assets/mood-zs-2.jpg";
import moodZs3 from "@/assets/mood-zs-3.jpg";
import moodHsy1 from "@/assets/mood-hsy-1.jpg";
import moodHsy2 from "@/assets/mood-hsy-2.jpg";
import moodHsy3 from "@/assets/mood-hsy-3.jpg";
import moodSm1 from "@/assets/mood-sm-1.jpg";
import moodSm2 from "@/assets/mood-sm-2.jpg";
import moodSm3 from "@/assets/mood-sm-3.jpg";
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
    id: "p2",
    name: "Crimson Mirror-Work Lehenga",
    category: "Bridal",
    designer: "Mehrunissa Khan",
    collectionId: "col-shahbano",
    season: "SS25",
    price: 4850,
    image: collection2,
    material: "Hand-loomed silk, antique zardozi, kora and pearl",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p1b",
    name: "Ivory Zardozi Angarkha",
    category: "Bridal",
    designer: "Mehrunissa Khan",
    collectionId: "col-shahbano",
    season: "SS25",
    price: 3290,
    image: prev1,
    material: "Ivory raw silk, antique gold zardozi, gota finishing",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p1c",
    name: "Gold Tilla Dupatta",
    category: "Bridal",
    designer: "Mehrunissa Khan",
    collectionId: "col-shahbano",
    season: "SS25",
    price: 980,
    image: prev2,
    material: "Khaddi net, hand tilla embroidery",
    sizes: ["One Size"],
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
  {
    id: "p3b",
    name: "Jade Silk Bandhgala",
    category: "Menswear",
    designer: "Hamza Sheheryar",
    collectionId: "col-sukoon",
    season: "FW24",
    price: 1690,
    image: prev3,
    material: "Jade silk, jamewar lining, covered buttons",
    sizes: ["38", "40", "42", "44"],
  },
  {
    id: "p5b",
    name: "Madder Handloom Kurta",
    category: "Pret",
    designer: "Sanam Maskatiya",
    collectionId: "col-mitti",
    season: "SS25",
    price: 480,
    image: prev1,
    material: "Multani handloom, madder-root dye",
    sizes: ["XS", "S", "M", "L"],
  },
  // Zara Shahjahan — Haveli
  {
    id: "p7",
    name: "Fresco Pink Farshi Gharara",
    category: "Couture",
    designer: "Zara Shahjahan",
    collectionId: "col-haveli",
    season: "SS25",
    price: 3450,
    image: collection1,
    material: "Aged ivory silk, antique gold zari, fresco-pink dupatta",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p8",
    name: "Lime-Washed Angarkha",
    category: "Couture",
    designer: "Zara Shahjahan",
    collectionId: "col-haveli",
    season: "SS25",
    price: 2890,
    image: prev2,
    material: "Hand-loomed cotton silk, salli and dabka",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p9",
    name: "Courtyard Gold Dupatta",
    category: "Couture",
    designer: "Zara Shahjahan",
    collectionId: "col-haveli",
    season: "SS25",
    price: 1190,
    image: prev3,
    material: "Tissue silk, hand tilla edging",
    sizes: ["One Size"],
  },
  // Ali Xeeshan — Numaish
  {
    id: "p10",
    name: "Saffron Phulkari Lehenga",
    category: "Bridal",
    designer: "Ali Xeeshan",
    collectionId: "col-numaish",
    season: "FW24",
    price: 5290,
    image: collection2,
    material: "Saffron silk, Sialkot phulkari, Multani tassels",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p11",
    name: "Lapis Sculpted Choli",
    category: "Bridal",
    designer: "Ali Xeeshan",
    collectionId: "col-numaish",
    season: "FW24",
    price: 1680,
    image: prev1,
    material: "Lapis silk, structured boning, gota detailing",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p12",
    name: "Oxblood Tassel Dupatta",
    category: "Bridal",
    designer: "Ali Xeeshan",
    collectionId: "col-numaish",
    season: "FW24",
    price: 1290,
    image: prev3,
    material: "Oxblood velvet, hand-tied silk tassels",
    sizes: ["One Size"],
  },
  // Misha Lakhani — Khaaka
  {
    id: "p13",
    name: "Square-Cut Black Kameez",
    category: "Pret",
    designer: "Misha Lakhani",
    collectionId: "col-khaaka",
    season: "SS25",
    price: 620,
    image: collection5,
    material: "Faisalabad khaddi, structural seams",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "p14",
    name: "Architectural Tussar Shalwar",
    category: "Pret",
    designer: "Misha Lakhani",
    collectionId: "col-khaaka",
    season: "SS25",
    price: 540,
    image: prev2,
    material: "Sindhi tussar silk, pleated waist",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p15",
    name: "Dust Linen Kurta",
    category: "Pret",
    designer: "Misha Lakhani",
    collectionId: "col-khaaka",
    season: "SS25",
    price: 460,
    image: prev1,
    material: "Hand-loomed linen, undyed",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  // Rizwan Beyg — Rilli
  {
    id: "p16",
    name: "Madder Rilli Patchwork Shawl",
    category: "Couture",
    designer: "Rizwan Beyg",
    collectionId: "col-rilli",
    season: "FW24",
    price: 2480,
    image: collection6,
    material: "Patchworked silks, madder dye, antique mirror",
    sizes: ["One Size"],
  },
  {
    id: "p17",
    name: "Indigo Chikankari Kurta",
    category: "Couture",
    designer: "Rizwan Beyg",
    collectionId: "col-rilli",
    season: "FW24",
    price: 1890,
    image: prev2,
    material: "Natural indigo cotton, hand chikankari",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p18",
    name: "Ochre Gota Dupatta",
    category: "Couture",
    designer: "Rizwan Beyg",
    collectionId: "col-rilli",
    season: "FW24",
    price: 1290,
    image: prev3,
    material: "Ochre silk, pre-Partition gota",
    sizes: ["One Size"],
  },
  // Fahad Hussayn — Heer
  {
    id: "p19",
    name: "Emerald Hand-Painted Silk Kurta",
    category: "Couture",
    designer: "Fahad Hussayn",
    collectionId: "col-heer",
    season: "SS25",
    price: 2790,
    image: collection3,
    material: "Hand-painted silk, heavy resham embroidery",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p20",
    name: "Vermillion Resham Sharara",
    category: "Couture",
    designer: "Fahad Hussayn",
    collectionId: "col-heer",
    season: "SS25",
    price: 3190,
    image: prev1,
    material: "Vermillion silk, hand resham, raw silk lining",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p21",
    name: "Bone Silk Folkloric Dupatta",
    category: "Couture",
    designer: "Fahad Hussayn",
    collectionId: "col-heer",
    season: "SS25",
    price: 990,
    image: prev2,
    material: "Bone silk, hand-painted folkloric border",
    sizes: ["One Size"],
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
    productIds: ["p1b", "p2", "p1c"],
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
    productIds: ["p3", "p4", "p3b"],
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
    productIds: ["p5", "p6", "p5b"],
  },
  {
    id: "col-haveli",
    name: "Haveli",
    designer: "Zara Shahjahan",
    designerId: "d4",
    season: "Couture SS 2025",
    theme: "Fresco Pink · Lime · Gold",
    statement:
      "An archive of the Lahori haveli — fresco pinks, lime-washed ivory and the dusty gold of an afternoon courtyard.",
    cover: collection1,
    productIds: ["p7", "p8", "p9"],
  },
  {
    id: "col-numaish",
    name: "Numaish",
    designer: "Ali Xeeshan",
    designerId: "d5",
    season: "Bridal FW 2024",
    theme: "Saffron · Lapis · Oxblood",
    statement:
      "A theatrical bridal of saffron, lapis and oxblood — phulkari shawls and the maximal joy of a Pakistani wedding procession.",
    cover: collection2,
    productIds: ["p10", "p11", "p12"],
  },
  {
    id: "col-khaaka",
    name: "Khaaka",
    designer: "Misha Lakhani",
    designerId: "d6",
    season: "Pret SS 2025",
    theme: "Black · Dust · Ivory",
    statement:
      "A graphic pret of black, dust and ivory — square-cut kameez and the discipline of an unembellished line.",
    cover: collection5,
    productIds: ["p13", "p14", "p15"],
  },
  {
    id: "col-rilli",
    name: "Rilli",
    designer: "Rizwan Beyg",
    designerId: "d7",
    season: "Couture FW 2024",
    theme: "Madder · Indigo · Ochre",
    statement:
      "A revivalist meditation on Sindhi rilli — patchworked silks finished with pre-Partition gota and antique mirror.",
    cover: collection6,
    productIds: ["p16", "p17", "p18"],
  },
  {
    id: "col-heer",
    name: "Heer",
    designer: "Fahad Hussayn",
    designerId: "d8",
    season: "Couture SS 2025",
    theme: "Emerald · Vermillion · Bone",
    statement:
      "A retelling of the Punjabi epic Heer Ranjha — emerald, vermillion and bone, hand-painted on silk and embroidered in heavy resham.",
    cover: collection3,
    productIds: ["p19", "p20", "p21"],
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
  {
    id: "d4",
    name: "Zara Shahjahan",
    title: "Heritage Couture",
    city: "Lahore, Pakistan",
    bio: "A custodian of Mughal-era silhouettes, Zara reinterprets the angarkha and farshi gharara through aged ivory silks and antique gold zari.",
    image: designer4,
    pieces: 31,
    about:
      "Zara Shahjahan founded her atelier in the haveli quarter of Old Lahore in 2014. Her work is a study in restraint — Mughal silhouettes pared back to their architectural essentials, then enriched with antique gold zari and aged silks sourced from estate sales across the Punjab. Each angarkha is built on a hand-cut paper pattern that has been refined over the past decade. She works with a closed circle of seven master karigars, each of whom signs the inside hem of every piece they finish.",
    university: "Pakistan Institute of Fashion & Design (PIFD), Lahore",
    graduationYear: 2009,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Vogue", href: "https://vogue.com" },
      { label: "Atelier", href: "#" },
    ],
    latestCollection: {
      name: "Haveli",
      season: "Couture Spring / Summer 2025",
      statement:
        "An archive of the Lahori haveli — fresco pinks, lime-washed ivory and the dusty gold of an afternoon courtyard, rendered in farshi ghararas and angarkhas.",
      moodboard: cycle(mood1, mood2, mood3),
    },
    previousCollections: [
      { id: "p1", name: "Daastan", season: "Couture FW 2024", image: prev1 },
      { id: "p2", name: "Mehfil", season: "Festive 2024", image: prev3 },
      { id: "p3", name: "Roshan", season: "Couture SS 2023", image: prev2 },
    ],
  },
  {
    id: "d5",
    name: "Ali Xeeshan",
    title: "Theatrical Couture",
    city: "Lahore, Pakistan",
    bio: "An iconoclast of Pakistani couture, Ali stages bridals as performance — sculptural volumes, saturated jewel tones, and craft borrowed from the truck-art ateliers of GT Road.",
    image: designer5,
    pieces: 24,
    about:
      "Ali Xeeshan treats every bridal as a piece of theatre. Working from a converted cinema in Lahore's Gulberg, he collaborates with truck-art painters from Rawalpindi, phulkari embroiderers from Sialkot and tassel-makers from Multan. His couture is unapologetically maximal — saturated jewel tones, sculptural shoulders, and silhouettes that reference the qawwali stage as much as the wedding mandap. Every collection debuts as a staged performance before it is offered to clients.",
    university: "Pakistan Institute of Fashion & Design (PIFD), Lahore",
    graduationYear: 2008,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Atelier", href: "#" },
    ],
    latestCollection: {
      name: "Numaish",
      season: "Bridal Fall / Winter 2024",
      statement:
        "A theatrical bridal of saffron, lapis and oxblood — phulkari shawls, sculpted cholis and the maximal joy of a Pakistani wedding procession.",
      moodboard: cycle(mood4, mood5, mood6),
    },
    previousCollections: [
      { id: "p1", name: "Tamasha", season: "Bridal SS 2024", image: prev3 },
      { id: "p2", name: "Bazaar", season: "Festive 2023", image: prev1 },
      { id: "p3", name: "Raqs", season: "Bridal FW 2022", image: prev2 },
    ],
  },
  {
    id: "d6",
    name: "Misha Lakhani",
    title: "Modern Pret",
    city: "Karachi, Pakistan",
    bio: "A graphic, architectural voice in Pakistani pret — Misha cuts khaddi and silk into clean geometric silhouettes built for the working woman of the South.",
    image: designer6,
    pieces: 19,
    about:
      "Misha Lakhani opened her studio in Karachi's Clifton in 2018, after training under a New York minimalist and apprenticing with a Lahore-based pret veteran. Her practice strips the shalwar kameez to its geometric bones — sharp shoulders, square necklines, and a near-monastic palette of black, ivory and dust. She works exclusively with khaddi from Faisalabad and tussar silk from Sindh, and refuses any embellishment that is not structural.",
    university: "Indus Valley School of Art and Architecture, Karachi",
    graduationYear: 2014,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Are.na", href: "https://are.na" },
      { label: "Studio", href: "#" },
    ],
    latestCollection: {
      name: "Khaaka",
      season: "Pret Spring / Summer 2025",
      statement:
        "A graphic pret of black, dust and ivory — square-cut kameez, architectural shalwars and the discipline of an unembellished line.",
      moodboard: cycle(mood7, mood8, mood9),
    },
    previousCollections: [
      { id: "p1", name: "Saaya", season: "Pret FW 2024", image: prev2 },
      { id: "p2", name: "Reekh", season: "Pret SS 2024", image: prev1 },
      { id: "p3", name: "Naqsh", season: "Pret FW 2023", image: prev3 },
    ],
  },
  {
    id: "d7",
    name: "Rizwan Beyg",
    title: "Heritage & Revivalism",
    city: "Karachi, Pakistan",
    bio: "Pakistan's elder statesman of revivalist couture — Rizwan has spent four decades preserving chikankari, gota and the lost embroideries of Sindh.",
    image: designer7,
    pieces: 42,
    about:
      "Rizwan Beyg's house, founded in 1986, is one of the longest-standing ateliers in Pakistan. Working between Karachi and a satellite workshop in Hala, he has dedicated four decades to preserving and reviving disappearing Pakistani embroideries — Sindhi rilli, chikankari from Lucknow's diaspora communities, and the gota of pre-Partition Multan. His couture is worn by the cultural elite and archived by museums; his real legacy is the hundreds of karigars his house has trained and continues to employ.",
    university: "Self-trained, with karkhana apprenticeships in Lucknow and Hala",
    graduationYear: 1986,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Archive", href: "#" },
      { label: "Atelier", href: "#" },
    ],
    latestCollection: {
      name: "Rilli",
      season: "Couture Fall / Winter 2024",
      statement:
        "A revivalist meditation on Sindhi rilli — patchworked silks in madder, indigo and ochre, finished with pre-Partition gota and antique mirror.",
      moodboard: cycle(mood10, mood11, mood12),
    },
    previousCollections: [
      { id: "p1", name: "Chikankari", season: "Couture SS 2024", image: prev1 },
      { id: "p2", name: "Hala", season: "Couture FW 2023", image: prev2 },
      { id: "p3", name: "Multan", season: "Couture SS 2023", image: prev3 },
    ],
  },
  {
    id: "d8",
    name: "Fahad Hussayn",
    title: "Conceptual Couture",
    city: "Islamabad, Pakistan",
    bio: "A storyteller and folklorist, Fahad builds each collection as a narrative — Pakistani myths and Sufi poetry rendered in hand-painted silks and resham.",
    image: designer8,
    pieces: 26,
    about:
      "Fahad Hussayn approaches couture as literature. Each collection is built around a single Pakistani folktale or Sufi qawwali — researched for months, then translated into hand-painted silks, resham embroidery and sculpted volumes. His Islamabad atelier houses both a design studio and a small library of regional folklore. He is one of the few Pakistani designers to consistently show on the Karachi and Lahore fashion week calendars while remaining outside the bridal-industrial complex.",
    university: "National College of Arts (NCA), Lahore",
    graduationYear: 2010,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Substack", href: "https://substack.com" },
      { label: "Atelier", href: "#" },
    ],
    latestCollection: {
      name: "Heer",
      season: "Couture Spring / Summer 2025",
      statement:
        "A retelling of the Punjabi epic Heer Ranjha — emerald, vermillion and bone, hand-painted on silk and embroidered in heavy resham.",
      moodboard: cycle(mood13, mood14, mood1),
    },
    previousCollections: [
      { id: "p1", name: "Sassi", season: "Couture FW 2024", image: prev3 },
      { id: "p2", name: "Sohni", season: "Couture SS 2024", image: prev2 },
      { id: "p3", name: "Mirza", season: "Couture FW 2023", image: prev1 },
    ],
  },
];
