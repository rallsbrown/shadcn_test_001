import { PlayIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="hero mb-14 mt-4 flex h-[750px] w-full flex-col items-center bg-gray-200 max-sm:h-[450px] max-sm:px-7">
      <div className="hero-content mt-[110px] flex flex-col items-center justify-center">
        <Button className="flex h-28 w-28 items-center justify-center rounded-full bg-black max-sm:h-20 max-sm:w-20">
          <PlayIcon className="h-14 w-14 text-gray-200 max-sm:h-12 max-sm:w-12" />
        </Button>
        <div className="">
          <h1 className=" mt-16 scroll-m-20 text-center text-4xl font-extrabold tracking-tight max-sm:mt-12 lg:text-5xl">
            Rate and Review Local Events
          </h1>
        </div>
        <Button className="mt-16 h-16 w-full max-w-[445px] max-sm:mt-12">
          <div className="text-center text-2xl font-semibold leading-[28.80px] tracking-wide text-white">
            JOIN NOW
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
