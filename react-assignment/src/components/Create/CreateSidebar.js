import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CreateSidebar() {
    return (
        <div className="create-sidebar-main">
            <NavLink exact activeClassName="selected-nav" to="/classes"><div>Classes</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Sports"><div>Sports</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Media"><div>Media</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Calender"><div>Calender</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Library"><div>Library</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Forms"><div>Forms</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/HR"><div>Human Resources</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Admissions"><div>Admissions</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Fees"><div>Fees</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Payroll"><div>Payroll</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/IM"><div>Inventory Management</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/ep"><div>Exam Patterns</div></NavLink>
            <NavLink exact activeClassName="selected-nav" to="/Info"><div>Info</div></NavLink>

        </div>
    )
}
