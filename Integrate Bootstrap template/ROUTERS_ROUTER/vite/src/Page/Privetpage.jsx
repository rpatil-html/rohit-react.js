import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import PrivatePage from './PrivatePage' // This should be your private component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/private" component={PrivatePage} />
      </Switch>
    </Router>
  )
}

export default App
