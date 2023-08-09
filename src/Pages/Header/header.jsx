import React from 'react';

const Header = () => {
  return (
    <div
    style={{
      // Path to the image relative to the public folder

    }}
    
    
    className='h-96 bg-cover bg-center bg-black'>
      <div className="header flex justify-between items-center px-8 sm:px-16 text-white py-8">
        {/* Logo */}
        <div className="logo h-24">
          {/* Increase the height of the logo by setting the h-12 class */}
          <img src="https://hobarttaxicabs.com.au/wp-content/uploads/2017/05/vnbc.png" alt="Logo" className="h-full" />
          {/* You can adjust the logo height using the h-12 class */}
        </div>

        {/* Navigation */}
        <div className='flex justify-center sm:pr-8'>
          {/* Use responsive classes to adjust the padding */}
          <ul className="navigation flex space-x-4 sm:space-x-9">
            {/* Use responsive classes to adjust space between navigation items */}
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Airport Pickup</a></li>
            <li><a href="#">Our services</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
      </div>

      <div>
        <h1 className='text-4xl sm:text-7xl font-bold py-6' style={{ color: "white" }}>
          About us
        </h1>
        {/* Set text color to white for the heading */}
        <p style={{ color: "white" }}>Home / About us</p>
        {/* Set text color to white for the paragraph */}
      </div>
    </div>
  );
};

export default Header;
