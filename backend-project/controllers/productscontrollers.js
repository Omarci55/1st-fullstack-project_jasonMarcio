import ProductsCollection from "../models/productsschema.js"
import products from "../data/products.js"

export const getAllProducts = async (req, res, next) => {
    
    try {
        console.log(req.query.category)
        
      /*   const products = await ProductsCollection.find() */
        if(req.query.category) {
            console.log(req.query.category)
            const  filteredProducts = products.filter(product => product.category.toLowerCase() === req.query.category.toLowerCase())

            res.json({success: true, data: filteredProducts})
        } else {
            res.json({success: true, data: products})
        }
        
    }catch(err){
        next(err)
    }

}