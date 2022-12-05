import express from "express";
import { getAllProducts } from "../controllers/productscontrollers.js";

const productsRoute = express.Router()

productsRoute.get("/", getAllProducts)


export default productsRoute;
