import React, { useState, useRef, useEffect, useCallback, useContext } from 'react'

import debounce from 'just-debounce-it'

import './styles.css'
import { Context as CharactersContext } from 'context/CharactersContext'
import Container from 'components/core/Container'
import useNearScreen from 'hooks/useNearScreen'

export const Card = ({ characters }) => {
  const { getNextPage, loading, loadingNextPage } = useContext(
    CharactersContext
  )

  const [show, setShow] = useState(false)

  const viewfinderRef = useRef()
  const { isNearScreen } = useNearScreen({ viewfinderRef, once: false })
  const onLoad = () => {
    setShow(true)
  }

  const debounceHandleNextPage = useCallback(debounce(getNextPage, 200), [
    getNextPage
  ])

  useEffect(() => {
    if (isNearScreen && !loadingNextPage) debounceHandleNextPage()// navegar a la siguiente pagina
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <>
      <Container breakPoint="md">
        <main>
          {loading
            ? (
              <div>Cargando...</div>
            )
            : (
              characters.map(character => (
                <section key={character.id}>
                  <div className="border">
                    <img alt="character" onLoad={onLoad} src={character.image} />
                  </div>
                </section>
              ))
            )}
        </main>
        {loadingNextPage && <div style={{ minHeight: '15px' }}>Cargando mas personajes...</div>}
        <div ref={viewfinderRef}></div>
      </Container>
    </>
  )
}

export default Card
