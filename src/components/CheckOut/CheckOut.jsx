import React, { useContext, useState } from 'react'
import { db } from '../../Firebase/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import './CheckOut.css'


const CheckOut = () => {

    const { cart, totalCarrito, totalCantidad, vaciarCarrito } = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApelllido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")


    const ctrlFormulario = (event) => {

        event.preventDefault()

        if (!nombre || !apellido || !telefono || !email) {
            setError("Required fields of the form")
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Email fields do not match")
            return;

        }


        const orden = {

            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.name,
                cantidad: producto.cantidad
            })),

            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "product", productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "newproducts"), orden)
                    .then((docRef) => {
                        setError("")
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                    })
                    .catch((error) => {
                        console.log(error)
                        setError("An error occurred when creating the order")
                    })
            })
            .catch((error) => {
                console.log(error)
                setError("Stock cannot be updated")
            })


    }
    return (
        <div className='form-container'>

            <h1 className='enter'>Enter your details</h1>

            <form onSubmit={ctrlFormulario}>

                {cart.map((producto) => (
                    <div key={producto.producto.id}>
                        <img src={producto.producto.image} alt={producto.producto.name} />


                        <p className='products-list'>
                            {""}

                            {producto.producto.name} x {producto.cantidad}

                        </p>
                    </div>
                ))}
                <div>

                    <div>

                        <label htmlFor="Nombre">Name</label>

                        <input name="Nombre" type="text" onChange={(e) => setNombre(e.target.value)} />

                    </div>

                    <div>

                        <label htmlFor="Apellido">Last Name</label>

                        <input name="Apellido" type="text" onChange={(e) => setApelllido(e.target.value)} />

                    </div>

                    <div>

                        <label htmlFor="Telefono">Phone</label>

                        <input name="Telefono" type="text" onChange={(e) => setTelefono(e.target.value)} />

                    </div>

                    <div>

                        <label htmlFor="Email">E-mail</label>

                        <input name="Email" type="email" onChange={(e) => setEmail(e.target.value)} />

                    </div>

                    <div>

                        <label htmlFor="Email confirmacion">Confirm E-mail</label>

                        <input name="Email confirmacion" type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />

                    </div>

                    {!ordenId && (
                        <button type="submit">Complete the checkout </button>
                    )}

                    {error && <p> {error}</p>}

                    {ordenId && (<p> Thank you for your purchase!!Your order number is{ordenId}</p>)}

                </div>

            </form>

        </div>
    )
}

export default CheckOut
