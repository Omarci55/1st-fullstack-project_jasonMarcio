import React, { useContext, useEffect, useState } from 'react'
import  { Link } from "react-router-dom" 
import { Row, Col, Image, ListGroup, Card, Button, Container } from "react-bootstrap"
import axios from 'axios'
import { MyContext } from '../context/MyContext'

const SingleProductPage = ({match})  => {

    const [product, setProduct] = useState({})

    const { products } = useContext(MyContext)

    useEffect( () => {
        const fetchProduct = async () => {
          const { data } = await axios.get(`/products/${match.params.id}`)
    
        }
        fetchProduct()
      }, [match])

      /* const singleProduct = products.filter(item => item.(data.params.id)) */

  return (
    <Container>
        <Container variant="light">
    
        <Link className='btn btn-light my-3' to="/">
            Go back
        </Link>

        <Row>
            <Col md={6}>
                <Image src={product.img} alt={product.name}/>
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
    </Container>
  )
}
export default SingleProductPage