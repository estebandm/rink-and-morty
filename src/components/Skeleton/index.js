import React from 'react'

import useSetClasses from 'hooks/useSetClasses'
import './styles.css'

export const SkeletonCard = () => {
  const { classes } = useSetClasses()
  return (
    <div className={`skeleton ${classes.skeleton}`}></div>
  )
}

export default SkeletonCard
