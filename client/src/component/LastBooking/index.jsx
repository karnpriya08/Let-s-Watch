import React from 'react'

const index = ({ lastbooking }) => {

    if (!lastbooking) {
        // if no data on last booking 
        
        return (
            <div className="p-4 border rounded-lg m-4 text-xl">
                <h2 className="text-3xl font-bold mb-2 text-orange-600">Last Booking Details</h2>
                <p>No previous booking found.</p>
                
            </div>
        );
    }

    return (
        <div className='p-8 text-xl border rounded-lg w-full'>
            <h1 className='text-3xl  text-orange-600 font-bold p-4 m-2 mb-4'>Last Booking Details</h1>

{/* if there is data on last booking */}
            <div className='flex flex-col justify-evenly gap-4 p-4 m-2 '>
                <h2>Movie : {lastbooking.movie}</h2>
                <h2>Slot : {lastbooking.slot}</h2>
                <h2>Seats :
                    <ul>
                        {lastbooking.seats && Object.entries(lastbooking.seats).length > 0 ? (
                            Object.entries(lastbooking.seats).map(([seat, quantity]) => (
                                <li key={seat}>{seat}: {quantity}</li>
                            ))
                        ) : (
                            <p>No seats selected.</p>
                        )}
                    </ul>
                </h2>

            </div>

        </div>
    )
}

export default index;
