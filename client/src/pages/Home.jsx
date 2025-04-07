import React from 'react';
import { Link } from "react-router-dom";
import BookingForm from '../component/BookingForm';


const Home = () => {

  return (
    <>
      <div>
        {/* section 1 highlight */}
        <div className='flex flex-col m-auto text-center p-4 my-3 font-serif transform-3d transition-discrete'>
          <h1 className='font-bold text-4xl m-5'>Book movie ticket with
            <p> Let's watch.</p>
            <p className='font-sans text-lg'> Your Last Booking Details </p>
          </h1>
          <button className='bgc border  border-black rounded-s m-auto p-2 px-7 hover:bg-gray-500'><Link to="/booking">Bookings</Link></button>
        </div>


        <div className=''>
          <BookingForm />
        </div>

      </div>
    </>
  )
}

export default Home
