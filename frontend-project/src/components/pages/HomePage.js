import axios from 'axios'
import React, { useEffect, useState } /* { useContext, } */ from 'react'
import { Row, Col, Container, Card } from "react-bootstrap"
//import { MyContext } from '../context/MyContext'
import Product from '../ProductCard'
import CarouselHome from './CarouselHome'

//import Products from './products/Products'

const HomePage = () => {
  //const { products } = useContext(MyContext)
  const [ products, setProducts ] = useState([])

  useEffect( () => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/products")

      setProducts(data)
    }
    fetchProducts()
  }, [])
  
  return (
    <>
    <Container/>

        <Container>
            <Container>
              <CarouselHome/>
            </Container>

          
        </Container>
        
            {/* <Card>
              <Card.Img variant="top" src="/images/startseite_winter.jpg" />
            </Card> */}
        
        <Container>
          <Row>

            {products.map( product => (

                <Col sm={12} md={8} lg={4} xl={3}>
                  <Product 
                  key={product._id}
                  product={product}/>
                </Col>
                  
              ))}

          </Row>
        </Container>
    </>
  )
}

export default HomePage;

