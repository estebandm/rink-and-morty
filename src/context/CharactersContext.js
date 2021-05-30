import React, { createContext, useState, useCallback } from 'react'

export const Context = createContext()

const initialState = {
  currentPage: 0,
  nextPageUrl: null,
  prevPageUrl: null
}

const Provider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState({})
  const [pages, setPages] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const getNextPage = useCallback(() => {
    setPages({ ...pages, currentPage: pages.currentPage + 1 })
  }, [pages.nextPageUrl])
  const value = {
    characters,
    setCharacters,
    character,
    setCharacter,
    pages,
    setPages,
    loading,
    setLoading,
    loadingNextPage,
    setLoadingNextPage,
    getNextPage
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Context: Context.Consumer
}
