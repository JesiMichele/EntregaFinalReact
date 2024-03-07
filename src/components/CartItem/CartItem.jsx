import React from 'react';
import './CartItem.css'
const CartItem = ({ producto, eliminarItem }) => {

    return (
        <div className='item' key={producto.producto.id}>
            <h3>{producto.producto.name}</h3>

            <img src={producto.producto.image} alt={producto.producto.name} />
            <p className='count'>Amount: {producto.cantidad}</p>
            <p className='v'>Unit Value: ${producto.producto.price * producto.cantidad}</p>
            <button className='btn' onClick={() => eliminarItem(producto.producto.id)}>Remove product</button>
        </div>
    );
};

export default CartItem;