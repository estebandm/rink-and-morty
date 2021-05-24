import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'

import 'index.css'
import CharactersContext from 'context/CharactersContext'
import Header from 'components/AppLayout/Header'

ReactDOM.render(
  <React.StrictMode>
    <CharactersContext.Provider>
      <Header>
        <Routes />
      </Header>
    </CharactersContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
