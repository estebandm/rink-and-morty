import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

import CharacterDetails from 'components/Card/Details'
import useSingleCharacter from 'hooks/useSingleCharacter'

export const CharacterDetailsPage = () => {
  const params = useParams()
  const location = useLocation()
  const { character } = useSingleCharacter({ id: params.id })
  return (
    <main>
      <CharacterDetails character={character}/>
    </main>
  )
}

export default CharacterDetailsPage
