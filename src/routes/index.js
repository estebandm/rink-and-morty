import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from 'pages/Home'
import * as ROUTE from 'constants/routes'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path={ROUTE.HOME}/>
        <Redirect to={ROUTE.HOME}/>
      </Switch>
    </Router>
  )
}

export default Routes
