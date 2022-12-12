import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { MyContext } from '../../context/MyContext'
import Product from '../homepage/ProductCard'

export default function Wine() {

  const { products } = useContext(MyContext)

  const wine = products.filter(item => item.category.toLowerCase() === "wine")

  return (

    <>
      
      <Container >
        <Card variant="dark">
          <Card.Header >Wine</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Our best selection of wine{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

        <Container>
          <Row>

            {wine.map( product => (

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
