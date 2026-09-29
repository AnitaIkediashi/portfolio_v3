import { useEffect, useRef, useState } from "react";
import portrait_one from "../assets/pic_1.jpeg";
import portrait_two from "../assets/pic_3.jpeg";

const portraits = [portrait_one, portrait_two];
const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const randSign = () => (Math.random() < 0.5 ? -1 : 1);

export const BouncingAvatar = () => {
  const zoneRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const zone = zoneRef.current;
    const av = avatarRef.current;
    if (!zone || !av) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let x = 60;
    let y = 80;
    let vx = rnd(50, 100);
    let vy = rnd(50, 100);
    let last: number | null = null;
    let raf = 0;

    const place = () => {
      av.style.transform = `translate(${x}px, ${y}px)`;
    };

    place();
    if (reduce) return;

    const tick = (t: number) => {
      if (last === null) last = t;
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;

      const W = zone.clientWidth - av.offsetWidth;
      const H = zone.clientHeight - av.offsetHeight;

      x += vx * dt;
      y += vy * dt;

      let hit = false;
      if (x < 0) {
        x = 0;
        vx = rnd(45, 110);
        vy = randSign() * rnd(45, 110);
        hit = true;
      } else if (x > W) {
        x = W;
        vx = -rnd(45, 110);
        vy = randSign() * rnd(45, 110);
        hit = true;
      }
      if (y < 0) {
        y = 0;
        vy = rnd(45, 110);
        vx = randSign() * rnd(45, 110);
        hit = true;
      } else if (y > H) {
        y = H;
        vy = -rnd(45, 110);
        vx = randSign() * rnd(45, 110);
        hit = true;
      }

      if (hit) setCurrent((c) => (c + 1) % portraits.length);
      place();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={zoneRef} className="relative h-100 hidden lg:block">
      <div
        ref={avatarRef}
        role="img"
        aria-label="Portraits of Anita Ikediashi"
        className="absolute left-0 top-0 w-44 h-44 rounded-full overflow-hidden border-4 border-dark will-change-transform"
      >
        {portraits.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 object-center object-cover w-full h-full transition-opacity duration-200 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
