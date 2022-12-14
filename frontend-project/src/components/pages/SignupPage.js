import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup, /* Toast, FormGroup */ } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function SignupPage() {

  const navigate = useNavigate()

  const registerUser = (event) => {
    event.preventDefault()
    
    const data = new FormData(event.target) // --> requires passing name attribute

    // sending data to backend
    fetch("/users",
      {method: "POST", body: data} //--> attaching data to body
    )
    .then(res => res.json()) // res coming from server
    .then( result => {

      if(result.success){
         toast.success('Sign Up Successful!')
         setTimeout(() => {
          navigate("/login") // --> redirect user to /login after result.success evaluated true
         }, 2000)

      } else {
        toast.error(JSON.stringify(result.message))

      }
    })
    
  }


  return (

    <Container className="justify-content-md-center">

        <h1>Create your user account!</h1>
        <Form onSubmit={registerUser} >
            <Row className="mb-2" >

            <Form.Group as={Col} md="3" mb="3" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
                name = 'fName'
                required
                type="text"
                placeholder="First name"
                
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
                name = 'lName'
                required
                type="text"
                placeholder="Last name"
                
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
            </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email'/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password'/>
            </Form.Group>
        </Row>

        
        <Button variant="primary" type="submit" onSubmit={registerUser}>
            Submit
        </Button>
    </Form>

     <Toaster position='top-center' />

    </Container>
  )
}
