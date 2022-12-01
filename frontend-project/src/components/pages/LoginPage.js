import React, { useContext, useState } from 'react'
/* import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './context/MyContext'; */
import { Form, Button, Container } from "react-bootstrap"

export default function LoginPage() {

  return (

    <Container >
    <Form className='container-sm'>
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
