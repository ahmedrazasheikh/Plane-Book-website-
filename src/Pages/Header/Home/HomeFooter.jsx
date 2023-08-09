import React from 'react';


function Footer() {
  return (


<div style={{ backgroundColor: '#171717' }} className='text-white'>
  <div className="container mx-auto flex flex-col md:flex-row justify-evenly py-8">
    <div className="border-r-2 pr-4 md:pr-9 mb-4 md:mb-0">
      <h1 className="text-2xl font-bold mb-2">ABOUT</h1>
      <p className="w-full md:w-72">
        Looking for a Safe, Reliable & Affordable Taxi Cab Provider in Hobart? We created our Taxi Hobart to help you find the most dependable and highest quality taxi service in Hobart, Book Your Hobart Taxi Online anytime and anywhere. We Always Provide the best Taxi Services to Our Clients.
      </p>
    </div>
    <div className="border-r-2 pr-4 md:pr-10 flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-2">ADDRESS</h1>
      <h2>Hobart, Tasmania (Australia)</h2>
    </div>
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-2">CONTACTS</h1>
      <h3>0435869154</h3>
      <h3>hobarttaxicabs@gmail.com</h3>
    </div>
  </div>

  <div className="text-center py-4">
    <p className='font-bold'>&copy;2023 HOBART TAXI CABS. All rights reserved</p>
    <p>Powered by <span className='font-bold'>Brandsteps</span></p>
  </div>
</div>
    
  );
}

export default Footer;
