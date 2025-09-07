import { assets } from "@/assets/assets";
import Subscription from "@/components/shared/Subscription";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div className="container__width">
      <div className="border-t border-gray-200 pt-6 sm:pt-8">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center">
            <Title title1="contact" title2="us" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-8">
            {/* left side */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
              <img
                src={assets.contact_img}
                className="w-full sm:w-[80%]"
                alt=""
              />
            </div>
            {/* right side */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center gap-8">
              <div className="flex flex-col gap-2">
                <p className="uppercase font-semibold">our store</p>
                <p className="text-gray-500 text-sm">54709 Willms Station </p>
                <p className="text-gray-500 text-sm">
                  Suite 350, Washington, USA
                </p>
              </div>
              <div className="flex flex-col gap-1 text-sm text-gray-500">
                <a href="tel:+1 (234) 567-8901"> +1 (234) 567-8901</a>
                <a href="mailto:info@foreverecommerce">info@foreverecommerce</a>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="uppercase font-semibold">careers at forever</p>
                <p className="text-gray-500 text-sm">
                  Learn more about our teams and job openings.
                </p>
                <Button variant="outline">Explore Jobs</Button>
              </div>
            </div>
          </div>
        </div>
        <Subscription />
      </div>
    </div>
  );
};

export default Contact;
