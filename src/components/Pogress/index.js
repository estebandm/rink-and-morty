import React, { useState, useEffect } from 'react'

import './styles.css'
import breakPointObserver from 'hooks/useBreakPoint'
import { breakPoints } from 'constants/breakpoints'
import useSetClasses from 'hooks/useSetClasses'

export const Progress = () => {
  const [breakPoint, setBreakPoint] = useState()
  const { classes } = useSetClasses()
  const classMobile = breakPoint === 'mobile' ? 'loader-mobile' : ''

  useEffect(() => {
    breakPointObserver(breakPoints, setBreakPoint)
  }, [breakPoint])

  return (
    <div className={`loader ${classMobile} ${classes.loaderProgress}`}></div>
  )
}

export default Progress
