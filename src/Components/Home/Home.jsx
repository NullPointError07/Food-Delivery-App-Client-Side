import Banner from "./Banner";
import Restaurants from "./Restaurants";
import Reviews from "./Reviews";
import SecondSection from "./SecondSection";

const Home = () => {
  return (
    <div className="mx-12">
      <Banner />
      <SecondSection />
      <Restaurants />
      <Reviews />
    </div>
  );
};

export default Home;
