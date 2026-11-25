import React from 'react'
import { NavLink } from 'react-router'

const register = () => {
  return (
    <div>
        <h1>register</h1>

        <NavLink to="/register" className="btn btn-info">GO TO REGISTER</NavLink>
    </div>
  )
}

export default register
