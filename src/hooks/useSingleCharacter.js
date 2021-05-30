import { useContext, useEffect } from 'react'

import { Context as CharactersContext } from 'context/CharactersContext'

export const useSingleCharacter = ({ id }) => {
  const { character, setCharacter } = useContext(CharactersContext)

  const getCharacter = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json()
    setCharacter(data)
  }

  useEffect(() => {
    getCharacter()
  }, [])

  return {
    character,
    setCharacter
  }
}

export default useSingleCharacter
