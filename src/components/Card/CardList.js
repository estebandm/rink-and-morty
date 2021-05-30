import React, { useRef, useEffect, useState, useCallback, useContext } from 'react'

import debounce from 'just-debounce-it'

import './styles.css'
import { Context as CharactersContext } from 'context/CharactersContext'
import Container from 'components/core/Container'
import SkeletonCard from 'components/Skeleton'
import Progress from 'components/Pogress'
import Card from './Card'
import { breakPoints } from 'constants/breakpoints'
import useNearScreen from 'hooks/useNearScreen'
import useSetClasses from 'hooks/useSetClasses'
import breakPointObserver from 'hooks/useBreakPoint'

export const CardList = ({ characters }) => {
  const { getNextPage, loading, loadingNextPage, character, setCharacter } = useContext(
    CharactersContext
  )
  const [breakPoint, setBreakPoint] = useState()
  const viewfinderRef = useRef()
  const { isNearScreen } = useNearScreen({
    distance: '600px',
    viewfinderRef,
    once: false
  })
  const { classes } = useSetClasses()
  const debounceHandleNextPage = useCallback(debounce(getNextPage, 200), [
    getNextPage
  ])

  const classMobile = breakPoint === 'mobile' ? 'card-main--mobile' : ''
  const breakPointContainer = breakPoint === 'mobile' ? 'xs' : 'md'

  useEffect(() => {
    if (isNearScreen && !loadingNextPage) debounceHandleNextPage()// navegar a la siguiente pagina
  }, [isNearScreen, debounceHandleNextPage])

  useEffect(() => {
    breakPointObserver(breakPoints, setBreakPoint)
  }, [breakPoint])

  useEffect(() => {
    if (Object.keys(character).length !== 0) {
      setCharacter({})
    }
  }, [])

  return (
    <>
      <Container breakPoint={breakPointContainer}>
        <main className={`card-main ${classMobile}`}>
          {loading
            ? (
              <>
                {[...Array(20)].map((x, i) =>
                  <SkeletonCard key={i}/>
                )}
              </>
            )
            : (
              characters.map(character => (
                <Card
                  id={character.id}
                  image={character.image}
                  key={character.id}
                />
              ))
            )}
        </main>
      </Container>
      {loadingNextPage && <div className={`footer-progress ${classes.footer}`}><Progress/></div>}
      <div ref={viewfinderRef}></div>
    </>
  )
}

export default CardList
