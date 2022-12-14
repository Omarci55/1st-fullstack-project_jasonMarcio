import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    products: [
        {
            //
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true
        }
    ],
    /* orderItems: [
        {
          name: { type: String, required: true },
          qty: { type: Number, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
          },
        },
    ], */
    /* shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    }, */
    paymentMethod: {
        type: String,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    /* isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    }, */
},
{
    timestamps: true
})

const OrdersCollection = mongoose.model('Order', ordersSchema)

export default OrdersCollection;