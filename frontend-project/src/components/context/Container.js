import React, { useEffect, useState } from "react";
import { MyContext } from "./MyContext.js";
import { useNavigate } from "react-router-dom";

export default function Container(props) {

  const [ user, setUser ] = useState([])
  const [ cart, setCart ] = useState([])
  const [ products, setProducts ] = useState([])
  //const navigate = useNavigate()

  useEffect( () => {
    fetch("/products")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setProducts(result.data)
    })

    if(localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")))
    }
  }, [])

  return (
    <MyContext.Provider
      value = {
        {
          user, setUser,
          cart, setCart,
          products, setProducts
        }
      }
    >
      {props.children}
    </MyContext.Provider>
  )
}