import React from 'react'
import img from '../Mobile.png'
import taxfrom  from  '../tax.png'
import seconimage from '../search.png'
import thirdImage from '../timer.png'
const Mobile = () => {
  return (
    <div style={{"border": "1px solid black"}} className="flex flex-col h-1/3 md:flex-row justify-center w-full">
    <div className="md:w-1/2 flex justify-center items-center">
      <img
        src={img}
        alt="Taxi Image"
        className="max-w-full h-4/6 md:h-120"
      />
    </div>
  
    <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-8 text-center md:text-left items-center	">
      <h3 style={{"color": "#FDCE18"}} className="font-bold m-2">WHY CHOOSE US</h3>
      <h1 className="text-4xl md:text-6xl font-extrabold my-4 max-w-lg">
        Get a Mobile <br /> Booking
      </h1>
      <div className='m-2 font-bold flex items-center'>
        <img src={seconimage} alt="" />
        Easy Searching
      </div>
      <div className='m-2 font-bold flex items-center'>
        <img src={thirdImage} alt="" />
        Quick Pickups
      </div>
      <div className='m-2 font-bold flex items-center'>
        <img src={taxfrom} alt="" />
        Inclusive Rates
      </div>
    </div>
  </div>

  )
}

export default Mobile