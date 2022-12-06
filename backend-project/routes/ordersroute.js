import express from "express";
import { createOrder, getAllOrders, getSingleOrder } from "../controllers/orderscontrollers";

const ordersRoute = express.Router()

ordersRoute.get("/", verifyToken, isAdmin, getAllOrders)

ordersRoute.get("/:id", verifyToken, getSingleOrder)

ordersRoute.post("/", verifyToken, createOrder)

ordersRoute.patch("/:id", verifyToken, updateOrder)

ordersRoute.delete("/:id", verifyToken, deleteOrder)

export default ordersRoute;