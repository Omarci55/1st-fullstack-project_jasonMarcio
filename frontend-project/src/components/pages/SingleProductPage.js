import React, { useEffect, useState } from 'react'
import  { Link } from "react-router-dom" 
import { Row, Col, Image, ListGroup, Card, Button, Container } from "react-bootstrap"
import axios from 'axios'


const SingleProductPage = ({match})  => {

    const [product, setProduct] = useState({})

    useEffect( () => {
        const fetchProduct = async () => {
          const { data } = await axios.get(`/products/${match.params.id}`)
    
          setProduct(data.data)
        }
        fetchProduct()
      }, [match])

  return (
    <Container>
   
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
                    <Button variant="light" className="btn-block" type="button">
                        Add To Cart
                    </Button>
                </ListGroup.Item>
            </Card>
        </Col>
    </Row>
    </Container>
  )
}
export default SingleProductPage