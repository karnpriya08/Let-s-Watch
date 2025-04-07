const mongoose =require ("mongoose");

const bookingSchema = new mongoose.Schema (
    {
        id:{
            type: Number,
            require : true
        },
        
        movie: {
            type : String,
            require: true
        },
        slot :{
            type: String,
            require: true
        },
        seats : { 
            type :Object,
        
    A1:{
        type : Number,
    },
    A2:{
        type : Number,
    },
    A3:{
        type : Number,
    },
    A4:{
        type : Number,
    },
    B1:{
        type : Number,
    },
    B2:{
        type : Number,
    },
    D1:{
        type : Number,
    },
    D2:{
        type : Number,
    }
        }
    }
);

const Booking = mongoose.model("Booking",bookingSchema);

module.exports = Booking;