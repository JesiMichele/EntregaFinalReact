import React from 'react'
import Item from '../Item/Item'


const ItemList = ({ productos }) => {


  return (

    <div>{
      productos.map((producto, id) => {

        return (
          <Item key={id} producto={producto} />
        )
      }

      )}
    </div>

  )
}

export default ItemList
