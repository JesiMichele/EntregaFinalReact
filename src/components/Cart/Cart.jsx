import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () => {

    const { cart, vaciarCarrito, eliminarItem, totalCarrito } = useContext(CartContext)



    return (
        <div className='cart'>


            {cart.length == 0
                ?
                <>
                    <h2>There are no products in the cart</h2>
                    <Link to={'/'}>Back to top</Link>
                </>
                :
                <>
                    <h2 className='list1'>Cart List</h2>

                    {cart.map((p) => (
                        <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem} />
                    ))}


                    <p className='total'>Total: ${totalCarrito()}</p>

                    <button className='btnn' onClick={vaciarCarrito}>Empty cart</button>

                    <Link to={"/CheckOut"}>
                        Complete your purchase order
                    </Link>


                </>
            }


        </div>
    )
}

export default Cart

