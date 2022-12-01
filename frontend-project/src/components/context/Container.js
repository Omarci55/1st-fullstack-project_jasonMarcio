import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './MyContext';

export default function Container(props) {

    //all this properties are shared within all children
    const [products, setProducts ] = useState([])
    const [cart, setCart] = useState([])
    const [ user, setUser ] = useState(null)
    const navigate = useNavigate()

    //this is my GET REQUEST
    useEffect( () => {
        //onload event
        //fetch is a promise, so I have to use .then
        fetch("/products")
        .then(res => res.json())
        .then( result => {
            console.log(result)
            setProducts(result)
        })

        const token = localStorage.getItem("token")
        if(token) {
          fetch("/users/checkusertoken",
          {
            method:"GET",
            headers:{
              "token": token
            }
          })
          .then(res => res.json())
          .then(result => {
           
            if(result.success){
              setUser(result.data)
            } else {
              navigate("/login")
            }
          })
        }
    }, [])

  return (

    //Qualquer valor que eu passe no context.provider vai estar disponível para a children
    <MyContext.Provider 
      value = { 
        { 
          products, setProducts, 
          cart, setCart, 
          user, setUser 
        } 
      } >

        {props.children}

    </MyContext.Provider>
    
  )

}
