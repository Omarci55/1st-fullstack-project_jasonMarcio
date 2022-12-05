import ProductsCollection from 

export const getAllProducts = async (req, res, next) => {
    
    try {

        const products = await ProductsCollection.find()
        async (req, res, next) => {
            const products =  await ProductsCollection.find()
            
                if(req.query.category){
                    const filteredProducts = products.filter(product => product.category === req.query.category)
                    res.send({success: true, data: filteredProducts})
                } else {
                    res.send({success: true, data: products})
                }
            }
    } catch(err) {
        next(err)
    }
}