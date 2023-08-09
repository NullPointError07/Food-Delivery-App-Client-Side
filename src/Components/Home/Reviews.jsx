const Reviews = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 my-6">
      <div>
        <h1 className="text-5xl font-semibold mb-2">
          Service Shows <br /> Good Taste
        </h1>
      </div>
      <div className="flex bg-gray-200 py-12 px-16 rounded-lg shadow-md text-left">
        <h1 className="text-5xl font-semibold text-orange-500 mb-2">1300+</h1>
        <p className="text-gray-600 text-xl">
          Satisfied <br /> Customer
        </p>
      </div>
      <div className="flex bg-blue-200 py-12 px-16 rounded-lg shadow-md text-left">
        <h1 className="text-5xl font-semibold text-orange-500 mb-2">12 </h1>
        <p className="text-gray-600 text-xl">
          Best <br />
          Restaurant
        </p>
      </div>
      <div className="flex bg-green-200 py-12 px-16 rounded-lg shadow-md text-left">
        <h1 className="text-5xl font-semibold text-orange-500 mb-2">1K+</h1>
        <p className="text-gray-600 text-xl">
          Food <br />
          Delivered
        </p>
      </div>
    </div>
  );
};

export default Reviews;
