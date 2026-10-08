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


export const experienceData = [
  {
    id: 1,
    company: "Huawei Technologies",
    position: "Full-Stack Engineer",
    duration: "2023 - Present | Contract",
    description: [
      "Built an HRMS for 100+ employees and a real-time shift management dashboard that cut scheduling effort by 40%, while maintaining 99%+ uptime and resolving 50+ monthly support incidents.",
      "Engineered real-time JavaScript monitoring tools that reduced incident response times by 60%, created reusable component libraries, and mentored junior engineers.",
    ],
  },
  {
    id: 2,
    company: "Freelance",
    position: "Web Developer & Project Owner",
    duration: "2022 - Present | Remote",
    description: [
      "Independently shipped 5+ production websites, including a high-performance Next.js property listing platform (improving load times by 40%) and a feature-rich booking portal with live API and payment integrations.",
      "Handled end-to-end client projects from scoping through deployment, managing custom domains, DNS records, SSL certificates, and hosting environments via GoDaddy and cPanel.",
    ],
  },
];

export const stackTools = [
  {
    img: "/stack_tools/icons8-react-40.png",
    name: "React",
  },
  {
    img: "/stack_tools/nextjs.png",
    name: "Next.js",
  },
  {
    img: "/stack_tools/icons8-typescript-48.png",
    name: "TypeScript",
  },
  {
    img: "/stack_tools/icons8-javascript-48.png",
    name: "JavaScript",
  },
  {
    img: "/stack_tools/icons8-sql-48.png",
    name: "SQL",
  },
  {
    img: "/stack_tools/icons8-postgresql-48.png",
    name: "PostgreSQL",
  },
  {
    img: "/stack_tools/icons8-prisma-orm-48.png",
    name: "Prisma",
  },
  {
    img: "/stack_tools/icons8-vite-48.png",
    name: "Vite",
  },
  {
    img: "/stack_tools/icons8-vue-js-48.png",
    name: "Vue.js",
  },
  {
    img: "/stack_tools/icons8-python-48.png",
    name: "Python",
  },
  {
    img: "/stack_tools/icons8-api-48.png",
    name: "API integration",
  },
  {
    img: "/stack_tools/icons8-dns-48.png",
    name: "DNS",
  },
  {
    img: "/stack_tools/icons8-git-48.png",
    name: "Git",
  },
]

export const gallery = [
  {
    img: "/src/assets/playground/play-1.jpeg",
    alt: "Photograph of flowers",
  },
  {
    img: "/src/assets/playground/play-2.jpeg",
    alt: "Photograph of swing set on a beach",
  },
  {
    img: "/src/assets/playground/play-3.jpeg",
    alt: "Photograph of a person on a swing silhouette with a sunset in the background",
  },
  {
    img: "/src/assets/playground/play-4.jpeg",
    alt: "Drawing of eye expressions",
  },
  {
    img: "/src/assets/playground/play-5.jpeg",
    alt: "A little visitor stopping by to admire the bloom",
  },
  {
    img: "/src/assets/playground/play-6.jpeg",
    alt: "Photograph of sunset flower on a vase",
  },
  {
    img: "/src/assets/playground/play-7.jpeg",
    alt: "A little bit of sunshine captured on stem",
  },
  {
    img: "/src/assets/playground/play-8.jpeg",
    alt: "A breath of fresh air from the balcony caught with a camera lens",
  },
  {
    img: "/src/assets/playground/play-9.jpeg",
    alt: "Golden hour hits differently through the city wires",
  },
  {
    img: "/src/assets/playground/play-10.jpeg",
    alt: "Drawing of a camera",
  },
  {
    img: "/src/assets/playground/play-11.jpeg",
    alt: "Drawing Lost in thought, one stroke at a time",
  },
  {
    img: "/src/assets/playground/play-12.jpeg",
    alt: "Drawing of a person with a camera, looking through the lens",
  },
  {
    img: "/src/assets/playground/play-13.jpeg",
    alt: "Photograph of where architecture meets the endless blue",
  },
  {
    img: "/src/assets/playground/play-14.jpeg",
    alt: "Drawing of a person lost in thought through the smoke and shadows",
  },
  {
    img: "/src/assets/playground/play-15.jpeg",
    alt: "Windows to the soul, captured in graphite",
  },
];
