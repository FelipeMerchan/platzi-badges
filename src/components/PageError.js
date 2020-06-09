import React from 'react'
import { Link } from 'react-router-dom'

import './styles/PageError.css'
import typeError from '../images/503-error.svg'

function PageError(props) {
  return (
    <div className="PageError">
      <div className="PageError__image__container">
        <img className="img-fluid" src={typeError} />
      </div>
      <Link className="btn btn-primary" to="/" >
        Volver al Home
      </Link>
    </div>
  )
}

export default PageError