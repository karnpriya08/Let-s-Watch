import React,{useState,useEffect} from 'react'
import LastBooking from '../component/LastBooking'
import Axios from 'axios';

const Booking = () => {
  const [lastbooking, setLastbooking] = useState(localStorage.getItem("bookings") || []);

  // fetch lastbooking details 
    const getLastBooking = async () => {
        try {
            const response = await Axios.get("http://localhost:8080/api/bookings");
            if (response.data && response.data.lastBooking) {
                setLastbooking(response.data.lastBooking);
            }
            else {
                setLastbooking(null); // No data found
            }
        } catch (error) {
            console.log("Error fetching last booking: ", error);
            setLastbooking(null); // Handle error case
        }    }


    useEffect(() => {
        getLastBooking();
        // console.log(lastbooking);
    }, [])

  return (
    <div>
      <LastBooking lastbooking= {lastbooking} />
    </div>
  )
}

export default Booking;
