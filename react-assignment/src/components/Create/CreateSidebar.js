import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CreateSidebar() {
    return (
        <div className="create-sidebar-main">
            <NavLink exact activeClassName="selected-nav" to="/classes"><div>Classes</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Sports"><div>Sports</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Media"><div>Media</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Library"><div>Library</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Forms"><div>Forms</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/"><div>Human Resources</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/"><div>Admissions</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/"><div>Fees</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/"><div>Payroll</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/"><div>Inventory Management</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/"><div>Exam Patterns</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/"><div>Info</div></NavLink>

        </div>
    )
}
