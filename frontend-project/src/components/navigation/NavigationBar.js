import React, { useContext } from 'react'
//import { MyContext } from "../context/MyContext"
import { Navbar, Nav, Container, NavDropdown, Button} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export default function NavigationBar({ product }) {

    //const { cart, client } = useContext(MyContext)

  return (

    <header className='nav-header'>
     
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container >
                <LinkContainer to="/"> 
                    <Navbar.Brand><h1>Our Shop</h1></Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-cart" />

                <Navbar.Collapse id="basic-navbar-cart">

                <Nav className="ml-auto">

                    <LinkContainer to="/"> 
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    
                    {/* <LinkContainer to="/product"> 
                        <Nav.Link>Products</Nav.Link>
                    </LinkContainer> */}

                    <NavDropdown title="Products" id="basic-nav-dropdown">              
                        <NavDropdown.Item to="/water">
                            Water
                        </NavDropdown.Item>

                        <NavDropdown.Item to="/wines">
                            Wines
                        </NavDropdown.Item>

                        <NavDropdown.Item href="/bier">
                            Bier
                        </NavDropdown.Item>

                        <NavDropdown.Item href="/soda">
                            Soda
                        </NavDropdown.Item>

                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item> */}
                    </NavDropdown>


                    {/* {client ? <> */}

                    <LinkContainer to="/order"> 
                        <Nav.Link>Order</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/profile"> 
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                    

                     {/* </> */} 
                     {/* : */}
                     {/* <> */} 
                     <LinkContainer to="/signup"> 
                        <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>
                
                    {/* <LinkContainer to="/login"> 
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer> */}
                    

                     {/* </> } */} 

                     {/* {client && client.role === "admin" &&  */}
                    
                    <Nav.Link to="/admin">
                        Admin Panel
                    </Nav.Link>

                    {/* }  */}

                    <Nav.Link href="/cart">
                        Cart
                    </Nav.Link>
                
                
                </Nav>

                <Button variant="secondary">
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
