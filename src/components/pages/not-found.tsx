import { Button } from "../button";
import { BentRightArrowIcon } from "../icons";

export const NotFound = () => {
  return <div
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
        </div>;
};
