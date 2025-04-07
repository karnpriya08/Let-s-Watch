import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import Booking from "../../pages/Booking";
import Footer from "../Footer";


const index = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking/>} />
                </Routes>
               <Footer/>
            </BrowserRouter>
        </>
    )
}

export default index
