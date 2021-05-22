import React, { useState, useRef, useEffect, useCallback, useContext } from 'react'

import debounce from 'just-debounce-it'

import './styles.css'
import { Context as CharactersContext } from 'context/CharactersContext'
import Container from 'components/core/Container'
import useNearScreen from 'hooks/useNearScreen'

export const Card = ({ characters }) => {
  const { handleNextPage, loading, setPages, pages } = useContext(CharactersContext)

  const [show, setShow] = useState(false)

  const viewfinderRef = useRef()
  const { isNearScreen } = useNearScreen({ viewfinderRef, once: false })
  const onLoad = () => {
    setShow(true)
  }

  const debounceHandleNextPage = useCallback((
    debounce(() => setPages({ ...pages, currentPage: pages.currentPage + 1 }), 200)
  ), [setPages])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()// navegar a la siguiente pagina
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <>
      <Container breakPoint='md'>
        <main>
          {loading
            ? <div>Cargando...</div>
            : characters.map(character => (
              <section key={character.id}>
                <div className='border'>
                  <img alt='character' onLoad={onLoad} src={character.image}/>
                </div>
              </section>
            ))
          }
        </main>
        <div ref={viewfinderRef}></div>
      </Container>
    </>
  )
}

export default Card
