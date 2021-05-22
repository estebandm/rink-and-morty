import { useContext, useEffect, useCallback } from 'react'

import { Context as CharactersContext } from 'context/CharactersContext'

export const useCharacters = () => {
  const {
    characters,
    setCharacters,
    pages,
    setPages,
    loading,
    setLoading,
    loadingNextPage,
    setLoadingNextPage
  } = useContext(CharactersContext)

  const getCharacters = useCallback(async () => {
    setLoading(true)
    const res = await fetch('https://rickandmortyapi.com/api/character?')
    const data = await res.json()
    console.log(data)
    const nextPageUrl = data.info.next
    const prevPageUrl = data.info.prev
    setCharacters(data.results)
    setPages({
      ...pages,
      nextPageUrl,
      prevPageUrl
    })
    setLoading(false)
  }, [])

  const getNextPage = useCallback(async () => {
    console.log(pages)
    /*  setLoadingNextPage(true)
    const res = await fetch(pages.nextPageUrl)
    const data = await res.json()
    setCharacters(prev => prev.concat(data.results))
    const nextPageUrl = data.info.next
    const prevPageUrl = data.info.prev
    setPages({
      currentPage,
      nextPageUrl,
      prevPageUrl
    })
    setLoadingNextPage(false) */
  }, [])

  useEffect(() => {
    if (characters.length) return
    getCharacters()
  }, [])

  useEffect(() => {
    if (pages.currentPage === 0) return
    if (!pages.nextPageUrl) return
    getNextPage()
  }, [pages.currentPage])

  return {
    characters,
    setCharacters,
    pages,
    setPages,
    loading,
    setLoading,
    loadingNextPage
  }
}

export default useCharacters
