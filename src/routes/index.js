import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from 'components/AppLayout/Header'
import Home from 'pages/Home'
import CharacterDetails from 'pages/CharacterDetails'
import * as ROUTE from 'constants/routes'

export const Routes = () => {
  return (
    <Router>
      <Header>
        <Switch>
          <Route component={CharacterDetails} exact path={ROUTE.DETAILS}/>
          <Route component={Home} exact path={ROUTE.HOME}/>
          <Redirect to={ROUTE.HOME}/>
        </Switch>
      </Header>
    </Router>
  )
}

export default Routes
