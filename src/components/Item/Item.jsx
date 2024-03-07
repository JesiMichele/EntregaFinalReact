import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
  return (

    <Link to={`/detalle/${producto.id}`}>
      <div key={producto.id} className='product'>
        <h2>{producto.name} </h2>
        <img src={producto.image} alt={producto.name} />



      </div>
    </Link>
  )
}

export default Item
