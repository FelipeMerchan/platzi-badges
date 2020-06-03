import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge'

const container = document.getElementById('app')

ReactDOM.render(
  <Badge
    firstName="Felipe"
    lastName="Merchan"
    avatarUrl="https://1.gravatar.com/avatar/747c9ab5796cdc4d11bdc15d4814d0a1s"
    jobTitle="Frontend Arquitect"
    twitter="felipe___sc"
  />,
  container)