import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
import platziConfLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home container">
          <div className="row">
            <div className="Badge-start col-12 col-md-4">
              <figure className="Badge-start__image__container">
                <img className="Badge-start__image" src={platziConfLogo} />
              </figure>
              <h1 className="Badge-start__title text-uppercase">
                Print your badges
              </h1>
              <p className="Badge-start__description">
                The easiest way to manage your conference
              </p>
              <Link className="btn btn-primary" to="/badges">
                Start now
              </Link>
            </div>
            <div className="Astrounauts-image__container col-12 col-md-8">
              <img className="img-fluid" src={astronauts} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home