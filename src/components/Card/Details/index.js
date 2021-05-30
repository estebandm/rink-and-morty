import React, { useContext, useState, useEffect } from 'react'

import useSetClasses from 'hooks/useSetClasses'
import { Context as SchemeColorContext } from 'context/SchemeColorContext'
import breakPointObserver from 'hooks/useBreakPoint'
import { breakPoints } from 'constants/breakpoints'
import Button from 'components/core/Button'
import ArrowLeft from 'components/core/icons/ArrowLeft'
import { HOME } from 'constants/routes'
import '../styles.css'
import Characteristics from './Characteristics'

export const CardDetails = ({ character }) => {
  const { classes } = useSetClasses()
  const { schemeColor } = useContext(SchemeColorContext)
  const fill = schemeColor === 'dark' ? '#cdd0ff' : '#000'
  const fillArrowLeft = schemeColor === 'dark' ? '#111' : '#fff'
  const [breakPoint, setBreakPoint] = useState()
  const classMainDetailsMobile = breakPoint === 'mobile' ? 'main-details-mobile' : ''
  const classSectionDetailsMobile = breakPoint === 'mobile' ? 'section-details-mobile' : ''
  const classPictureMobile = breakPoint === 'mobile' ? 'picture-mobile' : ''
  const classImgDetailsMobile = breakPoint === 'mobile' ? 'img-details-mobile' : ''
  const classArrowLeft = breakPoint === 'mobile' ? '20px' : '50px'

  useEffect(() => {
    breakPointObserver(breakPoints, setBreakPoint)
  }, [breakPoint])

  return (
    <main className={`main-details ${classMainDetailsMobile}`}>
      <Button route={HOME}>
        <ArrowLeft fill={fillArrowLeft} height={classArrowLeft} width={classArrowLeft}/>
      </Button>
      <section className={`section-details ${classes.sectionDetails} ${classSectionDetailsMobile}`}>
        <picture className={classPictureMobile}>
          <img
            alt='name character'
            className={`img-details ${classes.imgDetails} ${classImgDetailsMobile}`}
            src={character.image}
          />
        </picture>
        <div className={`container-grid-details ${classes.containerGridDetails}`}>
          <p className='item-grid--details'>Name:</p>
          <strong className='item-grid--details margin-right'>{character.name}</strong>

          <p className='item-grid--details'>Gender: </p>
          <span className='item-grid--details margin-right'>
            <strong className='margin-right--strong'>{character.gender}</strong>
            <Characteristics fill={fill} gender={character.gender}/>
          </span>

          <p className='item-grid--details'>Specie: </p>
          <span className='item-grid--details margin-right'>
            <strong className='margin-right--strong'>{character.species}</strong>
            <Characteristics fill={fill} species={character.species}/>
          </span>

          <p className='item-grid--details'>Status: </p>
          <span className='item-grid--details margin-right'>
            <strong className='margin-right--strong'>{character.status}</strong>
            <Characteristics fill={fill} status={character.status}/>
          </span>

        </div>
      </section>
    </main>
  )
}

export default CardDetails
