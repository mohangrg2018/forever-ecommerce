import { assets } from "@/assets/assets";
import React from "react";

const Policy = () => {
  return (
    <section className="my-14 sm:my-24 flex flex-col w-full justify-center sm:flex-row gap-10 sm:gap-20">
      <div className="text-sm flex flex-col items-center gap-2">
        <img src={assets.exchange_icon} className="w-12" alt="" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-center text-gray-400">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="text-sm flex flex-col items-center gap-2">
        <img src={assets.quality_icon} className="w-12" alt="" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-center text-gray-400">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="text-sm flex flex-col items-center gap-2">
        <img src={assets.support_img} className="w-12" alt="" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-center text-gray-400">
          We provide 24/7 customer support
        </p>
      </div>
    </section>
  );
};

export default Policy;
