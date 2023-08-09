import { useLoaderData } from "react-router-dom";

const RestaurantDetails = () => {
  const restaurant = useLoaderData();
  console.log(restaurant);
  return (
    <div className="text-left mt-10 w-2/5">
      <div className="flex space-x-4">
        <img
          style={{ width: 100, height: 100 }}
          src={restaurant.image_placeholder}
          alt=""
        />
        <h1 className="text-5xl font-bold">{restaurant.restaurant_name}</h1>
      </div>
      <p className="my-3 text-sm text-gray-400">Rate:</p>
      <p>{restaurant.star_rating}</p>
      <p className="my-3 text-sm text-gray-400">CUISINES:</p>

      {restaurant.restaurant_type.map((type, index) => (
        <button
          key={index}
          className="border border-orange-500 text-orange-500 rounded-md mr-2 btn-sm"
        >
          {type}
        </button>
      ))}

      <p className="my-3 text-sm text-gray-400">FEATURES:</p>
      <p className="text-lg text-gray-500">{restaurant.description}</p>
      <p className="my-3 text-sm text-gray-400">Enjoy Your</p>
      {restaurant.serving_options.map((type, index) => (
        <button
          key={index}
          className="border border-blue-500 text-blue-500 rounded-md mr-2 btn-sm"
        >
          {type}
        </button>
      ))}
      <p className="my-3 text-sm text-gray-400">Opening Hours:</p>
      <p>
        {" "}
        {restaurant.opening_time} to {restaurant.closing_time}
      </p>
    </div>
  );
};

export default RestaurantDetails;
