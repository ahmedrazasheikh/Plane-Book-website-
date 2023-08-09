import React from 'react'
import TestimonialSlider from './TestimonalSlider'



const ImagesSlider = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${require('../Image.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // boxShadow: '0 0 30px 10px rgba(0, 0, 0, 0.5)',
      width: '100%',
      height: '100vh', /* Changed from 93vh to 100vh for better viewport coverage */
    }}
  >
    <div className="min-h-screen flex items-center justify-center bg-red">
      <TestimonialSlider />
    </div>
  </div>
  
  )
}

export default ImagesSlider