import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.scss'
const Navigation = () => (
    <nav>
        <NavLink to="/" exact className="NavLink" activeClassName="NavLink__active">Home</NavLink>
        <NavLink to="/contacts" exact className="NavLink" activeClassName="NavLink__active">Contacts</NavLink>
    </nav>
)
export default Navigation

