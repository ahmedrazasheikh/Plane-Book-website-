import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeMediaQuery.css'

const testimonialData = [
  {
    name: 'John Doe',
    title: 'CEO',
    message: 'Love this taxi company and I use their services as often as it’s possible. Thank you guys for always being so quick and helpful… Samanta Herman Los Angeles, CA The drivers are always super sweet and smiling. Plus I get bonuses each time I use this company’s services which is so cool…'
  },
  {
    name: 'Jane Smith',
    title: 'Designer',
    message: 'Love this taxi company and I use their services as often as it’s possible. Thank you guys for always being so quick and helpful… Samanta Herman Los Angeles, CA The drivers are always super sweet and smiling. Plus I get bonuses each time I use this company’s services which is so cool…'

  },
  {
    name: 'Mike Johnson',
    title: 'Developer',
    message: 'Love this taxi company and I use their services as often as it’s possible. Thank you guys for always being so quick and helpful… Samanta Herman Los Angeles, CA The drivers are always super sweet and smiling. Plus I get bonuses each time I use this company’s services which is so cool…'

  },
  {
    name: 'Emily Brown',
    title: 'Marketing',
    message: 'Love this taxi company and I use their services as often as it’s possible. Thank you guys for always being so quick and helpful… Samanta Herman Los Angeles, CA The drivers are always super sweet and smiling. Plus I get bonuses each time I use this company’s services which is so cool…'
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="containerOfSlider text-left max-w-md mx-auto text-left">

  {/* Testimonial Slider */}
  <Slider {...settings}>
    {testimonialData.map((testimonial, index) => (
      <div key={index} className="rounded-lg shadow-lg p-4">
        <p className="text-xl text-white font-semibold">{testimonial.message}</p>
        <p className="text-white mt-2">{testimonial.name}</p>
        <p className="text-gray-500">{testimonial.title}</p>
      </div>
    ))}
  </Slider>

  {/* Images */}
  <div className="flex flex-wrap justify-center sm:justify-start mt-4">
    <img
      src="https://hobarttaxicabs.com.au/wp-content/uploads/2017/03/testi-3-90x90.jpg"
      alt=""
      className="rounded-full mr-2 mb-2"
      width="90"
      height="90"
    />
    <img
      src="https://hobarttaxicabs.com.au/wp-content/uploads/2017/03/testi-2-90x90.jpg"
      alt=""
      className="rounded-full mr-2 mb-2"
      width="90"
      height="90"
    />
    <img
      src="https://hobarttaxicabs.com.au/wp-content/uploads/2017/03/testi-1-90x90.jpg"
      alt=""
      className="rounded-full mb-2"
      width="90"
      height="90"
    />
  </div>
</div>

  );
};



export default TestimonialSlider;
