import express from "express";
import { createUser, deleteUser, getAllUsers, getSingleUser, loginUsers, updateUser } from "../controllers/userscontrollers";
import verifyToken from "../middleware/authVerifyToken";

const usersRoute = express.Router()

//---Get all Users----------------------------
usersRoute.get("/", verifyToken, isAdmin, getAllUsers)

//--- login ----------------------------
usersRoute.post("/login", loginUsers);

//--- verify token ----------------------------
usersRoute.get("/checkuserstoken", checkUsersToken);

//--- get single users ----------------------------
usersRoute.get("/:id", verifyToken, isAdmin, getSingleUser);

//--- create users ----------------------------
usersRoute.post("/", usersValidation, createUser)

//--- user update own dates ----------------------------
usersRoute.patch("/:id", verifyToken, isAdmin, updateUser)

//--- delete user----------------------------
usersRoute.delete("/:id", verifyToken, isAdmin, deleteUser)


export default usersRoute;
