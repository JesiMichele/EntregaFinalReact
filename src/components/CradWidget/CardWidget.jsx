import React, { useContext } from 'react'
import './CardWidget.css'
import { CartContext } from '../../Context/CartContext'



const CardWidget = () => {


  const { totalCantidad , eliminarItem } = useContext(CartContext)

  return (
    <>
    
    <img src="/assets/img/carrito.png.png" alt="" className='img1' />
      <p className='img2'>{totalCantidad() == 0 ? 0 : totalCantidad()}</p>
      
      
    
      
    </>


  )
}

export default CardWidget
