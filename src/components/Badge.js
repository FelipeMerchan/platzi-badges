import React from 'react'
import { render } from 'react-dom'

import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render() {
    return <div>
      <div>
        <img src={confLogo} alt="Logo de la conferencia"/>
      </div>
      <div>
        <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
        <h1>Felipe <br /> Merchan</h1>
      </div>

      <div>
        <p>Frontend</p>
        <p>@felipe___sc</p>
      </div>
      <div>
        #PlatziConf
      </div>
    </div>
  }
}

export default Badge