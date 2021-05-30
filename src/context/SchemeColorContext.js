import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [schemeColor, setSchemeColor] = useState(
    localStorage.getItem('scheme-color')
  )

  useEffect(() => {
    const modeSchemeColor = schemeColor === 'dark' ? 'dark' : 'light'
    localStorage.setItem('scheme-color', modeSchemeColor)
    if (localStorage.getItem('scheme-color') === 'dark') {
      document.body.classList.add('dark')
    }
  }, [schemeColor])

  const value = {
    schemeColor,
    setSchemeColor
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Context: Context.Consumer
}
