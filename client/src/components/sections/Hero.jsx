import { assets } from "@/assets/assets";
import React from "react";

const Hero = () => {
  return (
    <section className="border border-gray-300 flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col justify-center gap-3 px-10 py-16 sm:px-12">
        <p className="uppercase flex items-center gap-2">
          <span className="h-[2px] w-10 bg-primary" />
          our bestsellers
        </p>
        <h1 className="capitalize prata-regular text-4xl">Latest arrivals</h1>
        <p className="uppercase flex items-center gap-2 font-semibold">
          shop now
          <span className="h-[2px] w-10 bg-primary" />
        </p>
      </div>
      <div className="w-full sm:w-1/2">
        <img src={assets.hero_img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
