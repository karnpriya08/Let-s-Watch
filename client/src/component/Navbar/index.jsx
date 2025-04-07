import React from 'react';
import image from "../../assets/logo.png";
import { Link } from 'react-router-dom';


const index = () => {
  return (
    <>
      <div className='bgc p-1'>
        <nav>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {/* logo */}
          <Link to="/"> <div className='m-1 p-1'>
            <img src={image} alt="logo" width={120} height={20} />
          </div> </Link>

          {/* navigation link */}
          <div className='flex flex-col md:flex-row gap-4 p-3 justify-end font-medium text-2xl '>
            <Link to="/"><div className='m-1 hover:scale-110'>Home</div></Link>
            <Link to="/booking"><div className='m-1 hover:scale-110'>Booking</div></Link>
          
          </div>
        </div>
        </nav>
       
      </div>
    </>
  )
}

export default index
