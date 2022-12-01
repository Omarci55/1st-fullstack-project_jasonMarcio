import React from 'react'
import  { Link } from "react-router-dom" 
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import products from '../../product'

const ProductPage = ({match})  => {

    const product = products.find(item => item._id === match.params._id)
    

  return (
    <>
    <Link className='btn btn-light my-3' to="/">
        Go back
    </Link>

    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name}/>
        </Col>
        
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
            
                <ListGroup.Item>
                    Brand: {product.brand}
                </ListGroup.Item>
            
                <ListGroup.Item>
                    <h4>Price: {product.price}€</h4>
                </ListGroup.Item>

                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col md={3}>
            <Card>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            Price:
                        </Col>
                        <Col>
                            {product.price}€
                        </Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Button className="btn-block" type="button">
                        Add To Cart
                    </Button>
                </ListGroup.Item>
            </Card>
        </Col>
    </Row>
    </>
  )
}
export default ProductPage