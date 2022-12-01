import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card } from "react-bootstrap"
import Product from '../Product'
import CarouselHome from './CarouselHome'

//import Products from './products/Products'

const HomePage = () => {

  const [ products, setProducts ] = useState([])
  
  useEffect( () => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/products')

      setProducts(data)
    }
    fetchProducts()
  })

  return (
    <>
        <Container>
            <Card>
              <Card.Img variant="top" src="/images/startseite_winter.jpg" />
              </Card>
        </Container>

        <h1>Welcome to our shop</h1>

        <Container>
            <Container>
              <CarouselHome/>
            </Container>

            

        </Container>

        <Row>

          {products.map( product => (

              <Col sm={12} md={8} lg={4} xl={3}>
                <Product 
                key={product._id}
                product={product}/>
              </Col>
                
            ))}

        </Row>
    </>
  )
}

export default HomePage;

