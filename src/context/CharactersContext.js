import React, { createContext, useState, useCallback } from 'react'

export const Context = createContext()

const initialState = {
  currentPage: 0,
  nextPageUrl: null,
  prevPageUrl: null
}

const Provider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [pages, setPages] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const value = {
    characters,
    setCharacters,
    pages,
    setPages,
    loading,
    setLoading,
    loadingNextPage,
    setLoadingNextPage
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Context: Context.Consumer
}
