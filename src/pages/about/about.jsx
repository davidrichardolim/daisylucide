import React from 'react'
import { NavLink } from 'react-router'

const about = () => {
  return (
    <div>
        <h1>about</h1>

        <NavLink to="/" className="btn btn-info">GO TO HOME PAGE</NavLink>
    </div>
  )
}

export default about