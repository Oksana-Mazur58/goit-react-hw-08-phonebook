import React from 'react'
import { NavLink  } from 'react-router-dom'
const AuthNav = () => (
    <nav>
        <NavLink to="register">Registration</NavLink>
        <NavLink to = "/login">Login</NavLink>
    </nav>
)
export default AuthNav