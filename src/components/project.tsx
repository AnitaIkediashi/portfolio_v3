import talentPoelMockup1 from "../assets/mockups/mockup_one-talentpoel.png";
import talentPoelMockup2 from "../assets/mockups/mockup_two-talentpoel.png";
import talentPoelMockup3 from "../assets/mockups/mockup_three-talentpoel.png";
import bookingMockUp1 from "../assets/mockups/mockup_one-booking.png";
import bookingMockUp2 from "../assets/mockups/mockup_two-booking.png";
import bookingMockUp3 from "../assets/mockups/mockup_three-booking.png";
import { Link, useSearchParams } from "react-router";
import { Button } from "./button";
import { BentRightArrowIcon, CancelIcon } from "./icons";

const mockData = [
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

export const Project = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const project = mockData.find((p) => p.id === id);

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center text-center gap-6 px-6 py-12"
        aria-label="404 page not found"
      >
        <div>
          <h1 className="text-4xl md:text-6xl capitalize font-extrabold tracking-[-.02em]">
            oops!
          </h1>
          <p className="mt-2 text-lg md:text-2xl">You are lost</p>
        </div>
        <img
          src="/custom_404.png"
          alt="404"
          className="w-full max-w-xs sm:max-w-md md:max-w-xl h-auto"
        />
        <Button
          label="Back home"
          className="flex items-center gap-0.5 hover:font-semibold"
          icon={<BentRightArrowIcon />}
          href="/"
        />
      </div>
    );
  }
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-12 px-6 sm:px-8 lg:px-24 pt-10 ">
      <button
        type="button"
        title="Go back"
        aria-label="Go back"
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full grid place-items-center cursor-pointer bg-light/80 backdrop-blur-sm border border-dark/10 shadow-sm text-dark transition-all duration-200 ease-out hover:bg-dark hover:text-light hover:scale-110 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
      >
        <CancelIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:rotate-90" />
      </button>
      {/* Left: stays fixed while right scrolls past it */}
      <div className="relative md:order-1 order-2">
        <div className="md:sticky md:top-10 flex flex-col gap-10 md:pb-20 pb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-.02em]">
            {project.title}
          </h1>

          <div className="flex gap-10 sm:gap-16">
            <p className="opacity-60">[ {project.year} ]</p>
            <div className="flex flex-col gap-1">
              {project.stack.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <p className="max-w-sm text-pretty">{project.description}</p>

          <Link
            to={project.url}
            target="_blank"
            className="inline-flex items-center gap-2 w-fit group hover:font-semibold transition-colors"
          >
            Visit website{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* Right: scrolls normally */}
      <div className="flex flex-col gap-6 pb-20 md:order-2 order-1">
        {project.image.map((img, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden w-full h-[60vw] sm:h-[45vh] md:h-[80vh] shrink-0"
          >
            <img
              src={img}
              alt={`${project.title} mockup ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
