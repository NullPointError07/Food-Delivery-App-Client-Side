import { useState } from "react";
import homeTopImg from "../../assets/Images/HomeTopImage.png";
import { Link } from "react-router-dom";
import {
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/24/solid";
import SecondSection from "./SecondSection";
import Restaurants from "./Restaurants";
import Reviews from "./Reviews";

const Home = () => {
  const [dropdown, setDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropDown(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w=1/2 text-left">
          <h1 className="text-8xl">Best Restaurant In Your Home</h1>
          <p className="my-4 text-xl text-gray-400">
            From kitchen to doorstep, we are your culinary concierge, delivering
            joy in every bite through our seamless and swift food delivery app
          </p>
          <div className="flex space-x-4">
            <div className="dropdown text-xl">
              <button
                className="border-2 flex items-center py-2 px-2"
                onClick={toggleDropDown}
              >
                <span className="flex-grow pr-60">
                  {selectedOption ? selectedOption : "Choose a Restaurant"}
                </span>
                <span>
                  {dropdown ? (
                    <ArrowSmallUpIcon className="w-5 h-5 inline" />
                  ) : (
                    <ArrowSmallDownIcon className="w-5 h-5 inline" />
                  )}
                </span>
              </button>
              {dropdown && (
                <ul className="pl-2 border-2">
                  <li onClick={() => handleOptionSelect("Restaurant 1")}>
                    Restaurant 1
                  </li>
                  <li onClick={() => handleOptionSelect("Restaurant 2")}>
                    Restaurant 2
                  </li>
                  <li onClick={() => handleOptionSelect("Restaurant 3")}>
                    Restaurant 3
                  </li>
                </ul>
              )}
            </div>
            <Link to="/login">
              <button className="btn bg-orange-500 text-white">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <img src={homeTopImg} alt="" />
      </div>
      <SecondSection></SecondSection>
      <Restaurants></Restaurants>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
