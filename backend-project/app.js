import express from "express";
import morgan from "morgan"; 
import mongoose from "mongoose";
import products from "./data/products.js"

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

app.get("/", (req, res) => {
    res.send("API running")
})

app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/products/:id", (req, res) => {
    const product = products.find( item => item._id === req.params.id)
    res.json(product)

})

/* app.use("/users", upload.single("image"), usersRoute); */

/* app.use("/products", upload.single("image"), productsRoute); */

/* app.use("/orders", ordersRoute); */
//-------------------------------------------



//---listening request on the port 12345----------------------
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`)
})