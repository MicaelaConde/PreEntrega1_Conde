import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className='navbar-container'>
    <h1 className='menu-title'>Mi tienda online</h1>
    <ul className='menu-items'>
    <li>
    <a href=''className='menu-list'>Productos</a>
    </li>
    <li>
    <a href=''className='menu-list'>Contacto</a>
    </li>
    </ul>

    <CartWidget/>
    </div>
  )
}


export default NavBar