import step1Image from "../../assets/Images/SecondSection_Step1.png";
import step2Image from "../../assets/Images/SecondSection_Step2.png";
import step3Image from "../../assets/Images/SecondSection_Step3.png";

const SecondSection = () => {
  return (
    <div className="mt-4 text-center my-10">
      <h1 className="text-5xl font-bold">How it Works</h1>
      <p className="lg:mx-52 text-lg py-6">
        Our food delivery app works like magic: simply browse, choose, and order
        from a variety of local restaurants. Our dedicated drivers swiftly pick
        up your order and bring it to your doorstep, ensuring your cravings are
        satisfied fresh and fast.
      </p>
      <div className="flex justify-between space-x-20">
        <div className="flex flex-col items-center text-center space-y-3">
          <img src={step1Image} alt="" />
          <h1>
            <span>01 </span>Select Restaurant
          </h1>
          <p>
            Discover a world of flavors with our app. Handpick your favorite
            restaurant, and we will bring their delicious offerings right to
            you.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-3">
          <img src={step2Image} alt="" />
          <h1>
            <span>02 </span>Select Menu
          </h1>
          <p>
            Craft your ideal meal effortlessly. Our app lets you handpick dishes
            from the restaurant menu, ensuring every bite is tailored to your
            cravings and preferences.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-3">
          <img src={step3Image} alt="" />
          <h1>
            <span>03 </span>Wait for Delivery
          </h1>
          <p>
            Savor the wait with eagerness. Your selected delights are in good
            hands. We are on our way to bring your chosen flavors straight to
            you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
