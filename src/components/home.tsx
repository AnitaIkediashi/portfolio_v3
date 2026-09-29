import { Link } from "react-router";
import { GithubIcon } from "./icons/github"
import { LinkedinIcon } from "./icons/linkedin";
import { TiktokIcon } from "./icons/tiktok";
import { BouncingAvatar } from "./bouncing_avatar";
import { Button } from "./button";
import { RightArrowIcon } from "./icons/right_arrow";
import pic_one from "../assets/pic_1.jpeg"
import pic_four from "../assets/pic_4.jpeg"

const socialsUrl = [
  {
    icon: <GithubIcon className="stroke-dark" />,
    url: "https://github.com/AnitaIkediashi",
  },
  {
    icon: <LinkedinIcon />,
    url: "https://www.linkedin.com/in/anita-ikediashi-a61668188/",
  },
  {
    icon: <TiktokIcon />,
    url: "https://www.tiktok.com/@anitezb_art?_r=1&_t=ZS-99jMCVbE8KF",
  },
];

export const Home = () => {
  return (
    <>
      <header className="lg:px-24 px-8 pt-8">
        <nav className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1 capitalize">
            <Link
              to="/about"
              className="inline-flex items-center justify-center h-11 lg:-ml-5 -ml-3 lg:px-5 px-3 text-dark font-semibold md:text-lg text-[15px] cursor-pointer hover:bg-tint40 lg:rounded-[999px] rounded-4xl bg-transparent transition-colors"
            >
              about
            </Link>
            <Link
              to="/play"
              className="inline-flex items-center justify-center h-11 lg:px-5 px-3 text-dark font-semibold md:text-lg text-[15px] cursor-pointer hover:bg-tint40 lg:rounded-[999px] rounded-4xl bg-transparent transition-colors"
            >
              play
            </Link>
          </div>
          <ul className="flex items-center gap-1">
            {socialsUrl.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  target="_blank"
                  className="h-8 w-8 grid place-items-center rounded-full border-dark border-[0.5px] cursor-pointer hover:bg-tint40 bg-transparent transition-colors"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="lg:pt-14 pt-10 lg:px-24 px-8 lg:pb-30 pb-10 grid lg:grid-cols-[1fr_400px] grid-cols-1 gap-12 lg:items-start">
        <div>
          <h1 className="font-extrabold text-[clamp(48px,10cqw,144px)] leading-[.92] tracking-[-.035em] text-center lg:text-left">
            Anita <br /> Ifeoma <br /> Ikediashi
          </h1>
          <p className="lg:max-w-150 mt-8 mb-10 text-pretty lg:text-[26px] text-lg leading-[1.3] text-center lg:text-left font-medium">
            Full stack developer, mobile photographer and artist.
          </p>
        </div>
        <BouncingAvatar />
      </section>
      <section className="lg:pt-30 pt-10 lg:px-24 px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-24 gap-10">
          <div>
            <h2 className="lg:text-5xl text-[28px] leading-[1.05] tracking-[-.03em] text-balance font-extrabold mb-6">
              A little about me
            </h2>
            <p className="text-pretty lg:max-w-140 mb-9 lg:text-lg text-[15px]">
              I build full stack products, take photos when the light is good,
              and make art when I need to think. I care about small details,
              fast pages, and pictures that say something.
            </p>
            <Button
              label="More about me"
              className="group bg-tint30 inline-flex items-center justify-center flex-row-reverse gap-2.5 lg:rounded-[999px] rounded-4xl hover:bg-dark hover:text-light transition-colors font-semibold lg:text-lg text-[15px] h-14 text-nowrap px-7"
              href="/about"
              icon={
                <RightArrowIcon className="group-hover:stroke-light transition-colors stroke-dark" />
              }
            />
          </div>
          <div className="h-107.5 relative">
            <img
              aria-label="Portrait of anita"
              src={pic_one}
              alt="portrait of me"
              className="block absolute lg:left-17.5 left-0 top-0 lg:w-1/2 w-[60%] h-87.5 rounded-[20px] border-[6px] border-light shadow-100 rotate-[-5deg] object-cover object-center"
            />
            <img
              aria-label="my drawing"
              src={pic_four}
              alt="art"
              className="block absolute lg:left-56 left-32.75 top-20 lg:w-1/2 w-[60%] h-87.5 rounded-[20px] border-[6px] border-light shadow-100 rotate-[4deg] object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="lg:pt-30 pt-10 lg:px-24 px-8">
        <div className="flex lg:flex-row flex-col lg:items-end lg:justify-between lg:gap-14 gap-4 lg:mb-14 mb-10">
          <h2 className="lg:text-5xl text-[28px] leading-[1.05] tracking-[-.03em] text-balance font-extrabold">
            Works
          </h2>
          <p className="text-pretty lg:text-[26px] text-base font-medium leading-[1.3] lg:max-w-110">
            Here are a few selections of my work.
          </p>
        </div>
        <div
          className="w-full grid lg:grid-cols-2 grid-cols-1 gap-2.5 items-center"
          aria-label="Some of my works"
        >
          <div className="flex flex-col w-full gap-2">
            <img
              src="/talentpoel.png"
              alt="my work"
              className="lg:h-[33vw] h-[60vw] w-full object-cover rounded"
            />
            <p>
              <span className="text-xs opacity-60">01</span>{" "}
              <span>Talentpoel</span>
            </p>
          </div>
          <div className="flex flex-col w-full gap-2">
            <img
              src="/travel_booking.png"
              alt="my work"
              className="lg:h-[33vw] h-[60vw] w-full object-cover rounded"
            />
            <p>
              <span className="text-xs opacity-60">02</span>{" "}
              <span>Booking platform</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center lg:mt-14 mt-10">
          <Button
            href="https://github.com/AnitaIkediashi"
            label="View more"
            className="group bg-dark text-light inline-flex items-center justify-center gap-2.5 lg:rounded-[999px] rounded-4xl hover:bg-tint40 hover:text-dark hover:shadow-100 transition-colors font-semibold lg:text-lg text-[15px] h-14 text-nowrap px-7"
            icon={
              <GithubIcon className="group-hover:stroke-dark transition-colors stroke-light" />
            }
          />
        </div>
      </section>
    </>
  );
}
