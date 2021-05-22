import React from 'react'

import './styles.css'

export const Container = ({
  children,
  breakPoint = 'md' // xs sm md lg xl
}) => {
  return (
    <>
      <div className={breakPoint}>
        {children}
      </div>
    </>
  )
}

export default Container
