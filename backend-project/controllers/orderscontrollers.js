import UsersCollection from "../models/usersschema.js"
import OrdersCollection from "../models/ordersschema.js"

export const getAllOrders = async (req, res, next) => {

    try {

        const allOrders = await OrdersCollection.find().populate(
            "products clientId", "-email -password"
        )

        res.json(allOrders)
    }
    catch(err) {
        next(err)
    }

}

export const getSingleOrder = async (req, res, next) => {

    try{

        const id = req.params.id
        const singleOrder = await OrdersCollection.findById(id).populate("products clientId", "-orderItems")
        res.json(singleOrder)

    }
    catch(err) {
        next(err)
    }

}

export const createOrder = async (req, res, next) => {

    try {

        const createOrder = new OrdersCollection(req.body)
        await createOrder.save()

        const updatedUser = await UsersCollection.findByIdAndUpdate(createOrder.userId, {$push:{orders:createOrder._id}}).populate({path:"orders", populate:{path:"products", model:"product"}})
        // const user = await UsersCollection.findById(createOrder.userId)
        // .populate({path:"orders", populate:{path:"products", model:"product"}})
        // user.orders.push(createOrder._id)
        // await user.save()

        res.json({success: true, data:updatedUser})

    }

    catch(err) {
        next(err)
    }
}

export const updateOrder = async (req, res, next) => {

    try{

        const id = req. params.id
        const updateOrder = await OrdersCollection.findByIdAndUpdate(id, req.body, {new:true})

        res.json({success: true, order: updateOrder})
    }

    catch(err) {
        next(err)
    }
}

export const deleteOrder = async (req, res, next) => {

    try{
        
        //whi not const id = req. params.id
        const {id} = req.params

        const existOrder = await OrdersCollection.findById(id)

        if(existOrder) {
            const deleteStatus = await OrdersCollection.deleteOne({_id: existOrder._id})

            res.json({success:true, status: deleteStatus})
        } else {
            throw new Error("Order ID doesn't exist!")
        }
    }

    catch(err) {

        next(err)

    }
}

