const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        image : {
            type : String,
            require: true,
            default : "/image/default.png"
        },
        name: {
            type: String,
            require: true,
        },
        rating : {
            type: Number,
            require :true,
            default : 4
        }
    }
)

module.exports = mongoose.model("Movie",movieSchema);