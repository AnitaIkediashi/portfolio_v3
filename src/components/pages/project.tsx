import { Link, useSearchParams } from "react-router";
import { mockData } from "../../data";
import { NotFound } from "./not-found";
import { CancelIcon } from "../icons";

export const Project = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const project = mockData.find((p) => p.id === id);

  if (!project) {
    return (
      <NotFound />
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
