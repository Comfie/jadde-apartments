export interface Apartment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  size: string;
  dailyPrice: number;
  monthlyPrice: number;
  bookingUrl: string;
  amenities: string[];
}

export const apartments: Apartment[] = [
  {
    id: "unit-2",
    name: "Unit 2 - Studio Loft",
    tagline: "Perfect for solo travelers or couples",
    description:
      "A beautifully designed studio apartment featuring modern finishes, a fully equipped kitchenette, and a cozy sleeping area. Large windows flood the space with natural light, creating a warm and inviting atmosphere.",
    images: [
      "/images/apartments/unit-2/unit_2_2.jpg",
      "/images/apartments/unit-2/unit_2_3.jpg",
      "/images/apartments/unit-2/unit_2_4.jpg",
      "/images/apartments/unit-2/unit_2_5.jpg",
      "/images/apartments/unit-2/unit_2_6.jpg",
    ],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    size: "45m²",
    dailyPrice: 850,
    monthlyPrice: 7500,
    bookingUrl: "https://www.airbnb.com",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Fully Equipped Kitchen",
      "Flat Screen TV",
      "Private Parking",
      "Garden Access",
    ],
  },
  {
    id: "unit-6",
    name: "Unit 6 - Garden Suite",
    tagline: "Wake up to garden views",
    description:
      "Enjoy direct access to our lush garden from this ground-floor suite. Features a spacious living area, modern kitchen, and a comfortable bedroom with quality linens. Perfect for those who love nature.",
    images: [
      "/images/apartments/unit-6/unit_6_2.jpg",
      "/images/apartments/unit-6/unit_6_3.jpg",
      "/images/apartments/unit-6/unit_6_4.jpg",
      "/images/apartments/unit-6/unit_6_5.jpg",
      "/images/apartments/unit-6/unit_6_6.jpg",
    ],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    size: "55m²",
    dailyPrice: 950,
    monthlyPrice: 8500,
    bookingUrl: "https://www.airbnb.com",
    amenities: [
      "Free WiFi",
      "Garden Access",
      "Patio Area",
      "Fully Equipped Kitchen",
      "Flat Screen TV",
      "Pet Friendly",
    ],
  },
  {
    id: "unit-7",
    name: "Unit 7 - Executive One-Bedroom",
    tagline: "Business meets comfort",
    description:
      "Designed with the business traveler in mind, this apartment offers a dedicated workspace, premium amenities, and a comfortable bedroom. Ideal for extended stays with full kitchen facilities.",
    images: [
      "/images/apartments/unit-7/unit_7_2.jpg",
      "/images/apartments/unit-7/unit_7_3.jpg",
      "/images/apartments/unit-7/unit_7_4.jpg",
      "/images/apartments/unit-7/unit_7_5.jpg",
      "/images/apartments/unit-7/unit_7_6.jpg",
    ],
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    size: "65m²",
    dailyPrice: 1100,
    monthlyPrice: 9500,
    bookingUrl: "https://www.airbnb.com",
    amenities: [
      "Free WiFi",
      "Work Desk",
      "Air Conditioning",
      "Fully Equipped Kitchen",
      "Washing Machine",
      "Private Parking",
    ],
  },
  {
    id: "unit-8",
    name: "Unit 8 - Family Apartment",
    tagline: "Space for the whole family",
    description:
      "A spacious two-bedroom apartment perfect for families. Features a large living area, fully equipped kitchen, and two comfortable bedrooms. Direct garden access keeps the kids entertained.",
    images: [
      "/images/apartments/unit-8/unit_8_2.jpg",
      "/images/apartments/unit-8/unit_8_3.jpg",
      "/images/apartments/unit-8/unit_8_4.jpg",
      "/images/apartments/unit-8/unit_8_5.jpg",
      "/images/apartments/unit-8/unit_8_6.jpg",
    ],
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    size: "85m²",
    dailyPrice: 1350,
    monthlyPrice: 12000,
    bookingUrl: "https://www.airbnb.com",
    amenities: [
      "Free WiFi",
      "Garden Access",
      "Kid Friendly",
      "Fully Equipped Kitchen",
      "Washing Machine",
      "Pet Friendly",
    ],
  },
  {
    id: "unit-9",
    name: "Unit 9 - Premium Two-Bedroom",
    tagline: "Luxury for groups",
    description:
      "Our premium two-bedroom apartment offers the ultimate in comfort and style. Two ensuite bedrooms, a gourmet kitchen, and elegant living spaces make this perfect for discerning guests.",
    images: [
      "/images/apartments/unit-9/unit_9_2.jpg",
      "/images/apartments/unit-9/unit_9_3.jpg",
      "/images/apartments/unit-9/unit_9_4.jpg",
      "/images/apartments/unit-9/unit_9_5.jpg",
      "/images/apartments/unit-9/unit_9_6.jpg",
    ],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    size: "95m²",
    dailyPrice: 1500,
    monthlyPrice: 13500,
    bookingUrl: "https://www.airbnb.com",
    amenities: [
      "Free WiFi",
      "Premium Linens",
      "Air Conditioning",
      "Gourmet Kitchen",
      "Washing Machine",
      "Private Parking",
    ],
  },
];

export function getApartmentById(id: string): Apartment | undefined {
  return apartments.find((apt) => apt.id === id);
}

export function getAllApartmentIds(): string[] {
  return apartments.map((apt) => apt.id);
}
