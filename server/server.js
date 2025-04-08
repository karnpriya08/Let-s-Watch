const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
const router = require("./routes/booking");
const connectDB = require("./db/connect");
const path = require('path');




const port = process.env.PORT || 4000;

// middlewares
app.use(cors(
));
app.use(express.json());

app.use("/api", router);
// app.use('/images', express.static(path.join(__dirname, 'images')));


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {

            console.log("listening on port 8080");

        })
    }
    catch (error) {
        console.log(error);
    }
}


start();

module.exports = app;
