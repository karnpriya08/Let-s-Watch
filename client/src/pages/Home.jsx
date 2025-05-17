import React, { useState } from 'react';
import { Link } from "react-router-dom";
import BookingForm from '../component/BookingForm';


const Home = () => {

  const [bookingSelected, setBookingSelected] = useState(false); // 🔹 Track selection state

  const handleBookingSelection = (isSelected) => {
    setBookingSelected(isSelected);
  }
  return (
    <>
      <div>
        {/* section 1 highlight */}
        <div className='flex flex-col justify-center m-auto text-center items-center  sm:p-8 md:p-12 p-4 my-3 font-serif transform-3d transition-discrete items-center'>
          <h1 className='font-bold text-3xl sm:text-4xl mb-4'>Book movie ticket with
            <p className="text-primary"> Let's watch.</p>
            <p className='font-sans text-base sm:text-lg mb-6'> Your Last Booking Details </p>
          </h1>
          <button className={`transition-colors duration-300 border border-black rounded px-6 py-2
             ${ bookingSelected ? 'bg-orange-700 text-white' : 'bgc hover:bg-gray-500'}`}> 
            <Link to="/booking">Bookings</Link></button>
       
        </div>


        <div className='w-full'>
          <BookingForm onSelectionChange={handleBookingSelection} />
        </div>

      </div>
    </>
  )
}

export default Home
