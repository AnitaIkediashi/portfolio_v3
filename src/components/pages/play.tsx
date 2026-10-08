import { Link } from "react-router";
import { Button } from "../button";
import { CancelIcon, TiktokIcon } from "../icons";
import { InstagramIcon } from "../icons/instagram";

export const Play = () => {
  return (
    <>
      <Link
        to="/"
        title="Go back"
        aria-label="Go back"
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full grid place-items-center cursor-pointer bg-light/80 backdrop-blur-sm border border-dark/10 shadow-sm text-dark transition-all duration-200 ease-out hover:bg-dark hover:text-light hover:scale-110 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
      >
        <CancelIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:rotate-90" />
      </Link>
      <section className="lg:px-24 px-8 lg:pt-18 pt-10 text-center">
        <h1 className="font-extrabold text-[clamp(48px,10cqw,144px)] leading-[.92] tracking-[-.035em]">
          Play
        </h1>
        <p className="lg:max-w-195 mx-auto text-pretty mt-7 lg:text-[26px] text-lg leading-[1.3] font-medium">
          Photos and sketches I make when I'm not building. New ones go up on
          Instagram and TikTok first. If something speaks to you, reach out —
          most pieces are available.
        </p>
        <div className="mt-8 flex lg:flex-row flex-col items-center justify-center gap-3.5">
          <Button
            label="Watch on TikTok"
            className="group hover:bg-tint40 hover:text-dark hover:shadow-light text-light bg-dark inline-flex items-center justify-center lg:gap-2.5 gap-2 lg:h-14 h-11.5 lg:px-7 px-5 rounded-[999px] whitespace-nowrap font-semibold lg:text-lg text-[15px] transition-colors"
            icon={
              <TiktokIcon className="stroke-light group-hover:stroke-dark transition-colors" />
            }
            href="https://www.tiktok.com/@anitezb_art?_r=1&_t=ZS-99jMCVbE8KF"
            target="_blank"
          />
          <Button
            label="See more on Instagram"
            className="group hover:bg-dark hover:text-light hover:shadow-light text-dark bg-tint40 inline-flex items-center justify-center lg:gap-2.5 gap-2 lg:h-14 h-11.5 lg:px-7 px-5 rounded-[999px] whitespace-nowrap font-semibold lg:text-lg text-[15px] transition-colors"
            icon={
              <InstagramIcon className="stroke-dark group-hover:stroke-light transition-colors" />
            }
            href="https://www.instagram.com/ani_a_nature_lover?stkn=d2hrajczN292d3Nt&utm_source=qr"
            target="_blank"
          />
        </div>
      </section>
      <section className="lg:pt-22 pt-10 lg:px-24 px-8 columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 lg:gap-5" aria-label="Gallery of artworks"></section>
    </>
  );
};
