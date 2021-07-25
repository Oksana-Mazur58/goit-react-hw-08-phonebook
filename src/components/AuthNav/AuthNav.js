import React from 'react'
import { NavLink } from 'react-router-dom'
import './AuthNav.scss'
const AuthNav = () => (
    <nav>
        <NavLink to="register"exact className="AuthNav" activeClassName="AuthNav__active">Registration</NavLink>
        <NavLink to="/login" exact className="AuthNav" activeClassName="AuthNav__active">Login</NavLink>
    </nav>
)
export default AuthNav