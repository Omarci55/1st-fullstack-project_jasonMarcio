import React, { useContext, useState } from 'react'
/* import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; */
//import { MyContext } from './context/MyContext.js';
import { Form, Button, Container } from "react-bootstrap"

export default function LoginPage() {

  //const { setUser } = useContext(MyContext)

  const loginUser = (e) => {

    e.preventDefault()

    fetch("/users/login", 
          {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(
              {
                email: e.target.email.value,
                password: e.target.password.value
              }
            )
          })
  }

  return (

    <Container >
    <Form onSubmit={loginUser} className='container-sm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}
