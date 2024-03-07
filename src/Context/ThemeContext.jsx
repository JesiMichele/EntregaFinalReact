import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();




const ThemeProvider = ({ children }) => {


    // const[Cart, setCart]= useState[]
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode( prevMode=> !prevMode)
    }


    return (
        <ThemeContext.Provider value={{
            isDarkMode,
            toggleDarkMode
        }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider;