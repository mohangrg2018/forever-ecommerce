import { assets } from "@/assets/assets";
import React from "react";

const Hero = () => {
  return (
    <section className="container__width">
      <div className="flex flex-col sm:flex-row border border-gray-200 mt-6 sm:mt-2">
        <div className="w-full sm:w-1/2 flex flex-col justify-center gap-4 py-14 px-16">
          <p className="uppercase flex items-center gap-2">
            <span className="h-0.5 w-10 bg-black" />
            our bestsellers
          </p>
          <h1 className="capitalize prata-regular text-4xl">latest arrivals</h1>
          <p className="uppercase flex items-center gap-2">
            shop now
            <span className="h-0.5 w-10 bg-black" />
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={assets.hero_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
