import React from 'react';

const Slider = () => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8'>
  <div className="flex flex-col items-center text-center border border-gray-200 rounded p-4">
    {/* Image */}
    <img
      src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/sssssss.png"
      alt="Taxi Cab"
      className="mx-auto mb-4"
      style={{ width: '100px' }}
    />
    {/* H3 Heading */}
    <h3 className="text-xl font-semibold text-black">FAST & SAFE</h3>
    {/* Paragraph */}
    <p className="text-gray-700">
      Timely Airport Pickup Services are provided to the clients to fly
      flight on-time from Hobart Airport.
    </p>
  </div>

  <div className="flex flex-col items-center text-center border border-gray-200 rounded p-4">
    {/* Image */}
    <img
      src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/ssssass.png"
      alt="Taxi Cab"
      className="mx-auto mb-4"
      style={{ width: '100px' }}
    />
    {/* H3 Heading */}
    <h3 className="text-xl font-semibold text-black my-2">BEST PRICES</h3>
    {/* Paragraph */}
    <p className="text-gray-700">
      Timely Airport Pickup Services are provided to the clients to fly
      flight on-time from Hobart Airport.
    </p>
  </div>

  <div className="flex flex-col items-center text-center border border-gray-200 rounded p-4">
    {/* Image */}
    <img
      src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/sssas.png"
      alt="Taxi Cab"
      className="mx-auto mb-4"
      style={{ width: '100px' }}
    />
    {/* H3 Heading */}
    <h3 className="text-xl font-semibold text-black">BEST SERVICES</h3>
    {/* Paragraph */}
    <p className="text-gray-700">
      Timely Airport Pickup Services are provided to the clients to fly
      flight on-time from Hobart Airport.
    </p>
  </div>

  <div className="flex flex-col items-center text-center border border-gray-200 rounded p-4">
    {/* Image */}
    <img
      src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/ss.png"
      alt="Taxi Cab"
      className="mx-auto mb-4"
      style={{ width: '100px' }}
    />
    {/* H3 Heading */}
    <h3 className="text-xl font-semibold text-black">24/7 AVAILABLE</h3>
    {/* Paragraph */}
    <p className="text-gray-700">
      Timely Airport Pickup Services are provided to the clients to fly
      flight on-time from Hobart Airport.
    </p>
  </div>
</div>


  );
};

export default Slider;
