import { Link } from "react-router";
import { GithubIcon } from "../assets/icons/github"
import { LinkedinIcon } from "../assets/icons/linkedin";
import { TiktokIcon } from "../assets/icons/tiktok";
import { BouncingAvatar } from "./bouncing_avatar";

const socialsUrl = [
  {
    icon: <GithubIcon />,
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
              className="inline-flex items-center justify-center h-11 lg:-ml-5 -ml-3 lg:px-5 px-3 text-dark font-semibold md:text-lg text-base cursor-pointer hover:bg-tint40 lg:rounded-[999px] rounded-4xl bg-transparent transition-colors"
            >
              about
            </Link>
            <Link
              to="/play"
              className="inline-flex items-center justify-center h-11 lg:px-5 px-3 text-dark font-semibold md:text-lg text-base cursor-pointer hover:bg-tint40 lg:rounded-[999px] rounded-4xl bg-transparent transition-colors"
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
    </>
  );
}
