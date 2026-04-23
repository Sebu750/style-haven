import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import collection5 from "@/assets/collection-5.jpg";
import collection6 from "@/assets/collection-6.jpg";
import designer1 from "@/assets/designer-1.jpg";
import designer2 from "@/assets/designer-2.jpg";
import designer3 from "@/assets/designer-3.jpg";

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

export type Designer = {
  id: string;
  name: string;
  title: string;
  city: string;
  bio: string;
  image: string;
  pieces: number;
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
  },
  {
    id: "d2",
    name: "Silas Vance",
    title: "Tailoring & Menswear",
    city: "Milan, Italy",
    bio: "A second-generation tailor reinterpreting Italian sartorialism through deconstructed lines and modern proportion.",
    image: designer2,
    pieces: 32,
  },
  {
    id: "d3",
    name: "Elara Chen",
    title: "Sustainable Luxury",
    city: "Copenhagen, Denmark",
    bio: "A pioneer of regenerative materials, Elara designs pieces meant to outlive the seasons that conceived them.",
    image: designer3,
    pieces: 18,
  },
];
