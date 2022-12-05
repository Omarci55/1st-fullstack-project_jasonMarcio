import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: {
        type:String, 
        required: true
    },
    img: {
        type: String
    },
    description: {
        type: String, 
        required: true
    },
    brand: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
},
{
    timestamps: true
})

const ProductsCollection = mongoose.model('product', productsSchema)

export default ProductsCollection;