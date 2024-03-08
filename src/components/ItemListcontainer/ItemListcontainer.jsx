import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/config';
import { collection, getDocs, where, query } from 'firebase/firestore';





const ItemListcontainer = () => {

   const [productos, setProductos] = useState([]);

   const { categoryId } = useParams()


   useEffect(() => {


      const myProducts =
         categoryId ?
            query(collection(db, "product"), where("category", "==", categoryId))
            :
            collection(db, "product")

      getDocs(myProducts)
         .then((res) => {
            const newProducts = res.docs.map((doc) => {
               const data = doc.data()
               return { id: doc.id, ...data }
            })

            setProductos(newProducts)
         })
         .catch((error) => console.log(error))


   }, [categoryId])

   return (
      <div>


         {productos.length == 0
            ?
            <h1>Loading products...</h1>
            :
            <ItemList productos={productos} />
         }


      </div>
   )
}

export default ItemListcontainer