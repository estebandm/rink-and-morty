import React from 'react'

import { useHistory } from 'react-router-dom'

import './styles.css'
import useSetClasses from 'hooks/useSetClasses'

export const Card = ({ image, id }) => {
  const { classes } = useSetClasses()
  const history = useHistory()

  const goDetails = () => {
    history.push(`/character/${id}`)
  }

  return (
    <section className='card-section' onClick={goDetails}>
      <div className={`card-border ${classes.cardBorder}`}>
        <img
          alt="character"
          className='card-img'
          src={image} />
      </div>
    </section>
  )
}

export default Card
