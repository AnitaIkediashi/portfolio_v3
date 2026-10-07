import { experienceData, stackTools } from "../../data";
import { CancelIcon, DownloadIcon } from "../icons";
import cv from "../../assets/cv/Anita_Ifeoma_Ikediashi_CV.pdf";
import { Link } from "react-router";

export const About = () => {
  return (
    <div className="min-h-screen">
      <Link
        to="/"
        title="Go back"
        aria-label="Go back"
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full grid place-items-center cursor-pointer bg-light/80 backdrop-blur-sm border border-dark/10 shadow-sm text-dark transition-all duration-200 ease-out hover:bg-dark hover:text-light hover:scale-110 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
      >
        <CancelIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:rotate-90" />
      </Link>
      <section className="lg:px-24 px-8 lg:pt-18 pt-8">
        <h1 className="font-extrabold text-[clamp(48px,10cqw,144px)] leading-[.92] tracking-[-.035em] text-center">
          About me
        </h1>
        <p className="md:max-w-195 mt-7 mx-auto text-pretty lg:text-[26px] text-lg leading-[1.3] text-center font-medium">
          I'm a full-stack engineer who brings an artist's eye to the digital
          space. Obsessed with clean code, subtle micro-interactions, meaningful
          photography, and building things that feel genuinely good to use.
        </p>
      </section>
      <section className="lg:pt-35 pt-10 lg:px-24 px-8 grid lg:grid-cols-[400px_1fr] lg:gap-24 ">
        <div>
          <h2 className="lg:text-5xl text-[28px] leading-[1.05] tracking-[-.03em] text-balance font-extrabold mb-6 capitalize">
            experience
          </h2>
        </div>
        <ul className="divide-y-[1.5px] divide-[#28204640]">
          {experienceData.map((item) => {
            const [range, type] = item.duration.split("|").map((s) => s.trim());
            return (
              <li
                key={item.id}
                className="py-4.5 md:py-6 lg:py-7 first:pt-0 md:first:pt-0 lg:first:pt-0 border-b-[1.5px] last:border-0 border-[#28204640]"
              >
                <div className="grid grid-cols-[96px_1fr] md:grid-cols-[190px_1fr] gap-3 md:gap-6">
                  <div className="pt-1 lg:pt-1.5 text-xs md:text-base lg:text-lg ">
                    <span className="opacity-80 whitespace-nowrap block">
                      {range}
                    </span>
                    <span className="block opacity-60">{type}</span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="block font-bold text-[17px] md:text-[22px] lg:text-[26px] leading-[1.2] tracking-[-.01em] lg:tracking-[-.02em] wrap-break-word">
                      {item.position}
                    </h3>
                    <p className="text-[13.5px] md:text-base lg:text-lg">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="mt-2 space-y-2 lg:space-y-3">
                  {item.description.map((desc, i) => (
                    <p
                      key={i}
                      className="text-[13.5px] md:text-base lg:text-lg leading-[1.3] text-pretty"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="lg:pt-35 pt-10 lg:px-24 px-8 grid lg:grid-cols-[400px_1fr] lg:gap-24 ">
        <div>
          <h2 className="lg:text-5xl text-[28px] leading-[1.05] tracking-[-.03em] text-balance font-extrabold mb-6 capitalize">
            Stack
          </h2>
        </div>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4 content-start">
          {stackTools.map((tool) => (
            <li
              key={tool.name}
              tabIndex={0}
              className="group relative grid place-items-center bg-transparent transition-colors"
            >
              <img
                src={tool.img}
                alt=""
                loading="lazy"
                className="size-8 lg:size-10 object-contain transition-transform duration-200 [@media(hover:hover)]:group-hover:-translate-y-2 [@media(hover:hover)]:group-focus-visible:-translate-y-2"
              />
              <span
                className="absolute inset-x-1 bottom-2 text-center text-[11px] lg:text-xs font-semibold leading-tight text-balance transition-all duration-200
          [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:translate-y-1
          [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0
          [@media(hover:hover)]:group-focus-visible:opacity-100 [@media(hover:hover)]:group-focus-visible:translate-y-0"
              >
                {tool.name}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="lg:pt-35 pt-16 lg:px-24 px-8 flex flex-col md:items-center md:justify-center">
        <h2 className="lg:mb-4 mb-4.5 lg:text-5xl text-[28px] leading-[1.05] tracking-[-.03em] text-balance font-extrabold md:text-center">
          Want the full story?
        </h2>
        <button
          type="button"
          className="w-fit group hover:bg-tint40 hover:text-dark hover:shadow-light text-light bg-dark inline-flex items-center justify-center lg:gap-2.5 gap-2 lg:h-14 h-11.5 lg:px-7 px-5 rounded-[999px] whitespace-nowrap font-semibold lg:text-lg text-[15px] transition-colors"
        >
          <DownloadIcon className="group-hover:text-dark text-light" />
          <Link
            to={cv}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CV (opens in a new tab)"
          >
            View CV
          </Link>
        </button>
      </section>
    </div>
  );
};
