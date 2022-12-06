import express from "express";
import { createProduct, deleteRecord, getAllProducts, getSingleProduct, updateProduct } from "../controllers/productscontroller";


const productsRoute = express.Router()
// /products?category = water
productsRoute.get("/", getAllProducts)

productsRoute.get("/:id", getSingleProduct)

productsRoute.post("/", createProduct)

productsRoute.patch("/:id", updateProduct)

productsRoute.delete("/:id", deleteRecord)

export default productsRoute;


