import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Subjects.css'

export default function Subjects() {
    return (
        <div className="wrapper">
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>
            <div className="content-wrapper">
                <h1>SUBJECTS</h1>
            </div>
        </div>
    )
}
