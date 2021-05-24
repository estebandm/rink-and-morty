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
    // const data = await res.json()
    const {
      results,
      info: { next, prev }
    } = await res.json()
    setPages({
      ...pages,
      nextPageUrl: next,
      prevPageUrl: prev
    })
    // const nextPageUrl = data.info.next
    // const prevPageUrl = data.info.prev
    // // setNextPageUrl(nextPageUrl)
    // // setPrevPageUrl(prevPageUrl)
    // setPages({
    //   ...pages,
    //   nextPageUrl,
    //   prevPageUrl
    // })
    setCharacters(results)
    setLoading(false)
  }, [pages, setCharacters, setLoading, setPages])

  const getNextPage = useCallback(async () => {
    setLoadingNextPage(true)
    const res = await fetch(pages.nextPageUrl)
    const {
      results,
      info: { next, prev }
    } = await res.json()
    setPages({
      ...pages,
      nextPageUrl: next,
      prevPageUrl: prev
    })
    setCharacters(prev => prev.concat(results))
    // setNextPageUrl(dataNextPage)
    // setPrevPageUrl(dataPrevPage)
    setLoadingNextPage(false)
  }, [pages, setCharacters, setLoadingNextPage, setPages])

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
