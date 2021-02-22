import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './global.css'
import App from './page/app'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
