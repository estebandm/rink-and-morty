import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'

import 'index.css'
import CharactersContext from 'context/CharactersContext'
import SchemeColorContext from 'context/SchemeColorContext'

ReactDOM.render(
  <React.StrictMode>
    <SchemeColorContext.Provider>
      <CharactersContext.Provider>
        <Routes />
      </CharactersContext.Provider>
    </SchemeColorContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
