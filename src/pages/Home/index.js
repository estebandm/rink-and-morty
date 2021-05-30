import React from 'react'

import useCharacters from 'hooks/useCharacters'
import CardList from 'components/Card/CardList'

export const Home = () => {
  const { characters } = useCharacters()
  return (
    <main>
      <CardList characters={characters}/>
    </main>
  )
}

export default Home
