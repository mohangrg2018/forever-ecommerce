import { assets } from "@/assets/assets";
import React from "react";

const Policy = () => {
  return (
    <section className="container__width">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 my-12 sm:my-32">
        <div className="flex flex-col items-center gap-1 text-sm">
          <img src={assets.exchange_icon} className="w-10" alt="" />
          <p className="font-bold mt-2">Easy Exchange Policy</p>
          <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-sm">
          <img src={assets.quality_icon} className="w-10" alt="" />
          <p className="font-bold mt-2">7 Days Return Policy</p>
          <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-sm">
          <img src={assets.support_img} className="w-10" alt="" />
          <p className="font-bold mt-2">Best Customer Service</p>
          <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
