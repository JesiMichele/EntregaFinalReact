import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const { id } = useParams()

    const [producto, setProducto] = useState([]);

    useEffect(() => {

        const newDoc = doc(db, "product", id)

        getDoc(newDoc)

            .then(res => {
                const data = res.data()
                const newProduct = { id: res.id, ...data }
                setProducto(newProduct)
            })
            .catch(error => console.log(error))

    }, [])


    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
