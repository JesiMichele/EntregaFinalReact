import React from 'react'
import ComponenteHijo from '../ComponenteHijo/ComponenteHijo'
const ComponentePadre = () => {
  return (
    <div>
      <ComponenteHijo>
        <h1>Conoce mas acerca de nuestros productos</h1>

        <p>¡Bienvenido a nuestra colección de lentes de sol, donde el estilo y la protección se fusionan perfectamente para ofrecerte lo mejor en moda y cuidado para tus ojos!</p>
      </ComponenteHijo>


      <ComponenteHijo>
        <h1>Esta es nuestra selecion</h1>
        <p>"Explora nuestra exclusiva selección de lentes de sol: estilo y protección en un solo lugar."</p>
      </ComponenteHijo>

    </div>
  )
}

export default ComponentePadre
