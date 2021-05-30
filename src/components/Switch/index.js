import React, { useContext, useState, useEffect } from 'react'

import Sun from 'components/core/icons/Sun'
import Moon from 'components/core/icons/Moon'
import useSetClasses from 'hooks/useSetClasses'
import { Context as SchemeColorContext } from 'context/SchemeColorContext'
import './styles.css'

export const Switch = () => {
  const { schemeColor, setSchemeColor } = useContext(SchemeColorContext)
  const { classes } = useSetClasses()
  const [checked, setChecked] = useState(false)
  const handleOnChange = () => {
    document.body.classList.toggle('dark')
    const modeSchemeColor = document.body.classList.value === 'dark' ? 'dark' : 'light'
    setSchemeColor(modeSchemeColor)
  }

  useEffect(() => {
    schemeColor === 'dark'
      ? setChecked(true)
      : setChecked(false)
  }, [schemeColor])

  return (
    <nav>
      <input checked={checked} id='checkbox' onChange={handleOnChange} type='checkbox'/>
      <label className={`switch-label ${classes.switchLabel}`} htmlFor='checkbox'>
        <i className='sun'><Sun stroke={checked ? '#f46f06' : 'yellow'}/></i>
        <i className='moon'><Moon stroke={checked ? '#ffffff' : '#2c7cdc'}/></i>
        <div className='sliding-color'/>
      </label>
    </nav>

  )
}

export default Switch
