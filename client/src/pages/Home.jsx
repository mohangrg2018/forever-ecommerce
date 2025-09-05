import BestSeller from "@/components/sections/BestSeller";
import Hero from "@/components/sections/Hero";
import LatestCollection from "@/components/sections/LatestCollection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
