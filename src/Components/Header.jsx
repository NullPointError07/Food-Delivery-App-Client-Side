import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuAlignCenter } from "react-icons/lu";

import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0  bg-slate-100 py-4 px-12">
      <div className="flex justify-between items-center flex-wrap">
        <Link>
          <h1 className="text-bold text-2xl">
            Quick<span className="text-orange-500">Eat</span>
          </h1>
        </Link>

        <div className="hidden md:flex md:flex-row space-x-4 text-lg">
          <NavLinks />
        </div>

        <div>
          <Link to="/login">
            <button className="btn bg-orange-500 hover:bg-orange-300 text-white hidden md:block">
              Order Now
            </button>
          </Link>
        </div>
        <button onClick={toggleNavbar} className="md:hidden text-3xl ">
          {isOpen ? <AiOutlineClose /> : <LuAlignCenter />}
        </button>
        {isOpen && (
          <div className="flex flex-col space-y-4 mt-4 md:hidden text-lg items-center basis-full">
            <NavLinks />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
