import React from 'react'

import { useLocation } from 'react-router-dom'

import Switch from 'components/Switch'
import './styles.css'
import useSetClasses from 'hooks/useSetClasses'

export const Header = ({ children }) => {
  const location = useLocation()
  const { classes } = useSetClasses()
  return (
    <>
      <header className={`header ${classes.header}`}>
        <Switch/>
      </header>
      {children}
    </>
  )
}

export default Header
