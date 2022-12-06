import express from "express";

import morgan from "morgan";

import mongoose from "mongoose";
import products from "./data/products.js"
import productsRoute from "./routes/productsroute.js";


//---Initializing the server------------------------------
import dotenv from "dotenv";
dotenv.config();


//---Initializing the server------------------------------
const app = express();
const PORT = process.env.PORT || 10787;
//-------------------------------------------


//---Connecting with server------------------------------

mongoose.connect(process.env.MONG0_URI, () => {
    console.log("DB connection established!!")
}) 


//---Middleware------------------------------
app.use( morgan("dev") );

app.use(express.json());




//---Endpoints------------------------------



/* app.use("/users", upload.single("image"), usersRoute); */

/* app.use("/products", upload.single("image"), productsRoute); */

/* app.use("/orders", ordersRoute); */
//-------------------------------------------



//---listening request on the port 12345----------------------
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`)
})