import React, { useState } from "react";


const ItemCount = ({ Initial, stock, onAdd }) => {

    const [contador, setContador] = useState(1)

    const decrement = () => {
        if (contador > Initial) {
            setContador(contador - 1)
        }
    }
    const increment = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const agregarCarrito = () => {
        onAdd(contador)
    }
    return (
        <div>
            <p>{contador}</p>
            <button onClick={decrement}>-</button>
            <button onClick={agregarCarrito}>Add to Cart</button>
            <button onClick={increment}>+</button>




        </div>
    )



}
export default ItemCount