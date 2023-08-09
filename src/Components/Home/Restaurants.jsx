import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000");
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

  return (
    <div>
      <h1 className="text-5xl">12 Best Restaurants In Your City</h1>
      <p className="text-gray-400 lg:mx-60 py-4">
        Embark on a culinary journey through the 12 best restaurants that your
        city has to offer. From cozy cafes to upscale dining establishments,
        these culinary havens promise unforgettable experiences for every palate
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="border-2 flex lg:flex-row md:flex-col sm:flex-col space-x-2 bg-gray-50 text-left p-6"
          >
            <div className="lg:w-1/2">
              <img
                style={{ width: 120, height: 120 }}
                src={restaurant.image_placeholder}
                alt=""
              />
            </div>
            <div>
              <Link>
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
      <button className="btn p-4 hover:bg-orange-500 mt-4">SEE ALL</button>
    </div>
  );
};

export default Restaurants;
