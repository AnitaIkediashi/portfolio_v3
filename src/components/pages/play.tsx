import { useEffect, useCallback, useRef, useState } from "react";
import { Link } from "react-router";
import { Button } from "../button";
import {
  CancelIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TiktokIcon,
} from "../icons";
import { InstagramIcon } from "../icons/instagram";
import { gallery } from "../../data";

const TRANSITION_MS = 250;
const IMG_FADE_MS = 220;
const SLIDE_PX = 28;

type ImgPhase = "idle" | "exiting" | "entering";
type Direction = "next" | "prev";

export const Play = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // mounted: whether the lightbox is in the DOM at all
  // visible: whether it's showing the "open" (vs "closing") styles — this is
  // the flag that drives the fade/scale transition in both directions
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // image slide/fade state, independent of the open/close transition above
  const [imgPhase, setImgPhase] = useState<ImgPhase>("idle");
  const [direction, setDirection] = useState<Direction>("next");
  const [noTransition, setNoTransition] = useState(false);

  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const imgFadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = gallery.length;

  const open = useCallback((idx: number) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (imgFadeTimeout.current) clearTimeout(imgFadeTimeout.current);
    setNoTransition(true);
    setImgPhase("idle");
    setActiveIndex(idx);
    setMounted(true);
    // next tick, so the browser registers the pre-transition styles first
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setVisible(true);
        setNoTransition(false);
      }),
    );
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    closeTimeout.current = setTimeout(() => {
      setMounted(false);
      setActiveIndex(null);
    }, TRANSITION_MS);
  }, []);

  // changeIndex plays three steps:
  // 1. "exiting": slide + fade the current image out, in the direction of travel
  // 2. once that finishes, swap the index (and src) and snap — with
  //    transitions disabled for one frame — to the "entering" position on
  //    the opposite side, still invisible
  // 3. re-enable transitions and switch to "idle": the new image slides and
  //    fades in from that side to its resting position
  const changeIndex = useCallback(
    (dir: Direction, updater: (i: number) => number) => {
      if (imgFadeTimeout.current) clearTimeout(imgFadeTimeout.current);
      setDirection(dir);
      setImgPhase("exiting");

      imgFadeTimeout.current = setTimeout(() => {
        setActiveIndex((i) => (i === null ? i : updater(i)));
        setNoTransition(true);
        setImgPhase("entering");
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setNoTransition(false);
            setImgPhase("idle");
          }),
        );
      }, IMG_FADE_MS);
    },
    [],
  );

  const showPrev = useCallback(
    () => changeIndex("prev", (i) => (i - 1 + total) % total),
    [total, changeIndex],
  );
  const showNext = useCallback(
    () => changeIndex("next", (i) => (i + 1) % total),
    [total, changeIndex],
  );

  // keyboard support: Escape to close, arrow keys to navigate
  useEffect(() => {
    if (!mounted) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mounted, close, showPrev, showNext]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      if (imgFadeTimeout.current) clearTimeout(imgFadeTimeout.current);
    };
  }, []);

  const active = activeIndex !== null ? gallery[activeIndex] : null;

  // translateX for the image based on phase + direction
  // exiting "next": slides out to the left (-), "prev": slides out to the right (+)
  // entering "next": starts from the right (+), "prev": starts from the left (-)
  let translateX = 0;
  if (imgPhase === "exiting")
    translateX = direction === "next" ? -SLIDE_PX : SLIDE_PX;
  if (imgPhase === "entering")
    translateX = direction === "next" ? SLIDE_PX : -SLIDE_PX;

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

      <section
        className="lg:pt-22 pt-10 lg:px-24 px-8 columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 lg:gap-5"
        aria-label="Gallery of artworks"
      >
        {gallery.map((item, idx) => (
          <figure
            key={idx}
            className="break-inside-avoid lg:mb-5 mb-3 rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => open(idx)}
          >
            <img
              src={item.img}
              alt={item.alt}
              loading="lazy"
              aria-label={item.alt}
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </figure>
        ))}
      </section>

      {/* ---------- Lightbox ---------- */}
      {mounted && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className={`fixed inset-0 z-50 backdrop-blur-sm flex flex-col items-center justify-center px-4 sm:px-6 py-6 transition-opacity ease-out ${
            visible ? "bg-dark/95 opacity-100" : "bg-dark/95 opacity-0"
          }`}
          style={{ transitionDuration: `${TRANSITION_MS}ms` }}
          onClick={close}
        >
          {/* close */}
          <button
            type="button"
            title="Close"
            aria-label="Close"
            onClick={close}
            className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full grid place-items-center cursor-pointer bg-light/10 border border-light/20 text-light transition-all ease-out hover:bg-light hover:text-dark hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
          >
            <CancelIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* prev */}
          <button
            type="button"
            title="Previous"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className={`fixed left-2 sm:left-6 top-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full grid place-items-center cursor-pointer bg-light/10 border border-light/20 text-light transition-all ease-out hover:bg-light hover:text-dark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${
              visible
                ? "opacity-100 translate-x-0 -translate-y-1/2"
                : "opacity-0 -translate-x-2 -translate-y-1/2"
            }`}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* next */}
          <button
            type="button"
            title="Next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className={`fixed right-2 sm:right-6 top-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full grid place-items-center cursor-pointer bg-light/10 border border-light/20 text-light transition-all ease-out hover:bg-light hover:text-dark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${
              visible
                ? "opacity-100 translate-x-0 -translate-y-1/2"
                : "opacity-0 translate-x-2 -translate-y-1/2"
            }`}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* image, stop propagation so clicking the image itself doesn't close */}
          <div
            className={`relative max-w-5xl w-full max-h-[75vh] rounded-2xl overflow-hidden transition-all ease-out ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.img}
              alt={active.alt}
              className="w-full h-full max-h-[75vh] object-contain"
              style={{
                opacity: imgPhase === "idle" ? 1 : 0,
                transform: `translateX(${translateX}px)`,
                transition: noTransition
                  ? "none"
                  : `opacity ${IMG_FADE_MS}ms ease-out, transform ${IMG_FADE_MS}ms ease-out`,
              }}
            />
          </div>

          {/* counter */}
          <div
            className={`mt-5 px-4 py-1.5 rounded-full bg-light/10 text-light text-sm font-medium transition-opacity ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
            onClick={(e) => e.stopPropagation()}
          >
            {activeIndex !== null ? activeIndex + 1 : 0} / {total}
          </div>
        </div>
      )}
    </>
  );
};
