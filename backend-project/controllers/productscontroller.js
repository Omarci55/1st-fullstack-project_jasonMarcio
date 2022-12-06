import ProductsCollection from "../models/productsschema.js"
//import products from "../data/products.js"

export const getAllProducts = async (req, res, next) => {
    
    try {
        // console.log(req.query.category)
        const products = await ProductsCollection.find()
        async (req, res, next) => {
            const products =  await ProductsCollection.find()
            
                if(req.query.category){
                    // console.log(req.query.category)
                    const filteredProducts = products.filter(product => product.category.toLowerCase() === req.query.category.toLowerCase())
                    res.send({success: true, data: filteredProducts})
                } else {
                    res.send({success: true, data: products})
                }
            }
    } 
    catch(err) {
        next(err)
    }
}

export const getSingleProduct = async (req, res, next) => {
    try{
        const id = req.params.id
        const singleProduct = await ProductsCollection.findById(id)
        res.json({success: true, product: singleProduct})
    }
    catch(err){
        next(err)
    }
}

export const createProduct = async (req, res, next) => {
    try{
        const product = new ProductsCollection(req.body)
        await product.save()
        res.json({success: true, product: product})
    }
    catch(err) {
        next(err)
    }
}

export const updateProduct = async (req, res, next)=> {
    try{
        const id = req.params.id
        const updateProduct = await ProductsCollection.findByIdAndUpdate(id, req.body, {new: true})
        res.json({success: true, product: updateProduct})
    }
    catch(err){
        next(err)
    }
}

export const deleteProduct = async (req, res, next) => {
    try{
        const {id} = req.params
        const existingProduct = await ProductsCollection.findById(id)
        if(existingProduct){
            const deleteStatus = await ProductsCollection.deleteOne({_id: existingProduct._id})
            res.json({success: true, status: deleteStatus})
        } else {
            throw new Error("id does not exist")
        }
    }
    catch(err){
        next(err)
    }
}   

