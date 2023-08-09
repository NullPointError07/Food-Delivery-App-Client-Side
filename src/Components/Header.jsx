import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link>
        <h1 className="text-bold text-2xl">
          Quick<span className="text-orange-500">Eat</span>
        </h1>
      </Link>
      <div className="flex space-x-4 text-lg">
        <NavLink>
          <p>Home</p>
        </NavLink>
        <NavLink>
          <p>Restaurant</p>
        </NavLink>
        <NavLink>
          <p>About Us</p>
        </NavLink>
        <NavLink>
          <p>Pages</p>
        </NavLink>
        <NavLink>
          <p>Contacts</p>
        </NavLink>
      </div>
      <div>
        <Link to="/login">
          <button className="btn bg-orange-500 text-white">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
