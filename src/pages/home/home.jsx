import React from 'react'
import { NavLink } from 'react-router'

const home = () => {
  return (
    <div>
        <h1>home page</h1>

        <NavLink to="/about" className="btn btn-info">GO TO ABOUT PAGE</NavLink>
    </div>
  )
}

export default home