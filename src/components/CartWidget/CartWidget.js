import React from 'react'
import carrito from '../../imagenes/carrito.png'
const CartWidget = () => {
  return (
    <div>
    <img className='navbar_carrito' src={carrito} alt = "cart widget"/>
    </div>
  )
}

export default CartWidget