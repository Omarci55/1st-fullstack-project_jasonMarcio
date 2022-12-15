import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { useNavigate } from 'react-router-dom';
import { Container, ListGroup, Row, Col, Card, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function ProfilePage() {

  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const editProfile = () => {
    navigate("/editprofileuser")
  }

  const deleteUser = () => {
    fetch(`/users/${user._id}`,{method:"DELETE", headers:{
      token:localStorage.getItem("token")
    }})
    .then(res=>res.json())
    .then(result=>{
      if(result.success){
        setUser(null)
        localStorage.removeItem("token")
        navigate("/signup")
      }
    })
  }

const deleteOrder = (id) => {
  fetch(`/order/${id}`,{
    method:"DELETE", 
    headers:{token: localStorage.getItem("token")},
  })
  .then(res => res.json())
  .then(result => {
    if(result.success){
      setUser(result.data)
    }
  })
};

  return (
    <div>

    <Container>
      <h1>Welcome, {user.fullName}</h1>

      <Row>

      <Col md={3}>
        <ListGroup>
          <ListGroupItem mb={4}>
            <Link className='link'  onClick={editProfile}>
              Update Profile
            </Link>
          </ListGroupItem>
            
          <ListGroupItem>
            <Link className='link'  to='/orders'>
              View your Orders
            </Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link className='link'  to='/orders'>
              Delivery Address
            </Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link className='link'  onClick={logout}>
              Logout
            </Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link className='link'  onClick={deleteUser}>
              Delete Account
            </Link>
          </ListGroupItem>
          
        </ListGroup>
      </Col>

      <Col md="9">
        <ListGroup>
          <ListGroupItem>

          </ListGroupItem>
        </ListGroup>

      </Col>

      </Row>

    </Container>

</div>  
  );
}
