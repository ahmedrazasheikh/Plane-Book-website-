import React from 'react';
import BookingForm from './form';
import No1TexiService from './no1TexiService';
import Images from './images';
import Slider from './slider';
import CopySlider from './copySlider';
import CallToAction from './Call';
import TaxiComponent from './TaxiComponent';
import ImagesSlider from './ImagesSlider';
import Mobile from './Mobile';
import Footer from './HomeFooter';
import  { useState } from 'react';
import './HomeMediaQuery.css'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className=''
    >

{/* // Assuming you have state variables: isOpen and toggleNavbar */}
<div
      style={{
        background: `url(${require('../taxi.jpg')})`,
        backgroundSize: 'cover',
        boxShadow: '0 0 30px 10px rgba(0, 0, 0, 0.5)',
        backgroundPosition: 'center',
      }}
      className='pb-20 h-96'
    >
      <nav className="text-white p-4 flex justify-between items-center">
        <div className="logo h-16 sm:h-24">
          <img
            src="https://hobarttaxicabs.com.au/wp-content/uploads/2017/05/vnbc.png"
            alt="Logo"
            className="h-full"
          />
        </div>
        <div className="hidden md:flex">
          <a href="#" className="mx-4">Home</a>
          <a href="#" className="mx-4">About us</a>
          <a href="#" className="mx-4">Booking</a>
          <a href="#" className="mx-4">Airport Pickup</a>
          <a href="#" className="mx-4">Our services</a>
          <a href="#" className="mx-4">Contacts</a>
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleNavbar}
        >
          {/* <div className="flex flex-col justify-center items-center w-6 h-6"> */}
  <div className={`h-1 w-6 my-1 bg-white ${isOpen ? "rotate-45" : ""}`}></div>
  <div className={`h-1 w-6 my-1 bg-white ${isOpen ? "opacity-0" : ""}`}></div>
  <div className={`h-1 w-6 my-1 bg-white ${isOpen ? "-rotate-45" : ""}`}></div>
{/* </div> */}
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-black p-4 rounded">
            <a href="#" className="block my-2">Home</a>
            <a href="#" className="block my-2">About us</a>
            <a href="#" className="block my-2">Booking</a>
            <a href="#" className="block my-2">Airport Pickup</a>
            <a href="#" className="block my-2">Our services</a>
            <a href="#" className="block my-2">Contacts</a>
          </div>
        )}
      </nav>

      <div>
        <h1 className='text-4xl sm:text-7xl font-bold py-6 text-center' style={{ color: "white" }}>
          Hobart Taxi cab
        </h1>

        <div className="flex justify-center">
          <button className="font-bold bg-yellow-400 text-black rounded-full py-2 px-6 m-2 cursor-pointer focus:outline-none">
            +61435869154 Call Now
          </button>
          <button className="font-bold bg-yellow-400 text-black rounded-full py-2 px-6 m-2 cursor-pointer focus:outline-none">
            Book Online
          </button>
        </div>
      </div>
    </div>



        <BookingForm />
        <No1TexiService/>
        <Images/>
        <Slider/>
        <CopySlider/>
        <CallToAction/>
        <TaxiComponent/>
        <ImagesSlider/>
        <Mobile/>
        <Footer/>
    </div>
  );
};

export default Home;
