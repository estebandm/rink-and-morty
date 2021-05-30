import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import useSetClasses from 'hooks/useSetClasses'
import breakPointObserver from 'hooks/useBreakPoint'
import { breakPoints } from 'constants/breakpoints'
import './styles.css'

export const Button = ({ children, route }) => {
  const { classes } = useSetClasses()
  const [breakPoint, setBreakPoint] = useState()
  const classButtonMobile = breakPoint === 'mobile' ? 'button-mobile' : ''
  const history = useHistory()
  useEffect(() => {
    breakPointObserver(breakPoints, setBreakPoint)
  }, [breakPoint])

  const handleOnClick = () => {
    history.push(route)
  }

  return (
    <button className={`button ${classButtonMobile} ${classes.button}`} onClick={handleOnClick}>
      {children}
    </button>
  )
}

export default Button
