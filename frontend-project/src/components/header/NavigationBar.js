import React, { useContext } from 'react'
import { MyContext } from "../context/MyContext"
import { Navbar, Nav, Container, NavDropdown, Button, Badge} from "react-bootstrap"
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
                        <NavDropdown.Item >
                            <NavLink to="/water" style={{ textDecoration: 'none'}}>Water</NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <NavLink to="/wines" style={{ textDecoration: 'none'}}>Wine</NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <NavLink to="/bier" style={{ textDecoration: 'none'}}>Bier</NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <NavLink to="/soda" style={{ textDecoration: 'none'}}>Soda</NavLink>
                        </NavDropdown.Item>

                    </NavDropdown>

                    <LinkContainer  to="/cart">
                        <Nav.Link>
                            Cart <Badge bg="secondary">{cart.length}</Badge>
                        </Nav.Link>
                    </LinkContainer>


                    {!user  ?
    
                    <> 

                        <LinkContainer to="/signup"> 
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>

                        
                        <LinkContainer to="/login"> 
                            <Nav.Link>
                                 Login
                            </Nav.Link>
                        </LinkContainer>
                         
                    

                        </> 
                        :
                        <>

                        <LinkContainer to="/order"> 
                            <Nav.Link>Order</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/profile"> 
                            <Nav.Link>Profile</Nav.Link>
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
                   
                   </Navbar.Collapse>
                
            </Container>
        </Navbar>
  
    </header>
  )
}
