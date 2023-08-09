import React from 'react'

const CopySlider = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10 px-6 bg-black py-10">
      {/* Service 1 */}
      <div className="text-white w-full md:w-1/2 lg:w-1/4 text-center mb-6">
        <img
          src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/ssssss-1.png"
          alt="Taxi Cab"
          className="mx-auto mb-4"
          style={{ width: '100px' }}
        />
        <h3 className="text-xl font-bold">ADDRESS PICKUP</h3>
        <p>We always pick up our clients on time, 24/7 availability.</p>
      </div>

      {/* Service 2 */}
      <div className="text-white w-full md:w-1/2 lg:w-1/4 text-center mb-6">
        <img
          src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/sss-1.png"
          alt="Taxi Cab"
          className="mx-auto mb-4"
          style={{ width: '100px' }}
        />
        <h3 className="text-xl font-bold my-2">AIRPORT TRANSFER</h3>
        <p>We always pick up our clients on time, 24/7 availability.</p>
      </div>

      {/* Service 3 */}
      <div className="text-white w-full md:w-1/2 lg:w-1/4 text-center mb-6">
        <img
          src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/ssss.png"
          alt="Taxi Cab"
          className="mx-auto mb-4"
          style={{ width: '100px' }}
        />
        <h3 className="text-xl font-bold">LONG DISTANCE</h3>
        <p>We offer you a long distance taxi service to anywhere.</p>
      </div>

      {/* Service 4 */}
      <div className="text-white w-full md:w-1/2 lg:w-1/4 text-center mb-6">
        <img
          src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/sssss-1.png"
          alt="Taxi Cab"
          className="mx-auto mb-4"
          style={{ width: '100px' }}
        />
        <h3 className="text-xl font-bold">TAXI TOURS</h3>
        <p>We offer taxi tours of various durations and complexities.</p>
      </div>
    </div>

  )
}

export default CopySlider