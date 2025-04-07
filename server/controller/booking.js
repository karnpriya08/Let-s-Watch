const movies = require("../Model/movies");
const Booking = require("../Model/bookingModel");


const bookTheShow = async (req, res) => {
    try {
        const { movie, seats, slot } = req.body;
        console.log(req.body);
        const newBoooking = new Booking({ movie,  slot ,seats});
        await newBoooking.save();
        console.log("booking saved");
        res.status(201).json({ newBoooking });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })
    }
}

const lastBooking = async (req, res) => {

    try {
        const lastBooking = await Booking.findOne({}).sort({ _id: -1 });
        if (!lastBooking) {
            res.status(201).json({ message: "No previous booking found" });
        } else {
            
            res.status(201).json({lastBooking});
        }
        
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message });
    }
}


const getMovies = async (req, res) => {
    const moviesData = await movies.find({});
    res.status(201).json({ moviesData });
    console.log(moviesData);
}

module.exports = {
    bookTheShow,
    lastBooking,
    getMovies
}
