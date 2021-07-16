import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Users.css'

export default function Users() {
    return (
        <div className="wrapper">
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>
            <div className="content-wrapper">
                <h1>USERS</h1>
                <select>
                    <option value="option1">All</option>
                    <option value="option1">All</option>
                    <option value="option1">All</option>
                </select>
            </div>
        </div>
    )
}
