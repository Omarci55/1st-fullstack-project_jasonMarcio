import React, { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { MyContext } from '../context/MyContext'
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  const { setUser } = useContext(MyContext);
  const navigate = useNavigate();


  const loginUser = (e) => {

    e.preventDefault()

    fetch("/users/login", 
      {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(
          {
            email: e.target.email.value,
            password: e.target.password.value // --> values coming from form
          }
        )
      })
        .then(res => {
          const token = res.headers.get("token")
          localStorage.setItem("token", token)  // --> store token in local storage
          return res.json() // --> parse json data in the body in res
        })
        .then(result => {
          if(result.success){
            toast.success("Logged In")
            setUser(result.data) // --> setUser coming from useContext
            setTimeout(() => {
              navigate("/profile")
            }, 3000)  // --> setTimeout to see message on page
          } else {
            toast.success(result.message)
          }
        })
  }

  return (

    <Container >
      <h1>Sign in</h1>
      <Toaster position='top-center'/>
      <Form onSubmit={loginUser} className='container-sm'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password'/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
