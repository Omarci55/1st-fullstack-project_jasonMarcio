import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

export default function CartPage() {

  const { cart, setCart, user, setUser } = useContext(MyContext)

  const navigate = useNavigate()

  return (

    <div>Cart</div>
  )
}
