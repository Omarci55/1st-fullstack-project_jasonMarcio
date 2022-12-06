import { cookie }from "express-validator"
import jwt from "jsonwebtoken"
import UsersCollection from "../models/usersschema"

async function verifyToken(req, res, next) {
    try {
        
        const { token } = req.headers
        console.log(token)

        // console.log(req.cookies.token)
        // const token = req.cookies.token
    
        const payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
        console.log(payload)

        const user = await UsersCollection.findById(payload._id)

        req.user = user;

        next()
        
    }
    catch(err) {
        console.log(err.message)
        next(err)
    }

}

export default verifyToken;