import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../src/router'

function App() {
  return <Router>{renderRoutes(routes)}</Router>
}

export default App
