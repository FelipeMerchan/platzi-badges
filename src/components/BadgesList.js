import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgesList.css'
import Gravatar from './Gravatar'

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="Profile Badge">
        <figure className="Profile-image__container">
          <Gravatar
            className="Profile-image img-fluid"
            email={this.props.badge.email}
          />
        </figure>
        <div>
          <p className="Profile__name">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <span className="Profile__user-name">@{this.props.badge.twitter}</span>
          <p className="Profile__job-title">{this.props.badge.jobTitle}</p>
        </div>
      </div>
    )
  }
}

function useSearchBadges(badges) {
  const [ query, setQuery ] = React.useState('')
  const [ filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilteredBadges(result)
  }, [ badges, query ])

  return { query, setQuery, filteredBadges}
}

function BadgesList(props) {
  const badges = props.badges

  const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create a new badge
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>

      <ul className="list-unstyled Profile__container">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BadgesList