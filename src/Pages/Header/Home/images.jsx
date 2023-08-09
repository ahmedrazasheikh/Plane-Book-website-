import React from 'react'

const Images = () => {
  return (
    <div
    className='my-2'
    style={{
      backgroundImage: `url(${require('../taxi.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: 'auto', 
      "@media (max-width: 768px)": {
        backgroundPosition: 'top', /* Adjust background position for better visibility on small screens */
      }
    }}
  >
  
    <div className='m-auto w-8/12'>
      <img src="https://hobarttaxicabs.com.au/wp-content/uploads/2023/07/taxi-7.jpg" alt="" style={{ width: '100%', height: 'auto' }} />
    </div>
  </div>
  
  )
}

export default Images