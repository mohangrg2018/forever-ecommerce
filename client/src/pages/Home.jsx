import BestSeller from "@/components/sections/BestSeller";
import Hero from "@/components/sections/Hero";
import LatestCollection from "@/components/sections/LatestCollection";
import Policy from "@/components/sections/Policy";
import Subscription from "@/components/shared/Subscription";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <Subscription />
    </div>
  );
};

export default Home;
