import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from "react-bootstrap"
import { MyContext } from '../../context/MyContext'

const Product = ({ product }) => {

  const { cart, setCart, user } = useContext(MyContext)

  const addItemIntoCart = (product) => {
    const foundItem = cart.find( item => item._id === product._id)

    if( foundItem) {
      foundItem.quantity++
      setCart([...cart])
    } else {
      setCart([...cart, {...product, quantity: 1}])
    }
  }

  return (
   <Card className="my-3 p-3 rounded">
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} variant="top"/>
        </Link>

        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <div className='"my-3'>
                {product.brand}
            </div>
          </Card.Text>

          <Card.Text as="h3">
            <div className='"my-3'>
                {product.price}€
            </div>
          </Card.Text>

          <Button onClick={() => addItemIntoCart(product)}>
              Add to cart
          </Button>
          
        </Card.Body>

    </Card>
  )
}

export default Product
