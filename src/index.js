import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'

import 'index.css'
import CharactersContext from 'context/CharactersContext'

ReactDOM.render(
  <React.StrictMode>
    <CharactersContext.Provider>
      <Routes />
    </CharactersContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
