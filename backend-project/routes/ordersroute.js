import express from "express";
import { createOrder, deleteOrder, getAllOrders, getSingleOrder, updateOrder } from "../controllers/orderscontrollers.js";
import verifyToken from "../middleware/authVerifyToken.js";
import { isAdmin } from "../middleware/isAdminMiddleware.js";

const ordersRoute = express.Router()

ordersRoute.get("/", verifyToken, isAdmin, getAllOrders)

ordersRoute.get("/:id", verifyToken, getSingleOrder)

ordersRoute.post("/", verifyToken, createOrder)

ordersRoute.patch("/:id", verifyToken, updateOrder)

ordersRoute.delete("/:id", verifyToken, deleteOrder)

export default ordersRoute;