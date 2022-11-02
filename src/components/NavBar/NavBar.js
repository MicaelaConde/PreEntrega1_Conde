import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar-container'>

    <ul className='menu-items'>
    <li>
    <a href=''className='list'>Productos</a>
    </li>
    <li>
    <a href=''className='list'>Contacto</a>
    </li>
    <CartWidget/>
    
    </ul>

    </div>
  )
}


export default NavBar