import BestSeller from "@/components/sections/BestSeller";
import Hero from "@/components/sections/Hero";
import LatestCollections from "@/components/sections/LatestCollections";
import Policy from "@/components/sections/Policy";
import Subscription from "@/components/shared/Subscription";

const Home = () => {
  return (
    <main className="container__width">
      <Hero />
      <LatestCollections />
      <BestSeller />
      <Policy />
      <Subscription />
    </main>
  );
};

export default Home;
