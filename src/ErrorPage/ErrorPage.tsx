import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/routes'

const ErrorPage:React.FC = () => {
  return (
    <div>
      No such page exists.
      <Link to={ROUTES.mainPage}> Back to main page</Link>
    </div>
  )
}

export default ErrorPage
