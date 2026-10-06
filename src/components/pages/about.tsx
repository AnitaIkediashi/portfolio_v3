import { experienceData } from "../../data";
import { CancelIcon } from "../icons";

export const About = () => {
  return (
    <div className="min-h-screen">
      <button
        type="button"
        title="Go back"
        aria-label="Go back"
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full grid place-items-center cursor-pointer bg-light/80 backdrop-blur-sm border border-dark/10 shadow-sm text-dark transition-all duration-200 ease-out hover:bg-dark hover:text-light hover:scale-110 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
      >
        <CancelIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:rotate-90" />
      </button>
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
        <ul className="divide-y-[1.5px] divide-[#28204640] border-b-[1.5px] border-[#28204640]">
          {experienceData.map((item) => (
            <li
              key={item.id}
              className="py-4.5 md:py-6 lg:py-7 first:pt-0 md:first:pt-0 lg:first:pt-0"
            >
              <div className="grid grid-cols-[96px_1fr] md:grid-cols-[190px_1fr] gap-3 md:gap-6">
                <span className="pt-1 lg:pt-1.5 text-xs md:text-sm lg:text-base">
                  {item.duration}
                </span>

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
          ))}
        </ul>
      </section>
      <section className="lg:pt-35 pt-16 lg:px-24 px-8">
        <h2 className="lg:mb-4 mb-2.5 md:max-w-140 md:mx-auto lg:text-5xl text-[28px] leading-[1.05] tracking-[-.03em] text-balance font-extrabold md:text-center">
          Want the full story?
        </h2>
        <button type="button"></button>
      </section>
    </div>
  );
};
