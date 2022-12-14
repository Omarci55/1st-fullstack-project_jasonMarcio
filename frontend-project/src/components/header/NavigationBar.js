import React, { useContext } from 'react'
import { MyContext } from "../context/MyContext"
import { Navbar, Nav, Container, NavDropdown, Button} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { NavLink } from 'react-router-dom'

export default function NavigationBar({ product }) {

    const { user, cart } = useContext(MyContext)

  return (

    <header className='nav-header'>
    
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container >


                <LinkContainer to="/"> 
                    <Navbar.Brand><h1>Our Shop</h1></Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-cart" />

                <Navbar.Collapse id="basic-navbar-cart">

                <Nav className="ml-auto">



                     <LinkContainer   to="/">
                        <Nav.Link>
                            Home
                        </Nav.Link>
                    </LinkContainer>
                    
                     

                    <NavDropdown title="Products" id="basic-nav-dropdown">              
                        <NavDropdown.Item>
                            <Nav.Link to="/water">Water</Nav.Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <Nav.Link to="/wines">Wine</Nav.Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <Nav.Link to="/bier">Bier</Nav.Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <Nav.Link to="/soda">Soda</Nav.Link>
                        </NavDropdown.Item>

                    </NavDropdown>

                    <LinkContainer  to="/cart">
                        <Nav.Link>
                            Cart <sup>{cart.length}</sup>
                        </Nav.Link>
                    </LinkContainer>

                    {user  ?
                    
                    <>

                    
                        <LinkContainer to="/order"> 
                            <Nav.Link>Order</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/profile"> 
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>

                        </> 
                        :
                        <>
                    
                        <LinkContainer to="/signup"> 
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>

                        

                    </> }

                    {user === "isAdmin" &&
                    
                     <LinkContainer  to="/admin">
                        <Nav.Link>
                            Admin Panel
                        </Nav.Link>
                    </LinkContainer>

                   }

                
                
                </Nav>
                   
                   
                    <Button>
                        <LinkContainer to="/login"> 
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Button>
                    
                
                    
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
  
    </header>
  )
}
