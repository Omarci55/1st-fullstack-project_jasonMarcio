import React, { useContext } from 'react'
import { Container, ListGroup, Row, Col, Card, ListGroupItem, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

export default function CartPage() {

  const { cart, setCart, user, setUser } = useContext(MyContext)

  const navigate = useNavigate()

  const incrementQuantity = (id) => {
    const foundItem = cart.find((item) => item._id === id)
    foundItem.quantity++
    setCart([...cart])

    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const decrementQuantity = (id) => {
    const foundItem = cart.find( (item) => item._id === id)
    if(foundItem.quantity === 1) {

      setCart(cart.filter((item) => item._id !== id))
       localStorage.setItem("cart", JSON.stringify((cart.filter((item) => item._id !== id))))

    } else {
      foundItem.quantity--
      setCart([...cart])

      localStorage.setItem("cart", JSON.stringify(cart))

    }

  }

  const placeOrder = () => {

    if (user) {
      fetch("/orders", {
        method: "POST",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          userName: user.fullName,
          products: cart.map((product) => product._id),
          totalPrice: cart.reduce(
            (acc, item) => (acc += item.price * item.quantity), 0),
        }),
      })
        .then((res) => res.json())
        .then((result) => {
            if(result.success){
              console.log(result)
              setUser(result.data)
              setCart([])
              localStorage.removeItem("cart")
              
            }
          });

      } else {
        navigate("/login");
    }
  }
  

  return (

    <Container>
      <Row>
        <h1>SHOPPING CART</h1>
        
        <Col md={8}>
          <ListGroup>
            {cart.map( product => {
              return (

                <ListGroup.Item key={product._id}>
                  <Row>
                    <Col md={2}>
                      <img src={product.img} width="100"></img>
                    </Col>

                    <Col md={3}>
                      {product.name}
                    </Col>

                    <Col md={2}>
                      {product.price} €
                    </Col>

                    <Col md={3}>
                      <span class="badge rounded-pill bg-primary span-inc" onClick={() => incrementQuantity(product._id)}>
                        +
                      </span>
                      {product.quantity}
                      <span class="badge rounded-pill bg-primary span-dec" onClick={() => decrementQuantity(product._id)}>
                        -
                      </span>
                    </Col>
                  </Row>

                </ListGroup.Item>
              )
            })}
          </ListGroup>
          
        </Col>

        <Col md={4}>

          <Card>
            <ListGroup>
              <ListGroupItem>
                <h2>
                  Total Items: {cart.reduce((acc, item) => (acc + item.quantity), 0)} 
                </h2>

                {cart.reduce((acc, item) => (acc + item.quantity * item.price), 0)} €
              </ListGroupItem>

              <ListGroupItem>
                <Button type="button" className="btn-block" onClick={placeOrder}>
                  Proceed To Checkout
                </Button>
              </ListGroupItem>

            </ListGroup>
          </Card>
          
        </Col>

      </Row>
      
    </Container>
  )
}
