import { PlayIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="hero mb-14 mt-4 flex h-[750px] w-full flex-col items-center bg-gray-200 max-sm:px-7">
      <div className="hero-content mt-[285px] flex flex-col items-center justify-center">
        <Button className="flex h-28 w-28 items-center justify-center rounded-full bg-black">
          <PlayIcon className="h-14 w-14 text-gray-200" />
        </Button>
        <div className="">
          <h1 className=" mt-16 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            Rate and Review Local Events
          </h1>
        </div>
        <Button className="mt-16 h-16 w-full max-w-[445px]">
          <div className="text-center text-2xl font-semibold leading-[28.80px] tracking-wide text-white">
            JOIN NOW
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
