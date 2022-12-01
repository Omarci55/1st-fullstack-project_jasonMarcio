import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
//import img from "../../product"


const CarouselHome = () => {

  return (
    <>
    <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src='/images/airpods.jpg'
                alt="First slide"
              />
              <Carousel.Caption className='carousel-text'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src='/images/camera.jpg'
                alt="Second slide"
              />
              <Carousel.Caption className='carousel-text'>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/images/alexa.jpg'
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-text'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselHome