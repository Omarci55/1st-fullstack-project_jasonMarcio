import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/productscontroller.js";


const productsRoute = express.Router()
// /products?category = water
productsRoute.get("/", getAllProducts)

productsRoute.get("/:id", getSingleProduct)

productsRoute.post("/", createProduct)

productsRoute.patch("/:id", updateProduct)

productsRoute.delete("/:id", deleteProduct)

export default productsRoute;