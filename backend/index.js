const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require('./routes/auth');

const app = express();
dotenv.config();

mongoose.connect(process.env.FRESH_FOOD,() => {
    console.log("CONNECTED TO MONGGO DB SUCCESSFULLY");
});
app.use(cors()); // ngăn chặn cors origin
app.use(cookieParser()); // tạo và gắn cookie
app.use(express.json()); // dữ liệu trả về có dạng json

//route
app.use("/fresh-food/auth",authRoute);

app.listen(8000, () => {
    console.log("SERVER IS RUNNING");
});

