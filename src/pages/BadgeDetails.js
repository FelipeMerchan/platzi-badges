import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0)

  if (count > max) {
    setCount(0)
  }

  return [count, setCount]
}

function BadgeDetails (props) {
  const [ count, setCount ] = useIncreaseCount(4)
  const badge = props.badge

  return (
    <Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row text-center text-md-left">
            <div className="col-12 col-md-6">
              <img src={confLogo} width="280" alt="Logo de la conferencia" />
            </div>
            <div className="col-12 col-md-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="BadgeDetails__content container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-12 col-md-6 text-center text-md-left">
            <h2>Actions</h2>
            <div>
              <div className="mb-4">
                <button onClick={props.onOpenModal} className="btn btn-danger mr-4">
                  Delete
                </button>
                <Link className="btn btn-primary" to={`/badges/${badge.id}/edit`}>
                  Edit
                </Link>
              </div>

              <div>
                <button
                  onClick={() => {
                    setCount(count + 1)
                  }}
                  className="btn btn-primary">
                  Increase Count: {count}
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BadgeDetails