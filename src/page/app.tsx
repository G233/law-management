import React, { useState } from 'react'
import { HashRouter as Switch, Route, Link } from 'react-router-dom'
import Home from './home/index'
import About from './about/index'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
