import React, { useState } from 'react';

const BookingForm = () => {
    const [pickupOption, setPickupOption] = useState('anywhere');
    const [returnTrip, setReturnTrip] = useState('no');
  
    const handlePickupOptionChange = (event) => {
      setPickupOption(event.target.value);
    };
  
    const handleReturnTripChange = (event) => {
      setReturnTrip(event.target.value);
    };
  
  return (
    <div style={{ width: '70%',   }} className="p-4 mt-20 m-auto bg-black">
      {/* Heading */}
      <div className='text-left'>
        <h1 className="text-2xl font-bold text-white">Book Online</h1>
        {/* Paragraph */}
        <p className="mb-4 font-extrabold text-white	">HOBART TAXI CABS NO.1 TAXI SERVICES IN HOBART</p>
      </div>

      {/* Radio buttons */}
      <div className='flex justify-center flex-wrap'>
        <div className="mb-4 mr-4">
          <input
            type="radio"
            id="pickupAnywhere"
            name="pickup"
            value="anywhere"
            checked={pickupOption === 'anywhere'}
            onChange={handlePickupOptionChange}
            className="mr-2 rounded	"
          />
          <label   className='text-white font-bold	' htmlFor="pickupAnywhere">Pickup From Anywhere</label>
        </div>
        <div className="mb-4">
          <input
            type="radio"
            id="pickupAirport"
            name="pickup"
            value="airport"
            checked={pickupOption === 'airport'}
            onChange={handlePickupOptionChange}
            className="mr-2"
          />
          <label  className='text-white font-bold	' htmlFor="pickupAirport">Pickup From Airport</label>
        </div>
      </div>

      {/* Divs based on pickup option */}
      {pickupOption === 'anywhere' && (
        <div>
          {/* Div to show when pickup option is 'anywhere' */}
          <div className='flex justify-between items-center flex-wrap'>
            <input type="text"   placeholder="Name" className=" w-80 rounded-lg	 	 mb-2 p-2 block" />
            <input type="text" placeholder="Phone" className=" w-80 rounded-lg		  mb-2 p-2 block" />
            <input type="text" placeholder="Email" className="w-80 rounded-lg		 mb-2 p-2 block" />
          </div>


          <div  className='flex justify-between	mt-4 flex-wrap' >
          <input type="text" placeholder="Pickup Address (Street No., Street Name)" className="rounded-lg	 mb-2 p-2 block  w-80 " />
            <input type="text" placeholder="Drop Off Address (Street No., Street Name)" className="rounded-lg	 mb-2 p-2 block w-80" />
          </div>
          <div class="flex justify-between mt-4 flex-wrap" >
  <input type="text" placeholder="No Of Passengers" class="mb-2 input-field mb-2 p-2 w-48 rounded-lg	" />
  <select class="mb-2  rounded-lg	p-4 select-field w-48" id="wpforms-1686-field_76" name="wpforms[fields][76]" required>
    <option value="" disabled selected>Vehicle type</option>
    <option value="Any Type">Any Type</option>
    <option value="Sedan">Sedan</option>
    <option value="Luxury">Luxury</option>
    <option value="Van (1-10 Seater)">Van (1-10 Seater)</option>
  </select>
  <select class="mb-2 p-4 select-field w-48 rounded-lg	" id="wpforms-1686-field_77" name="wpforms[fields][77]" required>
    <option value="" disabled selected>Time Required</option>
    <option value="Ready Now">Ready Now</option>
    <option value="Later">Later</option>
  </select>
</div>





<div        className='text-left' >

<div         className='my-4   text-white font-bold' >Return Trip *</div>

<div className="flex flex-wrap">
          <label    htmlFor="returnYes" className="mr-4 text-white font-bold">
            <input
              type="radio"
              id="returnYes"
              name="returnTrip"
              value="yes"
              checked={returnTrip === 'yes'}
              onChange={handleReturnTripChange}
              className="mr-2"
            />
            Yes
          </label>
          <label  className='text-white font-bold'  htmlFor="returnNo">
            <input
              type="radio"
              id="returnNo"
              name="returnTrip"
              value="no"
              checked={returnTrip === 'no'}
              onChange={handleReturnTripChange}
              className="mr-2  "
            />
            No
          </label>
        </div>

        {/* Conditionally render content based on Return Trip option */}
        {returnTrip === 'yes' ? (
          <div>
            {/* Content to show when Return Trip is 'yes' */}

            <div className='flex flex-wrap  mt-4   justify-between	 w-full	'>
            <input type="number"   placeholder="Return nu of passengers" className=" w-5/12			 mb-2 p-2 block" />
            <select  className=' w-5/12' id="wpforms-1686-field_76" class="wpforms-field-medium wpforms-field-required wpforms-valid" name="wpforms[fields][76]" required="required" aria-invalid="false"><option value="" class="placeholder" disabled="" selected="selected">vehicle type</option><option value="Any Type">Any Type</option><option value="Sedan">Sedan</option><option value="Luxury">Luxury</option><option value="Van (1-10 Seater)">Van (1-10 Seater)</option></select>
            </div>
            <div className='flex flex-wrap  mt-4   justify-between	 w-full	'>
            <input type="date"   placeholder="Return Date " className=" w-5/12			 mb-2 p-2 block" />
            <input type="text" placeholder="Time " className=" w-5/12			  mb-2 p-2 block" />
            </div>
            <div className='flex flex-wrap mt-4   justify-between	 	'>
                <div  className='flex flex-col 	' >
<span>Return Pickup Address</span>
            <input type="text"   placeholder="Return Pickup Address"   className="  mb-2 p-2 block"  />
                </div>

                <div  className='flex flex-col ' >
<span>Return Drop Off Address</span>
            <input type="text"   placeholder="Return Drop Off Address"   className="  mb-2 p-2 block"  />
                </div>
            </div>
            <textarea   placeholder='Special Instruction'   style={{"border" : "1px solid gray "}}   className='w-full	 h-14	p-10	'   ></textarea>    <br />

            <button   className='p-2 rounded	 text-white  font-bold'
style={{backgroundColor : "#1874BB" , border : "1px solid black"}}
>Book Now </button>


          </div>
        ) : (
          <div>
            {/* Content to show when Return Trip is 'no' */}


<textarea   style={{"border" : "1px solid gray "}}   className='w-full	 h-14	p-10	'   ></textarea>    <br />

<button   className='p-2 rounded	 text-white  font-bold'
style={{backgroundColor : "#1874BB" , border : "1px solid black"}}
>Book Now </button>
          </div>
        )}    
</div>









        </div>
      )}



{/* PickUp Option  */}
      {pickupOption === 'airport' && (
        <div>
          {/* Div to show when pickup option is 'airport' */}
          <div className='flex justify-between flex-wrap'>
            <input type="text"   placeholder="Name" className=" w-80	 mb-2 p-2 block" />
            <input type="text" placeholder="Phone" className=" w-80	  mb-2 p-2 block" />
            <input type="text" placeholder="Email" className="w-80	 mb-2 p-2 block" />
          </div>


          <div  className='flex flex-wrap justify-between	mt-4' >
          <input type="text" placeholder="Pickup Address (Street No., Street Name, Suburb)" className="mb-2 p-2 block  w-96 " />
            <input type="text" placeholder="Drop Off Address (Street No., Street Name, Suburb)" className="mb-2 p-2 block w-96" />
          </div>

          <div  className='flex flex-wrap justify-between mt-4' >
          <input type="text" placeholder="No Of Passengers" className="mb-2 p-2 w-80 block" />
          {/* <label for="cars">Choose a car:</label> */}
          <select  className='w-80 mb-2' id="wpforms-1686-field_76" class="wpforms-field-medium wpforms-field-required wpforms-valid" name="wpforms[fields][76]" required="required" aria-invalid="false"><option value="" class="placeholder" disabled="" selected="selected">vehicle type</option><option value="Any Type">Any Type</option><option value="Sedan">Sedan</option><option value="Luxury">Luxury</option><option value="Van (1-10 Seater)">Van (1-10 Seater)</option></select>
          <input type="text" placeholder="Flight Number " className="mb-2 p-2 block w-96" />

          </div>

          <div className='flex  mt-4   justify-between	 w-full	'>
            <input type="date"   placeholder="Return Date " className=" w-5/12			 mb-2 p-2 block" />
            <input type="text" placeholder="Time " className=" w-5/12			  mb-2 p-2 block" />
            </div>
<div    className='text-left' >
    
<textarea   placeholder='Special Instruction'   style={{"border" : "1px solid gray "}}   className='w-full	 h-14	p-10	'   ></textarea>    <br />

<button   className='p-2 rounded	 text-white  font-bold'
style={{backgroundColor : "#1874BB" , border : "1px solid black"}}
>Book Now </button>
</div>
    
        </div>
        
      )}
    </div>
  );
};

export default BookingForm;
