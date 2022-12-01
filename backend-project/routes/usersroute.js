import express from "express";

const usersRoute = express.Router()


//---Get all Users----------------------------
usersRoute.get("/", verifyToken, isAdmin, getAllUsers)

//--- login ----------------------------
usersRoute.post("/login", loginUsers);

//--- verify token ----------------------------
usersRoute.get("/checkuserstoken", checkUsersToken);

//--- get single users ----------------------------
usersRoute.get("/:id", verifyToken, isAdmin, getSingleUsers);

//--- create users ----------------------------
usersRoute.post("/", usersValidation, createUsers)

//--- user update own dates ----------------------------
usersRoute.patch("/:id", verifyToken, isAdmin, updateUsers)

//--- delete user----------------------------
usersRoute.delete("/:id", verifyToken, isAdmin, deleteUsers)


export default usersRoute;
