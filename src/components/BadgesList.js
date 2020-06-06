import React from 'react'

import './styles/BadgesList.css'

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled Profile__container">
        {this.props.badges.map((badge) => {
          return (
            <li className="Profile Badge" key={badge.id}>
              <figure className="Profile-image__container">
                <img className="Profile-image img-fluid" src={badge.avatarUrl} />
              </figure>
              <div>
                <p className="Profile__name">
                  {badge.firstName} {badge.lastName}
                </p>
                <span className="Profile__user-name">{badge.twitter}</span>
                <p className="Profile__job-title">{badge.jobTitle}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList