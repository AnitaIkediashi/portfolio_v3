import talentPoelMockup1 from "./assets/mockups/mockup_one-talentpoel.png";
import talentPoelMockup2 from "./assets/mockups/mockup_two-talentpoel.png";
import talentPoelMockup3 from "./assets/mockups/mockup_three-talentpoel.png";
import bookingMockUp1 from "./assets/mockups/mockup_one-booking.png";
import bookingMockUp2 from "./assets/mockups/mockup_two-booking.png";
import bookingMockUp3 from "./assets/mockups/mockup_three-booking.png";

export const mockData = [
  {
    id: "talentpoel",
    title: "Talentpoel",
    year: "2023",
    description:
      "Talentpoel is a platform that connects talented individuals with potential employers. It allows users to showcase their skills and portfolios, making it easier for companies to find the right talent for their projects.",
    stack: [
      "React",
      "Node.js",
      "Google sheet API",
      "Vercel serverless functions",
    ],
    url: "https://www.talentpoel.com/",
    image: [talentPoelMockup1, talentPoelMockup2, talentPoelMockup3],
  },
  {
    id: "travel-booking",
    title: "Booking platform",
    year: "2026",
    description:
      "A travel booking platform that allows users to search and book flights, hotels, and activities.",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Stripe API",
      "Zod",
      "Supabase",
      "Cloudinary",
    ],
    url: "https://travel-booking-website-omega.vercel.app/",
    image: [bookingMockUp1, bookingMockUp2, bookingMockUp3],
  },
];
