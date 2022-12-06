import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    brand: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    img: {
        type: String, 
        required: true
    },
    inventoryCount: {
        type: Number, 
        required: true
    },
})

const ProductsCollection = mongoose.model("products", productsSchema);

export default ProductsCollection;