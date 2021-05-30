import { useEffect, useContext, useState } from 'react'

import { Context as SchemeColorContext } from 'context/SchemeColorContext'

export const useSetClasses = () => {
  const { schemeColor } = useContext(SchemeColorContext)
  const initialState = {
    cardBorder: `card-border--${schemeColor}`,
    switchLabel: `switch-label--${schemeColor}`,
    header: `header--${schemeColor}`,
    skeleton: `skeleton--${schemeColor}`,
    loaderProgress: `loader--${schemeColor}`,
    footer: `footer--${schemeColor}`,
    sectionDetails: `section-details--${schemeColor}`,
    containerGridDetails: `container-grid-details--${schemeColor}`,
    imgDetails: `img-details--${schemeColor}`,
    button: `button--${schemeColor}`
  }

  const [classes, setClasses] = useState(initialState)

  useEffect(() => {
    setClasses(initialState)
  }, [schemeColor])

  return {
    classes
  }
}

export default useSetClasses
