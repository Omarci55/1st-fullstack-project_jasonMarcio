import express from "express";
import { getAllProducts } from "../controllers/productscontroller";
import { }

const productsRoute = express.Router()
// /products?category = water
productsRoute.get("/", getAllProducts())

export default productsRoute;
