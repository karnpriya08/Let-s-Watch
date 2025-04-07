import React from 'react'
import image from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";


const index = () => {
  return (
    <>
      <div className='bgc p-2'>
        <div className='grid grid-rows-1 md:grid-rows-3 p-2 m-3'>
          {/* logo */}
          <div className='m-auto mb-6'>
            <img src={image} alt="logo" width={120} height={115} />
          </div>
          {/* section-2 divs */}
          <div className='grid grid-cols-1 md:grid-cols-4 m-auto md:m-2 '>
            {/* section 2.1 address*/}
            <div className='flex flex-col md:flex-row '>
              <div className='m-6'><HiLocationMarker /></div>
              <div className='flex flex-col'>
                <div>Our Address</div>
                <div>3 Anywhere street,
                  <p>somewhere 45777809</p>
                </div>
              </div>
            </div>
            {/* section-2.2  call*/}
            <div className='flex flex-col md:flex-row'>
              <div className='m-6'><IoCallSharp /></div>
              <div className='flex flex-col'>
                <div>Call Us</div>
                <div>0987654321
                </div>
              </div>
            </div>
            {/* section-2.3 email*/}
            <div className='flex flex-col md:flex-row'>
              <div className='m-6'><IoMdMail /></div>
              <div className='flex flex-col'>
                <div>E-mail Us</div>
                <div>example@gmail.com
                </div>
              </div>
            </div>
            {/* section-2.4  social media*/}
            <div className='flex flex-col md:flex-row m-2 justify-evenly'>
              
           <div className='flex flex-col md:flex-row'> 
           <FaFacebook />
            <a href="https://www.facebook.com" target="_blank"></a>
           </div>
           <div className='flex flex-col md:flex-row'> 
           <RiInstagramFill />
            <a href="https://www.instgram.com" target="_blank"></a>
           </div>
           <div className='flex flex-col md:flex-row'> 
           <BsTwitterX />
            <a href="https://x.com/?lang=en" target="_blank"></a>
           </div>
            </div>
          </div>
          {/* section 3 copyright */}
          <div className='text-center'> © 2022 • Privacy Policy . All copyright reserved to Let's Watch</div>
        </div>



      </div>

    </>
  )
}

export default index
