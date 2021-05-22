import React from 'react'

import useCharacters from 'hooks/useCharacters'
import Card from 'components/Card'

export const Home = () => {
  const { characters } = useCharacters()
  return (
    <main>
      <Card characters={characters}/>
    </main>
  )
}

export default Home
