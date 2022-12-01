import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import NavigationBar from './components/navigation/NavigationBar'
import Footer from './components/Footer'
import HomePage from "./components/pages/HomePage"
import ProductPage from './components/pages/ProductPage'
import LoginPage from './components/pages/LoginPage'
import ProfilePage from './components/pages/ProfilePage'
import SignupPage from './components/pages/SignupPage'
import Water from './components/products/Water'
import Bier from './components/products/Bier'
import Wines from './components/products/Wines'
import Soda from './components/products/Soda'
import Cart from './components/pages/CartPage'
import Order from './components/pages/Order'
import EditProfileUser from './components/pages/EditProfileUser'
import AdminPanel from './components/pages/AdminPanel'



function App() {
  return (
    <>
      <Router>
        
        <NavigationBar/>

          <main className='py-3'>

            <Container className='body-container'>
              
              <HomePage/>

            </Container>

              <Routes>
                <Route path="/" element={<HomePage/>}/>
                {/* <Route path="/" component={HomePage} exact/>  */} 

                <Route path="/product/:id" element={  <ProductPage/>} />

                <Route path="/water" element={  <Water />} />
                <Route path="/bier" element={  <Bier />} />
                <Route path="/wines" element={  <Wines />} />
                <Route path="/soda" element={  <Soda />} />

                <Route path="/signup" element={  <SignupPage/>} />
                <Route path="/order" element={  <Order/>} />
                <Route path="/login" element={ <LoginPage/>} />

                <Route path="/profile" element={  <ProfilePage/>} />

                <Route path="/cart" element={  <Cart/>} />

                <Route path="/editprofileuser" element={  <EditProfileUser/>} />

                <Route path="/admin" element={  <AdminPanel/> } />

              </Routes>

          </main>
        </Router>

          <Footer/>

      </>
  );
}

export default App;
