import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { MyContext } from '../../context/MyContext'
import Product from '../homepage/ProductCard'

export default function Water() {

  const { products } = useContext(MyContext)

  const water = products.filter(item => item.category.toLowerCase() === "water")

  return (

    <>
      
      <Container >
        <Card variant="dark">
          <Card.Header >Water</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Our best selection of water{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

        <Container>
          <Row>

            {water.map( product => (

                <Col sm={12} md={6} lg={4} xl={3}>
                  <Product 
                  key={product.category}
                  product={product}/>
                </Col>
                  
              ))}

          </Row>
        </Container>
        
      </Container>

      
    </>
  )
}
