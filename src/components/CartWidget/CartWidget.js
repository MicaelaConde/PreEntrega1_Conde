import React from 'react'
import carrito from '../../imagenes/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='div_carrito'>
    <img className='carrito' src={carrito} alt = "cart widget"/>
    </div>
  )
}

export default CartWidget