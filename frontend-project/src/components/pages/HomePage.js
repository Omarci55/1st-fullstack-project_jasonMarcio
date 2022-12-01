import React from 'react'
import { Row, Col, Container, Carousel, Card, Button } from "react-bootstrap"
import product from "../../product"
import Product from '../Product'
import CarouselHome from './CarouselHome'
//import Products from './products/Products'

const HomePage = () => {
  

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

          {product.map( product => (

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

