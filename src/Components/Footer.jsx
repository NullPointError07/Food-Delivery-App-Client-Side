import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/Images/ArrowRight";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white text-left py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10 pl-10">
        <div className="left-content">
          <h1 className="text-2xl mb-4">QUICKEAT</h1>
          <h1 className="font-bold text-5xl mb-5">
            The Best Restaurants in Your Home
          </h1>
          <p className="text-lg">
            Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
            pretium quam.
          </p>
        </div>
        <div className="flex flex-col pl-28 space-y-6 text-xl text-left">
          <div>
            <h1 className="text-2xl">MENU</h1>
          </div>
          <div className="flex hover:text-orange-500 space-x-2">
            <Link to="/Home">Home</Link> <ArrowRight />
          </div>
          <div className="flex hover:text-orange-500 space-x-2">
            <Link to="/aboutus">About Us</Link> <ArrowRight />
          </div>
          <div className="flex hover:text-orange-500 space-x-2">
            <Link to="/restaurants">Restaurants</Link> <ArrowRight />
          </div>
          <div className="flex hover:text-orange-500 space-x-2">
            <Link to="/contacts">Contacts</Link> <ArrowRight />
          </div>
        </div>
        <div className="right-content pr-4">
          <div>
            <h1 className="text-2xl mb-4">CONTACTS</h1>
          </div>
          <div className="flex flex-col space-y-4 text-xl">
            <p className="border-b-2 pb-2">
              1717 Harrison St, San Francisco, CA 94103, United States
            </p>
            <p>quickeat@mail.net</p>
            <p>+1 425 326 16 27</p>
            <div className="flex space-x-2">
              <Link to="https://www.facebook.com/">
                <BsFacebook />
              </Link>
              <Link to="https://www.instagram.com/">
                <BsInstagram />
              </Link>
              <Link to="https://www.twitter.com/">
                <BsTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
