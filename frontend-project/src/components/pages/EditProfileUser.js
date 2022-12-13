import React, { useContext} from 'react';
import { MyContext } from '../context/MyContext';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Button, Container, Row, Col, InputGroup, /* Toast, FormGroup */ } from "react-bootstrap";


export default function EditProfile() {

  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const updateUserRequest = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    fetch(`/users/${user._id}`, {
      method: "PATCH",
      headers: {token: localStorage.getItem('token') },
      body: data
    })
    .then((res) => res.json())
    .then((result) => {
      if(result.success) {
        toast.success("Profile Updated");
        setUser(result.user);
        setTimeout(() => {
          navigate("/profile");
        }, 3000);
      } else {
        toast.error(result.message)
      }
    });
  }


  return (

    <Container>
        <Form onSubmit={updateUserRequest}>
            <Row className="mb-1">

            <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
                name = 'fName'
                required
                type="text"
                placeholder="First name"
                defaultValue={user.fName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
                name = 'lName'
                required
                type="text"
                placeholder="Last name"
                defaultValue={user.lName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
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
        </Form.Group> */}
            </Row>
        <Row className="mb-3">
            {/* <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email'/>
            </Form.Group> */}

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="****"/>
            </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onSubmit={updateUserRequest}>
            Submit
        </Button>
    </Form>

     <Toaster position='top-center' />

    </Container>
    // <div>
    //   <Toaster position="top-center" />
    //   <h1>Edit Profile</h1>
    //   <form onSubmit={updateUserRequest}>
    //     <label>
    //       First Name :{" "}
    //       <input type="text" name="firstName" defaultValue={user.firstName} />{" "}
    //     </label>
    //     <br />

    //     <label>
    //       Last Name :{" "}
    //       <input type="text" name="lastName" defaultValue={user.lastName} />{" "}
    //     </label>
    //     <br />

    //     <label>
    //       Password :{" "}
    //       <input type="password" name="password" placeholder={"******"} />{" "}
    //     </label>
    //     <br />

    //     {/* <label>
    //       Profile Image : <input type="file" name="image" />{" "}
    //       <img src={user.profileImage} width="100" alt="profileimage" />
    //     </label> */}
    //     <br />

    //     <button>save</button>
    //   </form>
    // </div>
  );
}
 