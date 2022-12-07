import React from 'react'
import { Form, Button, Container, Row, Col, InputGroup, /* Toast, FormGroup */ } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function SignupPage() {

  const navigate = useNavigate()

  const registerUser = (event) => {
    event.preventDefault()
    
    const data = new FormData(event.target)

    // sending data to backend
    fetch("http://localhost:10787/users",
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

    <Container>
        <Form>
            <Row className="mb-3">

            <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
            </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group> */}


        {/* <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
        </Row> */}

        <Button variant="primary" type="submit" onSubmit={registerUser}>
            Submit
        </Button>
    </Form>

     <Toaster position='top-center' />

    </Container>
  )
}
