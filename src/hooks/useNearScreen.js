import { useState, useEffect, useRef } from 'react'

export default function useNearScreen ({ distance = '300px', viewfinderRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)

  useEffect(() => {
    let observer
    // entries son todos los elementos que queremos observar
    const onChange = (entries, observer) => {
      const element = entries[0]
      if (element.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
      observer.observe(viewfinderRef.current)
    })

    return () => observer && observer.disconnect()
  })

  return {
    isNearScreen
  }
}
