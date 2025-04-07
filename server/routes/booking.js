const express = require("express");
const router = express.Router();
const { bookTheShow, lastBooking,getMovies } = require("../controller/booking");

router.get("/movies",getMovies);

// route for getting data
router.get("/bookings", lastBooking);

// route for osting data 
router.post("/bookings", bookTheShow)



module.exports = router;