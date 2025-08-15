import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Subscription = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="capitalize font-bold text-2xl text-center">
        subscribe now & get 20% off
      </p>
      <p className="text-center text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolor
      </p>
      <form className="flex items-center w-[90%] sm:w-[80%] lg:w-[50%] mx-auto">
        <Input placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </form>
    </section>
  );
};

export default Subscription;
