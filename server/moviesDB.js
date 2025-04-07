require("dotenv").config();
const connectDB = require("./db/connect");
const movieJson = require("./movies.json");
const movies = require("./Model/movies");

const connect = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await movies.create(movieJson);
        await movies.deleteMany();
        console.log("success");
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "data not found" })
    }

}

connect();