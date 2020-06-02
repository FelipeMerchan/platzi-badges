import React from 'react'
import ReactDOM from 'react-dom'

/* const jsx = <h1>Hello, Platzi Badges from React</h1> */
/* const element = React.createElement(
  'a', 
  { href: 'https://platzi.com/' }, 
  'Ir a Platzi'
  ) */

const name = 'Felipe'
/* const element = React.createElement('h1', {}, `Hola, soy ${name}`) */

const jsx = (
  <div>
    <h1>Hola. Soy Felipe</h1>
    <p>Soy Arquitecto frontend</p>
  </div>
)

const container = document.getElementById('app')

ReactDOM.render(jsx, container)