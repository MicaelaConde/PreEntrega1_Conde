import React from 'react'
import './ItemsListContainer.css'
const ItemsListContainer = (props) => {
    console.log(props)
  return (
    <div className='msg-bienvenida'>
    <h2 className='message'>{props.name}</h2>
    </div>
  )
}

export default ItemsListContainer