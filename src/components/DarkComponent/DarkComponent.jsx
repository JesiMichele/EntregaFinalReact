import React,{useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const DarkComponent = () => {
     
    const{isDarkmode,toggleDarkMode}= useContext(ThemeContext)

  return (
    <div>
      <button onClick={toggleDarkMode}>Cambiar</button>
    </div>
  )
}

export default DarkComponent
