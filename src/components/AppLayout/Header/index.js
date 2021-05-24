import React from 'react'

import './styles.css'
export const Header = ({ children }) => {
  return (
    <>
      <header className='header'>
        <input id='checkbox' type='checkbox'/>
        <label className='header-label' htmlFor='checkbox'>
          <i>Sol</i>
          <i>Luna</i>
          <div className='header-div'/>
        </label>
      </header>
      {children}
    </>

  )
}

export default Header
