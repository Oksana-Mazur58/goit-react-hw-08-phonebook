import React from 'react'
import './UserMenu.scss'
// import { NavLink } from 'react-router-dom'
const UserMenu = ({avatar, name, onLogout}) => (
    <div className="UserContainer">
        <img src={ avatar} alt='' width="32"/>
        <p className="UserName">Welcome, {name }</p>
        <button type='button' className="ButtonUser" onClick ={onLogout}>Logout</button>
    </div>
)
export default UserMenu