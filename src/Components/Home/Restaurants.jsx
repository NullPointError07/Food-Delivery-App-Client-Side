import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const handleSeeAll = () => {
    setSeeAll(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://food-delivery-server-phi.vercel.app/"
        );
        setShowLoader();
        // const response = await fetch("http://localhost:5000/");
        const data = await response.json();
        setRestaurants(data);
        // console.log(data); [testing purpose]
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the async function here
  }, []);

  //   console.log(restaurants); [Another testing purpose]

  const displayRestaurants = seeAll ? restaurants : restaurants.slice(0, 4);

  return (
    <div>
      <h1 className="text-5xl">12 Best Restaurants In Your City</h1>
      <p className="text-gray-400 lg:mx-60 py-4">
        Embark on a culinary journey through the 12 best restaurants that your
        city has to offer. From cozy cafes to upscale dining establishments,
        these culinary havens promise unforgettable experiences for every palate
      </p>
      {showLoader && <span className="loading loading-bars loading-lg"></span>}
      <div className="grid lg:grid-cols-2 gap-4">
        {displayRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="border-2 flex flex-col space-y-3 md:flex-row space-x-2 bg-gray-50 text-left p-6"
          >
            <div className="lg:w-1/2">
              <img
                style={{ width: 120, height: 120 }}
                src={restaurant.image_placeholder}
                alt=""
              />
            </div>
            <div className="flex flex-col space-y-2">
              {/* to navigate it to a new route i used Link*/}
              <Link to={`restaurant/${restaurant.id.toString()}`}>
                <h1 className="text-2xl font-bold">
                  {restaurant.restaurant_name}
                </h1>
              </Link>
              <p>{restaurant.star_rating}</p>
              <ul>
                {restaurant.restaurant_type.map((type, index) => (
                  <button
                    key={index}
                    className="border border-orange-500 text-orange-500 rounded-md mr-2 btn-sm"
                  >
                    <li>{type}</li>
                  </button>
                ))}
              </ul>
              <p className="text-lg text-gray-400">{restaurant.description}</p>
            </div>
          </div>
        ))}
      </div>
      {restaurants.length > 4 && !seeAll && (
        <button
          className="btn p-4 hover:bg-orange-500 mt-4"
          onClick={handleSeeAll}
        >
          See All
        </button>
      )}
    </div>
  );
};

export default Restaurants;
