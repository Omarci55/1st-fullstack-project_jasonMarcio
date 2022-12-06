import UsersCollection from "../models/usersschema.js"
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

export const getAllUsers = async (req, res, next) => {

    try {

        const users = await UsersCollection.find()
        res.json(users)

    }

    catch (err) {
        err.status = err;
        next(err)
    }
}

export const getSingleUser = async (req, res, next) => {

    try {
        const id = req.params.id
        //where favorites comes from???
        const q = req.query.favorites

        const singleUser = await UsersCollection.findById(id)

        res.json({success:false, client: singleUser})
    }

    catch(err) {
        const error = new Error("ID doesn't exist!")
        error.status = 404;
        next(error)
    }
}

export const createUser = async (req, res, next) => {
    console.log(req.file)

    try {

        const user = new UsersCollection(req.body)
        
        if(req.file) {

            user.profileImage = `http://localhost:10787/${req.file.filename}`

        }

        await user.save()

        console.log(user.fullName)

        res.json({success: true, user})
    }
    catch(err) {

        next(err)
    }
}

export const updateUser = async (req, res, next) => {
   
    try{
        const id = req.params.id;
        const updatedUser = await UsersCollection.findByIdAndUpdate(id, req.body, {new:true})
        res.json({success: true, user:updatedUser})

    }
    catch {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    
    try{
        const {id} = req.params

        const existUser = await UsersCollection.findById(id)

        if(existUser) {
            const deleteStatus = await UsersCollection.deleteOne({_id: existUser._id})
            //res.json({success: true, status: deleteStatus})
            res.json({success: true, status: deleteUser})
        } else {
            throw new Error("User id doens't exist!")
        }
    }
    catch(err){
        next(err)

    }
}

export const loginUsers = async(req, res, next) => {
    try{
        
        const user = await UsersCollection.findOne({email:req.body.email})     
        
        if(user) {
           
            const check = await bcrypt.compare(req.body.password, user.password)
            
            if(check) {

                let token = jwt.sign( 
                    {
                        _id:user._id, 
                        fName: user.fName
                    }, 
                    process.env.TOKEN_SECRET_KEY,
                    {
                        expiresIn: "7d",
                        issuer: "Me",
                        audience: "clients"
                    }
                )

                const updatedUser = await UsersCollection.findByIdAndUpdate(user._id, {token: token}, {new:true})

                res.cookie("token", token)
                res.json({success: true, data: user})

            } else {
                throw new Error("Password doesn't match")
            }
        } else {
            throw new Error("email doesn't exist")
        }
    }
    catch(err){
        next(err)
    }
}