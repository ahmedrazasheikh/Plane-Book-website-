const TaxiComponent = () => {
  return (
    <div className="flex flex-col p-4 md:flex-row md:p-20 justify-center w-full">
  <div className="md:w-1/2 flex justify-center items-center">
    <img
      src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/carss.jpg"
      alt="Taxi Image"
      className="max-w-full h-auto md:h-full"
    />
  </div>
  <div className="md:w-1/2 flex flex-col justify-center px-4 md:pl-20 text-center md:text-left">
    <h3 style={{"color" : "#FDCE18"}} className="font-bold m-2">WHY CHOOSE US</h3>
    <h1 className="text-2xl md:text-4xl font-extrabold max-w-lg">
      THE BEST HOBART TAXI COMPANY FOR LEISURE, BUSINESS, AND CORPORATE TRAVEL.
    </h1>
    <p className="my-6">
      Hobart Taxi Cabs have the best track record in providing the eyeball-catching gratifying
      experience so that you can have the most pleasant travel with us, and you can share your
      experience with others.
    </p>

    <div className="flex flex-col justify-center items-center md:items-start">
      <span className="my-4 pl-4 md:pl-0 text-xl">QUALITY CARS LOW PRICES</span>
      <span className="my-4 pl-4 md:pl-0 text-xl">10+ YEARS OF EXPERIENCE</span>
      <span className="my-4 pl-4 md:pl-0 text-xl">25000+ HAPPY CUSTOMERS</span>
      <span className="my-4 pl-4 md:pl-0 text-xl">FREE CANCEL</span>
      <span className="my-4 pl-4 md:pl-0 text-xl">CHEAP CAR RENTAL HOBART</span>
      <span className="my-4 pl-4 md:pl-0 text-xl">EMERGENCY PICKUP</span>
    </div>
  </div>
</div>


  );
};

export default TaxiComponent;
