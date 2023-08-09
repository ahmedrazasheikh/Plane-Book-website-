import React from 'react';

const CallToAction = () => {
  return (
    <div
  style={{
    width: "100%",
    height: "auto", /* Adjust height to 'auto' for responsiveness */
    backgroundImage: `url('https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/man-giving-taxi-services-through-app-scaled.jpg')`,
    backgroundSize: 'cover',
  }}
  className="relative"
>
  <div className="flex flex-col items-center py-10 sm:py-36"> {/* Reduce vertical padding for small viewports */}
    <h3 className="text-white text-2xl font-bold mb-3 sm:mb-6" style={{ textAlign: "left", fontSize: "1.5rem" }}> {/* Reduce font size for small viewports */}
      CALL US TO BOOK A TAXI
    </h3>

    <h2 className="text-yellow-500 text-4xl sm:text-8xl font-semibold text-center mb-6 sm:mb-8"> {/* Reduce font size for small viewports */}
      <a href="tel:(718)%20999-2200" title="(718) 999-2200">
        WE ARE READY TO TAKE YOUR CALL 24/7!
      </a>
    </h2>

    <a
      href="tel:+61435869154"
      className="py-2 px-6 sm:py-3 sm:px-8 bg-yellow-500 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-600" 
      style={{ fontSize: "1.2rem" }}  
    >
      Call Now
    </a>
  </div>
</div>

  );
};

export default CallToAction;
