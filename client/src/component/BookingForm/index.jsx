import React, { useState, useEffect } from 'react';
import { seat1, slots } from './data';
import Axios from 'axios';
import LastBooking from '../LastBooking';


const index = () => {
    
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState(localStorage.getItem("movie") || " ")
    const [slot, setSlot] = useState(localStorage.getItem("slot") || "");
    const [seats, setSeats] = useState(JSON.parse(localStorage.getItem("seats")) || {});
    const [quantity, setQuantity] = useState(0);
    const [visibleSeat, setVisibleSeat] = useState(false);
    const [lastbooking, setLastbooking] = useState(null)
    
// getting all movies to display 
    const getMovies = async () => {
        try {
            const res = await Axios.get("https://let-s-watch-backend.onrender.com/api/movies");
            if (res.data) {
                setMovies(res.data.moviesData)
            }
        }
        catch (error) {
            console.log(error)
        }

    }

    // function to get lastbooking
    const getLastBooking = async () => {
        try {
            const response = await Axios.get("https://let-s-watch-backend.onrender.com/api/bookings");
            if (response.data.lastBooking) {
                setLastbooking(response.data.lastBooking);
                localStorage.setItem('bookings', JSON.stringify(response.data.lastBooking));
            } 
            else {
                setLastbooking(null); // No data found
            }
        } catch (error) {
            console.log("Error fetching last booking: ", error);
            setLastbooking(null); // Handle error case
        }    }


    // handle form submission 
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(movie=== " "){
            alert ("select any movie")
            return;
        }
       if(!slot){
        alert("select slot")
        return;
       }
       if(Object.keys(seats).length === 0 ){
        alert("select seat")
        return;
       }
        const data = {
            movie,
            slot,
            seats
        }
        
        
// post method to submit details
        try {
            const res = (await Axios.post("https://let-s-watch-backend.onrender.com/api/bookings", data));
                    
                    alert("Booking successful!");
            
        
            
            //  clearing data   
               setMovie("");
                setSlot("");
                setSeats({ });
                setLastbooking(null)

        }
        catch (error) {
            console.log(error);
        }

        getLastBooking();

    }
    // store movie slot seats in local storage
    useEffect(() => {
        getMovies();
        localStorage.setItem("movie", movie);
        localStorage.setItem("slot", slot);
        localStorage.setItem("seats", JSON.stringify(seats));
        localStorage.setItem("bookings",JSON.stringify(lastbooking) )
        
    },[movie,slot,seats]);
   
    //  selecting seat on click
    const handleSeatClick = (seat) => {
        setVisibleSeat(seat);
    };

// Handle quantity change for a specific seat
const handleQuantityChange = (e, seat) => {
    const newQuantity = e.target.value;
    // set quantity for particular seats 
    setQuantity(newQuantity);
    setSeats((prevSeats) => ({
        ...prevSeats,
        [seat]: newQuantity, // Update the quantity for that specific seat
    }));
};

    return (
        <>
            <div className='container  m-auto '>

                <div className='grid grid-cols-1  p-1'>
                    {/* movie */}
                    <div className='border-2 rounded-2xl border-amber-500 m-3 p-4  text-black font-semibold'>
                        <p className='text-2xl font-bold'>Select Movie</p>
                        <div className='grid gap-2 md:grid-cols-5'>

                            {movies.map((item) => (
                                <div key={item._id} className='border-2 rounded-xl m-7 p-5 hover:scale-105 cursor-pointer bgc'
                                // on clicking seting particular movie    
                                onClick={() => {
                                        const mov = item.name;
                                        setMovie(mov);

                                    }}
                                >
                                    <div>
                                        <img
                                        src={JSON.stringify(item.image)}
                                        alt="img" /></div>
                                    <h1>
                                        {item.name}
                                    </h1>
                                    <h1 >
                                        {item.rating}
                                    </h1>
                                </div>
                            )
                            )}

                        </div>
                    </div>

                    {/* slot */}
                    <div className='border-2 rounded-2xl border-amber-500 m-3 p-4  text-black font-semibold'>
                        <p className='text-2xl font-bold'>Select slot</p>
                        <div className='grid m-3 p-4 gap-2 md:grid-cols-5'>
                            {slots.map(slot => (
                                <div key={slot} className='border-2 rounded-xl m-7 p-6 hover:scale-105 cursor-pointer bgc'>
                                   {/* setting clicked slot */}
                                    <p onClick={() => {
                                        setSlot(slot);
                                        console.log(slot);
                                    }}>{slot}</p>
                                </div>
                            )
                            )}
                        </div>
                    </div>


                    {/* seat */}
                    <div className='border-2 rounded-2xl border-amber-500 m-3 p-4  text-black font-semibold'>
                        <p className='text-2xl font-bold'>Select seat</p>
                        <div className='grid m-3 p-4 gap-2 md:grid-cols-5'>

                            {seat1.map(seat => (
                                <div key={seat} className='border-2 rounded-xl p-3 m-2 hover:scale-105 bgc flex justify-evenly gap-7'
                              
                                onClick={() => handleSeatClick(seat)}
                                >
                                    <div>
                                        {seat}
                                        {/* if seat is selected then make visible quantities  */}
                                        {visibleSeat ===seat &&
                                            <>
                                                 <div>
                                                    <p>Qty:</p>
                                                    <input
                                                        type="number"
                                                        id={`seats-${seat}`}
                                                        placeholder="Qty"
                                                        value={seats[seat] || quantity}
                                                        onChange={(e) => handleQuantityChange(e, seat)}
                                                        className="bg-white text-black px-2 w-1/2"
                                                    />
                                                </div>
                                            </>
                                        }

                                    </div>

                                </div>

                            )
                            )}
                        </div>
                    </div>

                </div>
              {/* button to submit form /booking selection */}
                <button className='bgc  border border-black rounded-s p-4 px-28 text-2xl my-5 relative left-96'
                    onClick={handleSubmit} >
                    Book Show
                </button>



            </div>
             <div className='w-full'>
        {/* <LastBooking/> */}
        <LastBooking  lastbooking= {lastbooking} />   
         </div> 
        </>
    )
}

export default index
